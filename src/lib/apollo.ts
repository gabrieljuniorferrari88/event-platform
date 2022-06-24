import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const URI = import.meta.env.VITE_GRAPHQL_URI!;

export const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache(),
});

export const POLL_INTERVAL = 60 * 60 * 24 * 7 * 1000;

export const RETRIEVE_LESSON_BY_SLUG = gql`
  query ($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      description
      videoId
      challenge {
        url
      }
      teacher {
        name
        bio
        avatarURL
      }
    }
  }
`;
