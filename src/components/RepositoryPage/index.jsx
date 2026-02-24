import { useQuery } from "@apollo/client/react";
import { REPOSITORY } from "../../graphql/queries";
import RepositoryItem from "../RepositoryItem";
import Text from "../Text";
import { useParams } from "react-router-native";
import { FlatList } from "react-native";
import ReviewItem from "./ReviewItem";
import useRepository from "../../hooks/useRepository";

const RepositoryPage = () => {
  const { id } = useParams();
  const { data, loading, fetchMore } = useRepository(id);

  if (loading && !data) return <Text>Loading...</Text>;

  const reviews = data ? data.repository.reviews.edges.map((e) => e.node) : [];

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent=<br />
      ListHeaderComponent={() => (
        <RepositoryItem repository={data?.repository} showLink={true} />
      )}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryPage;
