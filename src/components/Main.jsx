import Constants from "expo-constants";
import { Text, StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Navigate, Route, Routes } from "react-router-native";
import SignIn from "./SignIn";
import useSignIn from "../hooks/useSignIn";

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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
