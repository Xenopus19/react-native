import { StyleSheet, TextInput, View } from "react-native";
import Text from "../Text";
import { Picker } from "@react-native-picker/picker";
import { Searchbar } from 'react-native-paper';

const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: "25%",
    backgroundColor: "#ffffff",
  },
});

const OrderSelector = ({ setOrder, order, searchKeyword, setKeyword }) => {
  const orders = {
    latest: { ...order, orderDirection: "DESC", orderBy: "CREATED_AT" },
    highestRating: {
      ...order,
      orderDirection: "DESC",
      orderBy: "RATING_AVERAGE",
    },
    lowestRating: {
      ...order,
      orderDirection: "ASC",
      orderBy: "RATING_AVERAGE",
    },
  };

  const currentKey =
    Object.keys(orders).find(
      (key) =>
        orders[key].orderBy === order.orderBy &&
        orders[key].orderDirection === order.orderDirection,
    ) || "latest";

  return (
    <View>
      <Text>Order by:</Text>
      <Picker
        selectedValue={currentKey}
        onValueChange={(itemValue) => setOrder(orders[itemValue])}
        style={styles.picker}
      >
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rated repositories" value="highestRating" />
        <Picker.Item label="Lowest rated repositories" value="lowestRating" />
      </Picker>
      <Searchbar
        placeholder="Search keyword"
        value={searchKeyword}
        onChangeText={(itemValue) => {setKeyword(itemValue)}}
      />
    </View>
  );
};

export default OrderSelector;
