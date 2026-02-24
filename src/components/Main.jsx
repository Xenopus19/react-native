import Constants from "expo-constants";
import { Text, StyleSheet, View } from "react-native";
import AppBar from "./AppBar";
import { Navigate, Route, Routes } from "react-router-native";
import SignIn from "./SignIn";
import useSignIn from "../hooks/useSignIn";
import RepositoryList from "./RepositoryList/RepositoryList";
import RepositoryPage from "./RepositoryPage";
import ReviewForm from "./ReviewForm";
import SignUp from "./SignUp";
import UserReviews from "./UserReviews";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  const [signIn, result] = useSignIn();

  const onSubmit = async (values) => {
    await signIn(values);
  };

  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signIn" element={<SignIn onSubmit={onSubmit} />} />
        <Route path="/repositories/:id" element={<RepositoryPage/>} />
        <Route path="/review" element={<ReviewForm/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/userReviews" element={<UserReviews/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
