import * as yup from "yup";
import { CREATE_REVIEW, CREATE_USER } from "../graphql/mutations";
import { useNavigate } from "react-router-native";
import { useMutation } from "@apollo/client/react";
import { useFormik } from "formik";
import { StyleSheet, TextInput, View } from "react-native";
import theme from "../theme";
import { Pressable } from "react-native";
import Text from "./Text";
import useSignIn from "../hooks/useSignIn";

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.border.borderRadius,
    borderWidth: theme.border.borderWidth,
    borderColor: theme.colors.primary,
    margin: 20,
    padding: 10,
    alignSelf: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
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
  textField: {
    padding: 5,
    borderWidth: 1,
    borderRadius: theme.border.borderRadius,
  },
});

const initialValues = {
  username: "",
  password: "",
  passwordConfirm: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().trim().required("Username is required").min(5).max(30),
  password: yup.string().trim().required("Password is required").min(5).max(30),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});

const SignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);
  const [signIn, res] = useSignIn();
  const navigate = useNavigate()

  const onSubmit = async ({ username, password }) => {
    try {
      await mutate({ variables: { user: { password, username } } });
      await signIn({username, password})
      navigate('/')
    } catch (error) {}
  };
  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <View style={styles.container}>
      <Text fontWeight="bold" fontSize={40}>
        Register
      </Text>

      <TextInput
        style={{
          ...styles.textField,
          borderColor:
            formik.touched.username && formik.errors.username
              ? "red"
              : theme.colors.primary,
        }}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: "red" }}>{formik.errors.username}</Text>
      )}
      <TextInput
        secureTextEntry
        style={{
          ...styles.textField,
          borderColor:
            formik.touched.password && formik.errors.password
              ? "red"
              : theme.colors.primary,
        }}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: "red" }}>{formik.errors.password}</Text>
      )}
      <TextInput
        secureTextEntry
        style={{
          ...styles.textField,
          borderColor:
            formik.touched.passwordConfirm && formik.errors.passwordConfirm
              ? "red"
              : theme.colors.primary,
        }}
        placeholder="Password Confirmation"
        value={formik.values.passwordConfirm}
        onChangeText={formik.handleChange("passwordConfirm")}
      />
      {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
        <Text style={{ color: "red" }}>{formik.errors.passwordConfirm}</Text>
      )}
      <Pressable
        testID="signInButton"
        style={styles.button}
        onPress={formik.handleSubmit}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

export default SignUp;
