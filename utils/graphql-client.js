import { GraphQLClient } from 'graphql-request';

function getData(data) {
  if (!data || data.errors) return null
}

function getErrorMessage(error,data) {
  if (error) return error.message
  if (data && data.errors) {
    return data.error[0].message
  }
  return null
}

const endpoint = 'https://graphql.fauna.com/graphql';

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.faunaDbSecret}`,
  },
});


