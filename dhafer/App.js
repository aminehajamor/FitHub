import * as React from 'react';
import {View} from 'react-native'
  import MainCount from './navigation/MainCount'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ChangeView from './routes/homeStack';
export default function App() {
  return (
    
    <SafeAreaProvider>
       <ChangeView />
       <MainCount/>  
    </SafeAreaProvider> 
       
  );
}

