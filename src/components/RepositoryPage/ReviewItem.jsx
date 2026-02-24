import { StyleSheet, View } from "react-native";
import Text from "../Text";
import Rating from "./Rating";
import { format, parseISO } from 'date-fns';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 7,
    alignItems: "flex-start",
  },
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  grayText: {
    color: "#434343",
  },
});

const ReviewItem = ({ review }) => {
  const date = parseISO(review.createdAt);

  const formattedDate = format(date, "dd.MM.yyyy");
  return (
    <View style={styles.container}>
      <Rating rating={review.rating} />
      <View style={styles.contentContainer}>
        <Text fontWeight="bold">{review.user.username}</Text>
        <Text style={styles.grayText}>{formattedDate}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
