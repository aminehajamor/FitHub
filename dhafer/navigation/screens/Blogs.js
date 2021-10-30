import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Blogs = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text
            onPress={() => navigation.navigate('Blogs')}
            style={{ fontSize: 26, fontWeight: "bold" }}
            >Blogs are hear</Text>
        </View>
    )
}

export default Blogs

const styles = StyleSheet.create({})
