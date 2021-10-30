import * as React from 'react';
import { Image , Button, View, Text } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tw from 'tailwind-react-native-classnames';
import Coaches from '../navigation/screens/Coeaches.js';
import Events from '../navigation/screens/Events.js';
import Food from '../navigation/screens/Food.js';
import Gyms from '../navigation/screens/Gym.js';
import Bmi from '../navigation/screens/Bmi.js';
import Register from '../components/register.js';
import Login from '../components/login.js';

function GoToButton({ screenName }) {
    const navigation = useNavigation();
  
    return (
      <Button style={tw` flex:1 w-full h-full`}
        title={` ${screenName}`} color='#36E08B'
        onPress={() => navigation.navigate(screenName)}
      />
    );
  }

  function SignupScreen({ navigation }) {
    return (
      <View >
         
        <Login/>
      </View>
    );
  }

  function HomeScreen({ navigation }) {
    return (
     <View style={tw`w-full h-full flex flex-row `}> 
      <View >
          <View style = {{width:100 , height:100}}>
          <Image source={require('../assets/Icons/calandar.png')} style = {{width:70 , height:70}} />
        <GoToButton screenName="Events" />
        </View>
        <View>
        <Image source={require('../assets/Icons/food.jpg')} style = {{width:70 , height:70}}/>
        <GoToButton screenName="Food" />
        </View>
        <View>
        <Image source={require('../assets/Icons/coach.png')} style = {{width:70 , height:70}}/>
        <GoToButton screenName="Coaches" />
        </View>
      </View>
      <View >
      <View>
      <Image source={require('../assets/Icons/gym.jpg')} style = {{width:70 , height:70}}/>
        <GoToButton screenName="Gyms" />
        </View>
      <View >
      <Image source={require('../assets/Icons/bmi.png')} style = {{width:70 , height:70}}/>
        <GoToButton screenName="Bmi" />
      </View>
      </View>
      </View>
     
    );
  }

  const Stack = createNativeStackNavigator();

  function ChangeView (){
    return (
        <NavigationContainer style = { tw`grid grid-cols-3 divide-x divide-green-500`} independent={true}>
          <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home" component={SignupScreen} /> 
            <Stack.Screen name="HomeP" component={HomeScreen} />
            <Stack.Screen name="Coaches" component={Coaches} />
            <Stack.Screen name="Events" component={Events} />
            <Stack.Screen name="Food" component={Food} />
            <Stack.Screen name="Gyms" component={Gyms} />
            <Stack.Screen name="Bmi" component={Bmi} />
           
          </Stack.Navigator>
          
        </NavigationContainer>
      );
  }

  export default ChangeView;