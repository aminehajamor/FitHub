import * as React from "react";
import { View, Text } from "react-native";

export default MyProfile    = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate('MyProfile')}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        MyProfile Screnn
      </Text>
    </View>
  );
};
 