const cdk = require('@aws-cdk/core');
const codebuild = require('@aws-cdk/aws-codebuild');
const targets = require('@aws-cdk/aws-events-targets');
const lambda = require('@aws-cdk/aws-lambda');
class BuildAwsResourcesCdkStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const fn = new lambda.Function(this, 'MyFunction', {
      runtime: lambda.Runtime.NODEJS_10_X,
      handler: 'index.handler',
      code: lambda.Code.fromInline('exports.handler = function(event, ctx, cb) { return cb(null, "hi"); }')
    });

    const project = new codebuild.Project(this, 'MyProject', {
      buildSpec: codebuild.BuildSpec.fromObject({
        version: '0.2',
        phases: {
          build: {
            commands: [
              'echo "Hello, CodeBuild!"',
            ],
          },
        },
        reports: {
          myReport: {
            files: '**/*',
            'base-directory': 'build/test-results',
          },
        },
      }),
    });

    project.onStateChange('BuildStateChange', {
      target: new targets.LambdaFunction(fn)
    });
  }
}

module.exports = { BuildAwsResourcesCdkStack }
