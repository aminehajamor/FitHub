import * as React from "react";
import { View, Text } from "react-native";

const Communty = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate('Communty')}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Communty Screnn
      </Text>
    </View>
  );
};
 
export default Communty;