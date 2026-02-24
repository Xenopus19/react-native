import { FlatList } from "react-native";
import useMe from "../../hooks/useMe";
import Text from "../Text";
import ItemSeparator from "../../utils/itemSeparator";
import UserReview from "./UserReview";
import { useMutation } from "@apollo/client/react";
import { DELETE_REVIEW } from "../../graphql/mutations";

const UserReviews = () => {
  const [data, loading, refetch] = useMe(true);
  const [mutate, result] = useMutation(DELETE_REVIEW);

  const deleteReview = async (id) => {
    try {
      await mutate({
        variables: {
          deleteReviewId: id
        },
      });
      await refetch();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <Text>Loading...</Text>;
  const reviews = data.me.reviews.edges.map((e) => e.node);

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={<ItemSeparator />}
      renderItem={({ item }) => <UserReview deleteReview={deleteReview} review={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default UserReviews;
