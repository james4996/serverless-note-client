const dev = {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_zoUR2povw9dKsVmNkYlYiSY3",
  s3: {
    REGION: "eu-west-1",
    BUCKET: "notes-app-ext-uploads-dev-s3bucket-mxtnxjjzuoeu"
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://dev.n-api.tantami.net"
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_jMFLzk3AV",
    APP_CLIENT_ID: "4t4011q4dbra1mqokm2tom51l5",
    IDENTITY_POOL_ID: "eu-west-1:042d85eb-d177-453f-acd0-23f9266e7ae0"
  }
};

const prod = {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_zoUR2povw9dKsVmNkYlYiSY3",
  s3: {
    REGION: "eu-west-1",
    BUCKET: "notes-app-ext-uploads-prod-s3bucket-yjv2gg5nxgid"
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://prod.n-api.tantami.net"
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_qYLHE7EGC",
    APP_CLIENT_ID: "2c5gldbgek7gbp27t1qbb4j1ab",
    IDENTITY_POOL_ID: "eu-west-1:f396a833-4faa-4035-8aa9-98d10052c784"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};