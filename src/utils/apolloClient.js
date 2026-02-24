import { HttpLink } from "@apollo/client";
import { createHttpLink } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Constants from "expo-constants";
import { relayStylePagination } from '@apollo/client/utilities';

const { ApolloUri } = Constants.expoConfig.extra;

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        repositories: relayStylePagination(),
      },
    },
     Repository: {
      fields: {
        reviews: relayStylePagination(),
      },
    },
  },
});

const httpLink = createHttpLink({
  uri: ApolloUri,
});

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();

      return {
        headers: {
          ...headers,
          ...(accessToken ? { authorization: `Bearer ${accessToken}` } : {}),
        },
      };
    } catch (e) {
      console.log(e);
      return { headers };
    }
  });
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
  });
};

export default createApolloClient;
