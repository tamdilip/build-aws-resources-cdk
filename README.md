# 🔧 AWS CDK project

This is a sample project to create aws resources programatically using JavaScript AWS CDK as an easy alternative for cloudformation/terraform way.

The `cdk.json` file tells the CDK Toolkit how to execute your app. The build step is not required when using JavaScript.

### Useful commands

 * `npm run test`         perform the jest unit tests
 * `cdk deploy`           deploy this stack to your default AWS account/region
 * `cdk diff`             compare deployed stack with current state
 * `cdk synth`            emits the synthesized CloudFormation template


### Easy jump start

```sh
        $ mkdir build-aws-resources-cdk
        $ cd build-aws-resources-cdk
        $ cdk init app --language javascript
        $ npm i @aws-cdk/aws-codebuild
        $ npm i @aws-cdk/aws-events-targets
        $ npm i @aws-cdk/aws-lambda
        $ cdk ls
        $ cdk synth
        $ cdk synth > cfn-template-output.yaml
```
### References
 - https://docs.aws.amazon.com/cdk/latest/guide/hello_world.html#hello_world_tutorial_create_app
 - https://docs.aws.amazon.com/cdk/api/latest/docs/aws-codebuild-readme.html
 - https://github.com/aws-samples/aws-cdk-examples/blob/master/typescript/api-cors-lambda-crud-dynamodb/index.ts
 - https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html

**Happy coding :) !!**