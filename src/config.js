const dev = {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_zoUR2povw9dKsVmNkYlYiSY3",
  s3: {
    REGION: "eu-west-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1ad3blxu54mu3"
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://api.tantami.net/dev"
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_MsAFumKuz",
    APP_CLIENT_ID: "3soph1c7j8gr8c27ms16b2hlm1",
    IDENTITY_POOL_ID: "eu-west-1:71d4a6a2-999c-4075-84a3-ab6168776a33"
  }
};

const prod = {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_zoUR2povw9dKsVmNkYlYiSY3",
  s3: {
    REGION: "eu-west-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1jeea7w2ym34l"
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://api.tantami.net/prod"
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_WvuwU4EeS",
    APP_CLIENT_ID: "681p58vb6al5l4rs4cia8p7php",
    IDENTITY_POOL_ID: "eu-west-1:7b0c160a-cecc-4a04-ae85-7c89dd5c4675"
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