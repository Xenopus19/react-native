import { Pressable, StyleSheet, View } from "react-native";
import Text from "../Text";
import ReviewItem from "../RepositoryPage/ReviewItem";
import theme from "../../theme";
import { Link, useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    margin: 5,
  },
  button: {
    padding: 5,
    backgroundColor: "#0077b7",
    alignSelf: "flex-start",
    borderRadius: theme.border.borderRadius,
    height: 50,
    width: 100,
    alignContent: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: theme.colors.textSecondary,
  },
});

const UserReview = ({ review, deleteReview }) => {
    console.log(review)
  const navigate = useNavigate();

  const onDeletePress = () => {
    deleteReview(review.id);
  };
  return (
    <View>
      <Text fontWeight="bold">
        {review.repository.ownerName}/{review.repository.name}
      </Text>
      <ReviewItem review={review} />
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => navigate(`/repositories/${review.repository.id}`)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>View Repository</Text>
        </Pressable>
        <Pressable
          onPress={onDeletePress}
          style={{ ...styles.button, backgroundColor: "#c00202" }}
        >
          <Text style={styles.buttonText}>Delete Review</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UserReview;
