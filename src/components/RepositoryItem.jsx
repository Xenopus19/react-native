import { Image, Linking, Pressable, View } from "react-native";
import theme from "../theme";
import { StyleSheet } from "react-native";
import Text from "./Text";
import BasicRepositoryInfo from "./BasicRepositoryInfo";
import RepositoryStatistics from "./RepositoryStatistics";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignContent: "center",
    gap: 10,
    padding: 3,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 7,
  },
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: theme.colors.primary,
    color: "white",
    borderRadius: theme.border.borderRadius,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});

const RepositoryItem = ({ repository, showLink = false }) => {
  return (
    <View testID="repositoryItem" style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri: repository.ownerAvatarUrl,
        }}
      ></Image>
      <BasicRepositoryInfo repository={repository} />
      {repository.url && showLink && (
        <Pressable style={styles.button} onPress={() => Linking.openURL(repository.url)}>
          <Text style={styles.buttonText}>Go to Github</Text>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryItem;
