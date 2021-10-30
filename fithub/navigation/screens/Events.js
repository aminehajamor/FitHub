
import React from 'react'
import { StyleSheet, Text, View , Image,Button ,TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const Events = ({ navigation }) => {
    return (
      <View style = {tw`bg-black pt-20 items-center h-full`}onPress={() => navigation.navigate('Events')}>
      
      <View  style={tw` border items-center border-gray-900  bg-white  rounded w-80 h-72` }>
              <Image style = {tw`w-full h-36`} source={require("../../assets/mara.jpg")}/>
<Text style = {tw` pr-20 text-gray-900 font-bold`}>Marathon International des Oliviers. </Text>
<Text style = {tw`  text-gray-600 pr-64 pt-2 text-xs font-bold`}>10 KM </Text>
<View style={tw`items-center rounded `}>
      <View style = {tw`pt-2 pr-10 flex flex-row`}>
         <Image style={tw`w-4 h-4  `} source = {require("../../assets/pin.jpg")}/>     
         <Text style = {tw`text-black`}>Africa / Northern Africa / Tunisia / Sfax</Text>
      </View>
      <View style = {tw` pr-40 pt-2 flex flex-row`}>
      
         <Image style={tw` w-8 h-4  `} source = {require("../../assets/calander.jpg")}/>     
        <Text style = {tw`text-black`}>November 06, 2021</Text>
      </View>
      <View style = {tw`pl-48 rounded `}  >
      <TouchableOpacity style ={Styles.button}><Text style={Styles.text}>Show More</Text></TouchableOpacity>  
</View>
</View>
</View>
<View  style={tw` border items-center border-gray-900 mt-2 bg-white  rounded w-80  h-72`}>
              <Image style = {tw`w-full h-36`} source={require("../../assets/kara.jpg")}/>
<Text style = {tw` pr-20 text-gray-900 font-bold`}>Marathon International des Oliviers. </Text>
<Text style = {tw`  text-gray-600 pr-64 pt-2 text-xs font-bold`}>10 KM </Text>
<View style={tw`items-center rounded `}>
      <View style = {tw`pt-2 pr-10 flex flex-row`}>
         <Image style={tw`w-4 h-4  `} source = {require("../../assets/pin.jpg")}/>     
         <Text style = {tw`text-black`}>Africa / Northern Africa / Tunisia / Sfax</Text>
      </View>
      <View style = {tw` pr-40 pt-2 flex flex-row`}>
      
         <Image style={tw` w-8 h-4  `} source = {require("../../assets/calander.jpg")}/>     
        <Text style = {tw`text-black`}>November 06, 2021</Text>
      </View>
      <View style = {tw`pl-48 rounded `}  >
      <TouchableOpacity style ={Styles.button}><Text style={Styles.text}>Show More</Text></TouchableOpacity>  
</View>
</View>
</View>
<View  style={tw` border items-center border-gray-900 mt-2  bg-white  rounded w-80 h-72`}>
              <Image style = {tw`w-full h-36`} source={require("../../assets/mara1.jpg")}/>
<Text style = {tw` pr-20 text-gray-900 font-bold`}>Marathon International des Oliviers. </Text>
<Text style = {tw`  text-gray-600 pr-64 pt-2 text-xs font-bold`}>10 KM </Text>
<View style={tw`items-center rounded `}>
      <View style = {tw`pt-2 pr-10 flex flex-row`}>
         <Image style={tw`w-4 h-4  `} source = {require("../../assets/pin.jpg")}/>     
         <Text style = {tw`text-black`}>Africa / Northern Africa / Tunisia / Sfax</Text>
      </View>
      <View style = {tw` pr-40 pt-2 flex flex-row`}>
      
         <Image style={tw` w-8 h-4  `} source = {require("../../assets/calander.jpg")}/>     
        <Text style = {tw`text-black`}>November 06, 2021</Text>
      </View>
      <View style = {tw`pl-48 rounded `}  >
      <TouchableOpacity style ={Styles.button}><Text style={Styles.text}>Show More</Text></TouchableOpacity>  
</View>
</View>
</View>
       
   </View>
    )
}
const Styles = StyleSheet.create({
   button:{
      backgroundColor: "#E7FF19",
      alignItems: "center",
      padding: 10,
      borderRadius:3
   },
   text:{
      color:"black",
      fontSize: 15,
   }
    
})
export default Events;


