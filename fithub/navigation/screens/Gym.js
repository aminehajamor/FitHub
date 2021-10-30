import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Gym = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text
            onPress={() => navigation.navigate('Gym')}
            style={{ fontSize: 26, fontWeight: "bold" }}
            >The Gyms are here</Text>
        </View>
    )
}

export default Gym

const styles = StyleSheet.create({})
