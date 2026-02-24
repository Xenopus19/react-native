import { useQuery } from "@apollo/client/react";
import { REPOSITORY } from "../graphql/queries";

const useRepository = (repositoryId) => {
  const { data, loading, fetchMore } = useQuery(REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: {
      repositoryId,
      first: 2,
    },
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        repositoryId,
      },
    });
  };

  return { data, loading, fetchMore: handleFetchMore };
};

export default useRepository;
