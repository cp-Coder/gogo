const dotenv = require('dotenv')
dotenv.config()
module.exports = {
  env: {
    /**
    |--------------------------------------------------
    | Set the client secret for your database here.
    |
    | Learn more about managing roles and creating private keys:
    | https://docs.fauna.com/fauna/current/security/
    |--------------------------------------------------
    */
    faunaDbSecret: process.env.FAUNADB_API_KEY,
    faunaDbGraphQlEndpoint: 'https://graphql.fauna.com/graphql',
  },
}
