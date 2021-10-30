import * as React from "react";
import { View, Text } from "react-native";

const MyProfile    = ({ navigation }) => {
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
 export default MyProfile;