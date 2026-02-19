import { StyleSheet, View } from "react-native";
import Text from "./Text";
import theme from "../theme";
import RepositoryStatistics from "./RepositoryStatistics";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 3
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    borderRadius: 7,
    padding: 3,
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start'
  }
});

const BasicRepositoryInfo = ({ repository }) => {
  return (
    <View style={styles.container}>
      <Text fontWeight="bold">{repository.fullName}</Text>

      <Text>{repository.description}</Text>
      <Text style={styles.language}>{repository.language}</Text>
      <RepositoryStatistics repository={repository}/>
    </View>
  );
};

export default BasicRepositoryInfo;
