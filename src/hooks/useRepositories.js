import { useState, useEffect } from "react";
import { GET_REPOSITORIES, GET_REPOSITORIES_FILTER } from "../graphql/queries";
import { useQuery } from "@apollo/client/react";

const useRepositories = ({ orderBy, orderDirection }, searchKeyword) => {
  const { data, loading, fetchMore, ...result } = useQuery(
    GET_REPOSITORIES_FILTER,
    {
      fetchPolicy: "cache-and-network",
      variables: {
        orderBy,
        orderDirection,
        searchKeyword,
        first: 2
      },
    },
  );

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        orderBy,
        orderDirection,
        searchKeyword,
      },
    });
  };

  const repositories = data ? data.repositories : undefined;
  return { repositories, loading, fetchMore: handleFetchMore };
};

export default useRepositories;
