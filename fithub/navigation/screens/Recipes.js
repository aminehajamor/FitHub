import React from 'react'
import { View, Image ,StyleSheet,Text} from 'react-native'
import tw from 'tailwind-react-native-classnames';
const Recipes = ({ navigation }) => {
    return (
        <View style = {tw`bg-black  items-center h-full`} onPress={() => navigation.navigate('Recipes')}>
      
        <View  style={tw` border  border-gray-900  bg-white mt-1  rounded w-80 h-72`}>
                <Image style = {tw`w-full h-36`} source={require("../../assets/dish1.jpg")}/>
<Text style = {tw` pl-2 pr-20 text-gray-900 font-bold`}>Lemon chicken </Text>
<View style={tw`items-center rounded `}>
        <View style = {tw`pt-2 pr-10 flex flex-row`}>  
           <Text style = {tw` pl-2 text-xs text-black`}><Text style={tw`font-bold text-black`}>INGREDIENTS :</Text>INGREDIENTS
1 tsp cornflour
1 tsp dark soy sauce
Finely grated zest & juice 1/2 small lemon
2 tsp coconut or canola oil
1 skinless chicken breast fillet (around 150g), cut into 1.5cm slices
1 capsicum, any colour, deseeded and sliced
1 medium carrot (around 80g), trimmed and thinly sliced
100g broccoli, cut into small florets
150ml chicken stock (made with 1/2 Massel Plant Based Chicken Stock cube)
4 spring onions, trimmed and thickly sliced</Text>
        </View>
        <View style = {tw`pl-48 rounded `}  >
</View>
</View>
</View>
<View  style={tw` border  border-gray-900  bg-white mt-1  rounded w-80 h-72`}>
                <Image style = {tw`w-full h-36`} source={require("../../assets/dish2.jpg")}/>
<Text style = {tw` pl-2 pr-20 text-gray-900 font-bold`}>Lemon chicken </Text>
<View style={tw`items-center rounded `}>
        <View style = {tw`pt-2 pr-10 flex flex-row`}>  
           <Text style = {tw` pl-2 text-xs text-black`}> <Text style={tw`font-bold text-black`}>INGREDIENTS :</Text>
200g green lentils
2 bay leaves
200g flat pancetta, cut into 1.5cm-thick lardons
1/2 cup (125ml) extra virgin olive oil
1 eschalot, finely chopped
1 garlic clove, finely chopped
Pinch of chilli flakes
2 thyme sprigs
1/4 cup (60ml) red wine vinegar
4 small peaches, seeds removed, cut into wedges
1 bunch rocket, leaves picked
1/2 cup loosely packed mint
1/2 cup loosely packed parsley
1/2 cup loosely packed basil
Crumbled goat’s cheese, to serve</Text>
        </View>
        <View style = {tw`pl-48 rounded `}  >
</View>
</View>
</View>
<View  style={tw` border  border-gray-900  bg-white mt-1  rounded w-80 h-72`}>
                <Image style = {tw`w-full h-36`} source={require("../../assets/dish3.jpg")}/>
<Text style = {tw` pl-2 pr-20 text-gray-900 font-bold`}>Quick chicken roast </Text>
<View style={tw`items-center rounded `}>
        <View style = {tw` pt-2 pr-10 flex flex-row`}>  
           <Text style = {tw` pl-2 text-xs text-black`}><Text style={tw`font-bold text-black`}>INGREDIENTS :</Text>
200g green lentils
2 bay leaves
200g flat pancetta, cut into 1.5cm-thick lardons
1/2 cup (125ml) extra virgin olive oil
1 eschalot, finely chopped
1 garlic clove, finely chopped
Pinch of chilli flakes
2 thyme sprigs
1/4 cup (60ml) red wine vinegar
4 small peaches, seeds removed, cut into wedges
1 bunch rocket, leaves picked
</Text>
        </View>
        <View style = {tw`pl-48 rounded `}  >
</View>
</View>
</View>
      </View>
    )
}

export default Recipes;

const styles = StyleSheet.create({})