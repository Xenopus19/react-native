import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client/react";

const useSignOut = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    console.log(await authStorage.getAccessToken())
  };

  return signOut;
};

export default useSignOut;
