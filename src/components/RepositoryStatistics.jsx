import { StyleSheet, View } from "react-native"
import StatisticCell from "./StatisticCell";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 7
  },
});

const RepositoryStatistics = ({repository}) => {
    return(
        <View style={styles.container}>
            <StatisticCell name='Forks:' value={repository.forksCount}/>
            <StatisticCell name='Rating:' value={repository.ratingAverage}/>
            <StatisticCell name='Reviews:' value={repository.reviewCount}/>
            <StatisticCell name='Stargazers:' value={repository.stargazersCount}/>
        </View>
    )
}

export default RepositoryStatistics