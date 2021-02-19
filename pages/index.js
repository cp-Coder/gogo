import useSWR from 'swr';
import { gql } from 'graphql-request';
import Layout from '../components/layout';
import { graphQLClient } from '../utils/graphql-client';

const fetcher = async (query) => await graphQLClient.request(query);

const Home = () => {
   const { data, error } = useSWR(
    gql`
      {
        allCards {
          data {
            id
            name
            description
            entity
            set
          }
        }
      }
    `,
    fetcher
  );

  if (error) return error;

  return (
    <Layout>
      <h1>Next Fauna GraphQL CRUD</h1>
      data
      /*{data ? (
        <ul>
          {data.allCards.data.map((card) => (
            <li key={card.id}>
              <span>{card.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div>loading...</div>
      )}
      */
    </Layout>
  );
};

export default Home;
