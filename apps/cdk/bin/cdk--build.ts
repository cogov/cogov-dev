#!/usr/bin/env tsx
import 'source-map-support/register'
import { cdk_ctx_, www_cdk__stack__build } from '../src'
const ctx = cdk_ctx_()
www_cdk__stack__build(ctx).then()
