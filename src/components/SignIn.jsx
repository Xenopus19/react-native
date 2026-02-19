import { Pressable, StyleSheet, TextInput, View } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  username: yup.string().trim().required("Username is required"),
  password: yup.string().trim().required("Password is required"),
});

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
    borderRadius: theme.border.borderRadius
  },
});

const initialValues = {
  username: "",
  password: "",
};

const SignIn = ({ onSubmit }) => {
  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <View style={styles.container}>
      <Text fontWeight="bold" fontSize={40}>
        Sign In
      </Text>
      <TextInput
        style={{...styles.textField, borderColor: formik.touched.username && formik.errors.username ? 'red' : theme.colors.primary}}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: "red" }}>{formik.errors.username}</Text>
      )}
      <TextInput
        secureTextEntry
        style={{...styles.textField, borderColor: formik.touched.password && formik.errors.password ? 'red' : theme.colors.primary}}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: "red" }}>{formik.errors.password}</Text>
      )}
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
