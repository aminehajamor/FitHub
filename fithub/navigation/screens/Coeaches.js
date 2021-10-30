import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Coeaches = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text
            onPress={() => navigation.navigate('Coeaches')}
            style={{ fontSize: 26, fontWeight: "bold" }}
            >Coeaches Are here</Text>
        </View>
    )
}

export default Coeaches

const styles = StyleSheet.create({})