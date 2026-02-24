import { Pressable, StyleSheet, TextInput, View } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { useFormik } from "formik";
import * as yup from "yup";
import { CREATE_REVIEW } from "../graphql/mutations";
import { useNavigate } from "react-router-native";
import { useMutation } from "@apollo/client/react";

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
  author: "",
  name: "",
  rating: 0,
  text: "",
};

const validationSchema = yup.object().shape({
  author: yup.string().trim().required("Author name is required"),
  name: yup.string().trim().required("Repository name is required"),
  rating: yup.number().required().positive().integer().min(0).max(100),
  text: yup.string().trim(),
});

const ReviewForm = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const review = {
      repositoryName: values.name,
      ownerName: values.author,
      rating: Number(values.rating),
      text: values.text,
    };
    try {
      const {data} = await mutate({ variables: {review} });

      if(data?.createReview)
        navigate(`/repositories/${data.createReview.id}`)
    } catch {
        console.log('Error happened')
    }
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const getBorderColor = (fieldName) =>
    formik.touched[fieldName] && formik.errors[fieldName]
      ? "red"
      : theme.colors.primary;

  return (
    <View style={styles.container}>
      <Text fontWeight="bold" fontSize={40}>
        Create Review
      </Text>

      <TextInput
        style={{ ...styles.textField, borderColor: getBorderColor("author") }}
        placeholder="Repository author"
        value={formik.values.author}
        onChangeText={formik.handleChange("author")}
      />
      {formik.touched.author && formik.errors.author && (
        <Text style={{ color: "red" }}>{formik.errors.author}</Text>
      )}

      <TextInput
        style={{ ...styles.textField, borderColor: getBorderColor("name") }}
        placeholder="Repository name"
        value={formik.values.name}
        onChangeText={formik.handleChange("name")}
      />
      {formik.touched.name && formik.errors.name && (
        <Text style={{ color: "red" }}>{formik.errors.name}</Text>
      )}

      <TextInput
        style={{ ...styles.textField, borderColor: getBorderColor("rating") }}
        placeholder="Rating (0-100)"
        keyboardType="numeric"
        value={String(formik.values.rating)}
        onChangeText={formik.handleChange("rating")}
      />
      {formik.touched.rating && formik.errors.rating && (
        <Text style={{ color: "red" }}>{formik.errors.rating}</Text>
      )}

      <TextInput
        style={{
          ...styles.textField,
          borderColor: getBorderColor("text"),
          minWidth: 200,
        }}
        placeholder="Review text"
        multiline
        value={formik.values.text}
        onChangeText={formik.handleChange("text")}
      />

      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText} fontWeight="bold">
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;
