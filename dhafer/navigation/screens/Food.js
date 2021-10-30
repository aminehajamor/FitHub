import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Food = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text
            onPress={() => navigation.navigate('Food')}
            style={{ fontSize: 26, fontWeight: "bold" }}
            >Food Is hear</Text>
        </View>
    )
}

export default Food

const styles = StyleSheet.create({})
