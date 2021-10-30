
import React from 'react';
import { View, Image, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import tw from 'tailwind-react-native-classnames';
// import { SocialIcon } from 'react-native-elements'
// import back from '../assets/back.jpg'
import { useNavigation, NavigationContainer } from '@react-navigation/native';


function GoToButton({ screenName }) {
  const navigation = useNavigation();

  return (
    <Button style={tw` flex:1 w-full h-full`}
      title={` ${screenName}`} color='#36E08B'
      onPress={() => navigation.navigate(screenName)}
    />
  );
}
export default function Login() {
  return (
    <View style={tw`w-full h-full`}>
      <ImageBackground style={tw`w-full h-full`} source={require("../assets/back.jpg")}>

        {/* <ImageBackground source={require('../assets/back.jpg')} /> */}
        <View style={tw` bg-black bg-opacity-60 h-4/5 pt-20`}>
        <View style={tw` h-16  w-4/5 ml-8`} >
        <Image style={tw` w-full h-full pl-2 `} source={require("../assets/logo.png")}/>
        </View>

          <View style={tw` items-center `}>

            <Text style={tw` pt-16 text-white font-bold text-2xl`} >Log In to FitHub </Text>
          </View>


          <View style={tw` mt-10 w-4/5 ml-8 flex `}>
            <TextInput
              style={tw` h-10 rounded bg-white`}
              type="text"
              placeholder="username"
            />
            <TextInput
              style={tw`mt-4 rounded h-10 bg-white `}
              secureTextEntry={true}
              placeholder="password"
            />
          </View>



          {/* <View style={{ width: 167, marginTop: 70, marginLeft: 73 }}> */}
          <View style={tw`  pt-4 w-4/5 ml-8`}>
          <GoToButton screenName="HomeP"  title="Log In" color="#e7ff19"/>
          </View>
          <View style={tw`items-center`}>
            <Text style={tw`text-white items-center mt-8 `}>Or</Text>
          </View>

          <View style={tw`border border-white items-center bg-white mt-8 rounded w-4/5 ml-8 h-8`}>
            <View style={tw`flex flex-row`} >
              <Image style={tw`mt-1.5 w-4 pl-2 h-4`} source={require("../assets/gogleh.png")} />
              <Text style={tw`mt-1 pl-6 font-bold text-black`}>Connect with GOOGLE</Text>
            </View>

          </View>
          <View style={tw`h-10 mt-6 items-center`}>
            <Text style={tw`text-white  pl-6 pt-4`}>
              Don't have an account ? <Text style={tw`text-blue-400 underline`}>Register</Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>

  )
};

