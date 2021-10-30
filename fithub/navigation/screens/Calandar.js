import  React from "react";
import { View, Text } from "react-native";

const Calandar = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate('Calandar')}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Calander Screnn
        
      </Text>
    </View>
  );
};
 
export default Calandar;