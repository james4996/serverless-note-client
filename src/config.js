export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_zoUR2povw9dKsVmNkYlYiSY3",
    s3: {
      REGION: "eu-west-1",
      BUCKET: "tantami-notes-serve"
    },
    apiGateway: {
      REGION: "eu-west-1",
      URL: "https://uchrzojv3f.execute-api.eu-west-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "eu-west-1",
      USER_POOL_ID: "eu-west-1_YPUrlrnQm",
      APP_CLIENT_ID: "4h393b1ifksr8tbm0knj0s3jqc",
      IDENTITY_POOL_ID: "eu-west-1:7043f1aa-6f69-4fa2-b0e1-1d25eb01815e"
    }
  };