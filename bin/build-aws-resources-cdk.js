#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { BuildAwsResourcesCdkStack } = require('../lib/build-aws-resources-cdk-stack');

const app = new cdk.App();
new BuildAwsResourcesCdkStack(app, 'BuildAwsResourcesCdkStack');
