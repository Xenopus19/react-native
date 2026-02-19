import { Image, View } from "react-native-web";
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
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 7
  },
 
});

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar}
        source={{
          uri: repository.ownerAvatarUrl,
        }}
      ></Image>
      <BasicRepositoryInfo repository={repository}/>
    </View>
  );
};

export default RepositoryItem;
