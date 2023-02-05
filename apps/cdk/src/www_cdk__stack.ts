import { param_r_ } from '@ctx-core/cli-args'
import { be_, type Ctx } from '@ctx-core/object'
import { CfnOutput, Duration, Stack } from 'aws-cdk-lib'
import { EndpointType, LambdaIntegration, LambdaRestApi, MethodLoggingLevel } from 'aws-cdk-lib/aws-apigateway'
import { Certificate, CertificateValidation } from 'aws-cdk-lib/aws-certificatemanager'
import { Distribution } from 'aws-cdk-lib/aws-cloudfront'
import { RestApiOrigin } from 'aws-cdk-lib/aws-cloudfront-origins'
import { type ISecurityGroup } from 'aws-cdk-lib/aws-ec2'
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda'
import { Construct } from 'constructs'
import { resolve } from 'import-meta-resolve'
import { join } from 'path'
import { cdk__app_ } from './cdk__app_.js'
import { cdk__env } from './cdk__env.js'
import { www_cdk__id_ } from './cdk__id_.js'
import { NODE_ENV_, type stage_T } from './stage.js'
const domainName = 'protocollove.life'
const args = process.argv.slice(2)
const { stage_a } = param_r_(
	args,
	{ stage_a: '-s, --stage', },
	{ stage_a: [''], })
const dir = new URL(await resolve('.', import.meta.url)).pathname
export async function www_cdk__stack__build(ctx:Ctx) {
	process.chdir(join(dir, '..'))
	www_cdk__app__distribution_(ctx)
	cdk__app_(ctx).synth()
}
export const www_cdk__stack_ = be_<
	Stack
>('www_cdk__stack_', ctx=>{
	const stage = (stage_a[0] || 'prod') as stage_T
	return new Stack(cdk__app_(ctx), www_cdk__id_('Stack'), {
		env: {
			account: cdk__env.CDK_DEFAULT_ACCOUNT,
			region: 'us-east-1',
		},
		tags: {
			stage: stage as stage_T,
		}
	})
})
export const www_cdk__construct_ = be_<
	Construct
>('www_cdk__construct_', ctx=>
	new Construct(www_cdk__stack_(ctx), www_cdk__id_('Construct')))
export const www_cdk__lambda_function_ = be_<
	Function
>('www_cdk__lambda_function_', ctx=>{
	const NODE_ENV = NODE_ENV_(ctx)
	const environment = {
		NODE_ENV,
	}
	const securityGroups:ISecurityGroup[] = []
	const lambda_function =
		new Function(www_cdk__construct_(ctx), www_cdk__id_('LambdaFunction'), {
			runtime: Runtime.NODEJS_18_X,
			code: Code.fromAsset(join(dir, '../../www/dist')),
			handler: 'server/index.handler',
			timeout: Duration.seconds(90),
			memorySize: 256,
			securityGroups,
			environment,
		})
	new CfnOutput(www_cdk__construct_(ctx), www_cdk__id_('LambdaFunctionArn'), {
		value: lambda_function.functionArn,
	})
	return lambda_function
})
export const www_cdk__apigw_ = be_<
	LambdaRestApi
>('www_cdk__apigw_', ctx=>{
	const www_cdk__apigw = new LambdaRestApi(www_cdk__construct_(ctx), www_cdk__id_('Apigw'), {
		restApiName: www_cdk__id_('Apigw'),
		handler: www_cdk__lambda_function_(ctx),
		proxy: false,
		deployOptions: {
			loggingLevel: MethodLoggingLevel.INFO,
			dataTraceEnabled: true,
		},
		binaryMediaTypes: [
			'*/*', '*~1*',
		],
		// The first value is ignored & the ~1 is an escaped /
		endpointTypes: [EndpointType.REGIONAL],
		cloudWatchRole: true,
	})
	www_cdk__apigw.root.addMethod(
		'ANY',
		new LambdaIntegration(www_cdk__lambda_function_(ctx)))
	www_cdk__apigw.root.addResource('{proxy+}').addMethod(
		'ANY',
		new LambdaIntegration(www_cdk__lambda_function_(ctx), {
			requestParameters: {
				'integration.request.path.proxy': 'method.request.path.proxy',
			}
		}),
		{
			requestParameters: {
				'method.request.path.proxy': true
			}
		})
	new CfnOutput(www_cdk__construct_(ctx), www_cdk__id_('ApigwDomainName'), {
		value: www_cdk__apigw.url
	})
	return www_cdk__apigw
})
export const www_cdk__certificate_ = be_<
	Certificate
>('www_cdk__certificate_', ctx=>{
	const certificate = new Certificate(www_cdk__construct_(ctx), www_cdk__id_('Certificate'), {
		domainName,
		validation: CertificateValidation.fromDns(),
	})
	new CfnOutput(www_cdk__construct_(ctx), www_cdk__id_('CertificateArn'), {
		value: certificate.certificateArn
	})
	return certificate
})
export const www_cdk__app__distribution_ = be_<
	Distribution
>('www_cdk__app__distribution_', ctx=>{
	const distribution = new Distribution(www_cdk__construct_(ctx), www_cdk__id_('AppDistribution'), {
		defaultBehavior: {
			origin: new RestApiOrigin(www_cdk__apigw_(ctx)),
		},
		domainNames: [domainName],
		certificate: www_cdk__certificate_(ctx),
	})
	new CfnOutput(www_cdk__construct_(ctx), www_cdk__id_('AppDistributionDomainName'), {
		value: distribution.distributionDomainName,
	})
	new CfnOutput(www_cdk__construct_(ctx), www_cdk__id_('AppDistributionId'), {
		value: distribution.distributionId,
	})
	return distribution
})
