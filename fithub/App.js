import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {Platform, StyleSheet, Text, View } from "react-native";
import MainCount from './navigation/MainCount.js';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import ChangeView from './routes/homeStack';
import Register from "./components/register.js";
import Login from "./components/login.js"

export default function App() {
  return (
    <SafeAreaProvider> 
      <MainCount/>  
 </SafeAreaProvider> 
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
});

