import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import path from 'path';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Define a Lambda function using NodejsFunction
    const lambdaFunction = new NodejsFunction(this, 'HelloFunction', {
      entry: path.join(__dirname, 'functions/hello.ts'),
      handler: 'handler',
      runtime: Runtime.NODEJS_22_X,


      // bundle configurations can be added here if needed
      bundling: {
        minify: true,
        sourceMap: true,
        externalModules: [
          'aws-sdk'
        ],
      }
    });

    // Define the API Gateway or other resources to trigger the Lambda function here
    new apigateway.LambdaRestApi(this, 'HelloApi', {
      handler: lambdaFunction,
    });

  }
}
