import React from 'react'
import { View, Image ,StyleSheet,Button} from 'react-native';
import tw from 'tailwind-react-native-classnames';
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
const Food = ({ navigation }) => {
    return (
<View style = {tw`bg-black pt-16 items-center h-full` }  onPress={() => navigation.navigate('Food')}>
    
    <View  style={tw` border items-center border-gray-900  bg-white  rounded w-80 h-80`}>
    <GoToButton screenName="Recipes" />
    <Image style={tw`h-full w-full`}  source = {require("../../assets/recipes.jpg")}/>    
        </View>
        <View  style={tw` border items-center border-gray-900 mt-2 bg-white  rounded w-80 h-80`} >
        <GoToButton screenName="Restaurant" />
        <Image style={tw`h-full w-full`}  source = {require("../../assets/traa.jpg")}>
            </Image>    
        </View>
        </View>
    )
}

export default Food

const styles = StyleSheet.create({})
