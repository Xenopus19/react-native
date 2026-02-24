import { useQuery } from "@apollo/client/react";
import { ME } from "../graphql/queries";

const useMe = (includeReviews = false) => {
  const { data, error, loading, refetch } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
    variables: { includeReviews },
  });

  return [data, loading, refetch];
};

export default useMe;
