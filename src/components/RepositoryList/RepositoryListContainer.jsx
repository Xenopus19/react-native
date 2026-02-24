import { FlatList, Pressable, StyleSheet, View } from "react-native";
import RepositoryItem from "../RepositoryItem";
import { useNavigate } from "react-router-native";
import ItemSeparator from "../../utils/itemSeparator";

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#e4e5ee",
  },
});

const RepositoryListContainer = ({ repositories, onEndReach}) => {
  const navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={<ItemSeparator/>}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/repositories/${item.id}`)}>
          <RepositoryItem repository={item} />
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryListContainer;
