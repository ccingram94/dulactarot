// db.js
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.NEXT_AUTH_AWS_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_AUTH_AWS_SECRET_KEY=,
  region: 'eu-central-1'
});

const db = new AWS.DynamoDB.DocumentClient({ apiVersion: 'latest' });

export default db;