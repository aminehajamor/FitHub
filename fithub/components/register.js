import React from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
} from "react-native";
import tw from "tailwind-react-native-classnames";
// import back from '../assets/back.jpg';

export default function Register() {
  return (
    <View style={tw`flex:1, w-full h-full `}>
      <ImageBackground
        style={tw`w-full h-full`}
        source={require("../assets/back.jpg")}
      >
        {/* <ImageBackground source={require('../assets/back.jpg')} /> */}
        <View style={tw`flex:1, bg-black bg-opacity-60 h-4/5 pt-20`}>
          <View style={tw` h-16  w-4/5 ml-8`}>
            <Image
              style={tw` w-full h-full pl-2 `}
              source={require("../assets/logo.png")}
            />
          </View>
          <View style={tw`flex items-center `}>
            <Text style={tw`pt-20  text-white font-bold text-2xl`}>
              Sign Up to your account{" "}
            </Text>
          </View>

          <View style={tw` mt-16 w-4/5 ml-8 flex  `}>
            <TextInput
              style={tw`w-2/5 h-10 mt-4 rounded bg-white text-justify p-2`}
              type="text"
              placeholder="First name"
            />
            <TextInput
              style={tw` ml-40 -mt-10 rounded h-10 bg-white p-2 flex`}
              type="text"
              placeholder="Last name"
            />

            <TextInput
              style={tw`mt-4 rounded h-10 bg-white p-2 flex`}
              type="text"
              placeholder="Email"
            />

            <TextInput
              style={tw`mt-4 rounded h-10 bg-white text-pl-4 p-2 flex `}
              type="text"
              placeholder="Phone number"
              keyboardType="numeric"
            />
            <TextInput
              style={tw`mt-4 rounded h-10 bg-white p-2 flex `}
              secureTextEntry={true}
              placeholder="Password"
            />
            <TextInput
              style={tw`mt-4 rounded h-10 bg-white p-2 flex`}
              secureTextEntry={true}
              placeholder="Verify Password"
            />
          </View>

          {/* <View style={{ width: 167, marginTop: 70, marginLeft: 73 }}> */}
          <View style={tw` text-black pt-6 w-4/5 ml-8`}>
            <Button title="Sign Up" color="#e7ff19" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
