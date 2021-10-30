import React from 'react'
import { View, Image, StyleSheet, Button ,Text} from 'react-native'
import tw from 'tailwind-react-native-classnames';

const Restaurant = ({ navigation }) => {
    return (
        <View style={tw` bg-black pt-20 items-center h-full`} onPress={() => navigation.navigate('Restaurant')}>

            <View style={tw` border border-gray-900  mt-1 bg-white  rounded w-80 h-64`}>
                <Image style={tw`w-full h-36`} source={require("../../assets/healrouz.jpg")} />
                <Text style={tw` pl-2 text-gray-900 font-bold`}>Rouz bel khodhra </Text>
                <Text style={tw` pl-2 text-gray-600 pr-64 pt-2 text-xs font-bold`}>10 DT </Text>
                <View style={tw`items-center rounded `}>
                    <View style={tw`pt-2 pr-10 flex flex-row`}>
                        <Image style={tw`w-4 h-4  `} source={require("../../assets/pin.jpg")} />
                        <Text style={tw`text-black`}>Africa / Northern Africa / Tunisia / Sfax</Text>
                    </View>
                    <View style={tw`pl-48 `} >
                        <Button color="#e7ff19" title="Show more" />
                    </View>
                </View>
            </View>
            <View style={tw` border border-gray-900  mt-1 bg-white  rounded w-80 h-64`}>
                <Image style={tw`w-full h-36`} source={require("../../assets/healrouz.jpg")} />
                <Text style={tw` pl-2 text-gray-900 font-bold`}>Rouz bel khodhra </Text>
                <Text style={tw` pl-2 text-gray-600 pr-64 pt-2 text-xs font-bold`}>10 DT </Text>
                <View style={tw`items-center rounded `}>
                    <View style={tw`pt-2 pr-10 flex flex-row`}>
                        <Image style={tw`w-4 h-4  `} source={require("../../assets/pin.jpg")} />
                        <Text style={tw`text-black`}>Africa / Northern Africa / Tunisia / Sfax</Text>
                    </View>
                    <View style={tw`pl-48 `} >
                        <Button color="#e7ff19" title="Show more" />
                    </View>
                </View>
            </View>
            <View style={tw` border border-gray-900  mt-1 bg-white  rounded w-80 h-64`}>
                <Image style={tw`w-full h-36`} source={require("../../assets/healrouz.jpg")} />
                <Text style={tw` pl-2 text-gray-900 font-bold`}>Rouz bel khodhra </Text>
                <Text style={tw` pl-2 text-gray-600 pr-64 pt-2 text-xs font-bold`}>10 DT </Text>
                <View style={tw`items-center rounded `}>
                    <View style={tw`pt-2 pr-10 flex flex-row`}>
                        <Image style={tw`w-4 h-4  `} source={require("../../assets/pin.jpg")} />
                        <Text style={tw`text-black`}>Africa / Northern Africa / Tunisia / Sfax</Text>
                    </View>
                    <View style={tw`pl-48 `} >
                        <Button color="#e7ff19" title="Show more" />
                    </View>
                </View>
            </View>

        </View>
    )
}

export default Restaurant

const styles = StyleSheet.create({})