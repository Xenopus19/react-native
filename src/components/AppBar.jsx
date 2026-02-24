import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";
import { Link } from "react-router-native";
import { ME } from "../graphql/queries";
import SignOut from "./SignOut";
import { useQuery } from "@apollo/client/react";
import useMe from "../hooks/useMe";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    alignContent: "center",
    padding: 7,
    flexDirection: "row",
    gap: 20,
  },
  scrollView: {
    gap: 30,
    flexDirection: "row",
  },
});

const AppBar = () => {
  const [data, loading] = useMe()
  if (loading) return;

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        <Link to="/">
          <Text color="textSecondary">Rate Repository Application</Text>
        </Link>
        {data.me ? <SignOut/> : 
        <Link to="/signIn">
          <Text color="textSecondary">Sign In</Text>
        </Link>}
        {data.me ? <Link to="/review">
          <Text color="textSecondary">Create review</Text>
        </Link> : <Link to="/signUp">
          <Text color="textSecondary">Sign Up</Text>
        </Link>}
        {data.me && <Link to="/userReviews">
          <Text color="textSecondary">My Reviews</Text>
        </Link>}
      </ScrollView>
    </View>
  );
};

export default AppBar;
