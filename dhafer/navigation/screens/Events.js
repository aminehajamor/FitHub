import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Events = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text
            onPress={() => navigation.navigate('Events')}
            style={{ fontSize: 26, fontWeight: "bold" }}
            >There is the events</Text>
        </View>
    )
}

export default Events

const styles = StyleSheet.create({})
