import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

import { Vpc, SubnetType, Instance, AmazonLinuxImage, InstanceType } from 'aws-cdk-lib/aws-ec2';

export class AwsCdkPlaygroundStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsCdkPlaygroundQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const vpc = new Vpc(this, 'lehnertf-delete-me-vpc', {
      maxAzs: 2,
      subnetConfiguration: [{
        cidrMask: 24,
        name: 'lehnertf-public-subnet',
        subnetType: SubnetType.PUBLIC,
      },]
    })

    const ec2 = new Instance(this, 'lehnertf-delete-me-ec2', {
      vpc,
      instanceType: new InstanceType('t2.micro'),
      machineImage: new AmazonLinuxImage(),
    })

  }
}
