import { useApolloClient, useMutation } from "@apollo/client/react";
import { AUTHENTICATE } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({
        variables: {
          username,
          password,
        },
      });

      console.log(data);
      await authStorage.setAccessToken(data.authenticate.accessToken);
      apolloClient.resetStore()
    } catch (e) {
      console.log(e);
    }
  };

  return [signIn, result];
};

export default useSignIn;
