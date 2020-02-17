export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-api-uploads22"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://d3fghui6d3.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_L2kBGUt3w",
      APP_CLIENT_ID: "6ql1flu11gfop9cqgnrgkqlvql",
      IDENTITY_POOL_ID: "us-east-1:19fc81e2-e0fa-42f2-be35-9aa9882610ed"
    }
  };