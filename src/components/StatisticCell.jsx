import { View } from "react-native";
import Text from "./Text";

const StatisticCell = ({ name, value }) => {
  const calculateShortenedValue = () => {
    const numericalPart = (value / 1000).toString();
    return numericalPart.concat("k");
  };
  const shortenedValue = value < 1000 ? value : calculateShortenedValue();

  return (
    <View>
      <Text fontWeight="bold">{name}</Text>
      <Text>{shortenedValue}</Text>
    </View>
  );
};

export default StatisticCell;
