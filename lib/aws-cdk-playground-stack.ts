import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

import { Vpc, SubnetType } from 'aws-cdk-lib/aws-ec2';

export class AwsCdkPlaygroundStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsCdkPlaygroundQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const vpc = new Vpc(this, 'MainVpc', {
      maxAzs: 2,
      subnetConfiguration: [{
        cidrMask: 24,
        name: 'public-subnet',
        subnetType: SubnetType.PUBLIC,
      },]
    })

  }
}
