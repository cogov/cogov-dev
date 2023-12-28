import { CfnOutput, Duration, Stack } from 'aws-cdk-lib'
import { EndpointType, LambdaIntegration, LambdaRestApi, MethodLoggingLevel } from 'aws-cdk-lib/aws-apigateway'
import { Certificate, CertificateValidation } from 'aws-cdk-lib/aws-certificatemanager'
import {
	CloudFrontWebDistribution,
	OriginProtocolPolicy,
	SecurityPolicyProtocol,
	SSLMethod,
	ViewerCertificate
} from 'aws-cdk-lib/aws-cloudfront'
import { type ISecurityGroup } from 'aws-cdk-lib/aws-ec2'
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda'
import { Construct } from 'constructs'
import { param_r_ } from 'ctx-core/cli-args'
import { be_, type Ctx_wide_T } from 'ctx-core/object'
import { resolve } from 'import-meta-resolve'
import { join } from 'path'
import { cdk__app_ } from './cdk__app_.js'
import { cdk__env } from './cdk__env.js'
import { www_cdk__id_ } from './cdk__id_.js'
import { NODE_ENV_, type stage_T } from './stage.js'
const cogovme__domainName = 'cogov.me'
const protocolloveme__domainName = 'protocollove.me'
const protocollovelife__domainName = 'protocollove.life'
const args = process.argv.slice(2)
const { stage_a } = param_r_(
	args,
	{ stage_a: '-s, --stage', },
	{ stage_a: [''], })
const dir = new URL(await resolve('.', import.meta.url)).pathname
export async function www_cdk__stack__build(ctx:Ctx_wide_T<''>) {
	process.chdir(join(dir, '..'))
	www_cdk__www__distribution_(ctx)
	cdk__app_(ctx).synth()
}
export const www_cdk__stack_ = be_<
	Stack
>(ctx=>{
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
}, { id: 'www_cdk__stack_' })
export const www_cdk__construct_ = be_<
	Construct
>(ctx=>
		new Construct(www_cdk__stack_(ctx), www_cdk__id_('Construct')),
	{ id: 'www_cdk__construct_' })
export const www_cdk__lambda_function_ = be_<
	Function
>(ctx=>{
	const NODE_ENV = NODE_ENV_(ctx)
	const environment = {
		NODE_ENV,
	}
	const securityGroups:ISecurityGroup[] = []
	const lambda_function =
		new Function(www_cdk__construct_(ctx), www_cdk__id_('LambdaFunction'), {
			runtime: Runtime.NODEJS_18_X,
			code: Code.fromAsset(join(dir, '../dist')),
			handler: 'index.handler',
			timeout: Duration.seconds(90),
			memorySize: 256,
			securityGroups,
			environment,
		})
	new CfnOutput(www_cdk__construct_(ctx), www_cdk__id_('LambdaFunctionArn'), {
		value: lambda_function.functionArn,
	})
	return lambda_function
}, { id: 'www_cdk__lambda_function_' })
export const www_cdk__apigw_ = be_<
	LambdaRestApi
>(ctx=>{
	const www_cdk__apigw = new LambdaRestApi(www_cdk__construct_(ctx), www_cdk__id_('Apigw'), {
		restApiName: www_cdk__id_('Apigw'),
		handler: www_cdk__lambda_function_(ctx),
		proxy: false,
		deployOptions: {
			loggingLevel: MethodLoggingLevel.INFO,
			dataTraceEnabled: true,
		},
		// The first value is ignored & the ~1 is an escaped /
		binaryMediaTypes: [
			'*/*', '*~1*',
		],
		domainName: {
			domainName: cogovme__domainName,
			certificate: www_cdk__cogovme__certificate_(ctx),
			endpointType: EndpointType.REGIONAL,
		},
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
}, { id: 'www_cdk__apigw_' })
export const www_cdk__cogovme__certificate_ = be_<
	Certificate
>(ctx=>{
	const certificate = new Certificate(www_cdk__construct_(ctx), www_cdk__id_('CogovmeCertificate'), {
		domainName: cogovme__domainName,
		subjectAlternativeNames: [
			protocolloveme__domainName,
			protocollovelife__domainName,
		],
		validation: CertificateValidation.fromDns()
	})
	new CfnOutput(www_cdk__construct_(ctx), www_cdk__id_('CogovmeCertificateArn'), {
		value: certificate.certificateArn
	})
	return certificate
}, { id: 'www_cdk__cogovme__certificate_' })
export const www_cdk__www__distribution_ = be_<
	CloudFrontWebDistribution
>(ctx=>{
	const distribution = new CloudFrontWebDistribution(www_cdk__construct_(ctx), www_cdk__id_('WwwDistribution'), {
		defaultRootObject: '',
		originConfigs: [{
			customOriginSource: {
				domainName: www_cdk__apigw_(ctx).domainName!.domainNameAliasDomainName,
				originProtocolPolicy: OriginProtocolPolicy.HTTPS_ONLY,
			},
			behaviors: [{
				isDefaultBehavior: true,
				defaultTtl: Duration.millis(0),
				maxTtl: Duration.millis(0),
				forwardedValues: {
					queryString: true,
					headers: ['Host', 'X-Forwarded-Host'],
				},
			}
			],
		}
		],
		viewerCertificate: ViewerCertificate.fromAcmCertificate(www_cdk__cogovme__certificate_(ctx), {
			aliases: [
				cogovme__domainName,
				protocolloveme__domainName,
				protocollovelife__domainName,
			],
			sslMethod: SSLMethod.SNI,
			securityPolicy: SecurityPolicyProtocol.TLS_V1_2_2021,
		}),
	})
	new CfnOutput(www_cdk__construct_(ctx), www_cdk__id_('WwwDistributionDomainName'), {
		value: distribution.distributionDomainName,
	})
	new CfnOutput(www_cdk__construct_(ctx), www_cdk__id_('WwwDistributionId'), {
		value: distribution.distributionId,
	})
	return distribution
}, { id: 'www_cdk__www__distribution_' })
