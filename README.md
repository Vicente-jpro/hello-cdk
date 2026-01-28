# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template


```sh
cdk int app --language typescript
```

Check if it is ok with app deploy an application.
```sh
cdk synth 
```

Deploy the app
```sh
cdk deploy
```

Bootstrap enviroment if deploy fail in first atempted.
```sh
cdk bootstrap
```

Install the dependency

```sh
npm i @types/aws-lambda
```

```sh
npm i build
```

```sh
cdk deploy --require-approval never
```


* `npm run build`   compile typescript to js