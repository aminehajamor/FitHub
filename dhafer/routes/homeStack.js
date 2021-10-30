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
function GoToButton({ screenName }) {
    const navigation = useNavigation();
  
    return (
      <Button
        title={`Go to ${screenName}`}
        onPress={() => navigation.navigate(screenName)}
      />
    );
  }

  function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
        <GoToButton screenName="Blogs" />
      </View>
    );
  }

  function BlogsScreen({ navigation }) {
    return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
      <View >
          <View style = {{width:120 , height:100}}>
          <Image source={require('../assets/Icons/calandar.png')} style = {{width:120 , height:100}} />
        <GoToButton screenName="Events" />
        </View>
        <View>
        <Image source={require('../assets/Icons/food.jpg')} style = {{width:120 , height:100}}/>
        <GoToButton screenName="Food" />
        </View>
        <View>
        <Image source={require('../assets/Icons/coach.png')} style = {{width:120 , height:100}}/>
        <GoToButton screenName="Coaches" />
        </View>
      </View>
      <View >
      <View>
      <Image source={require('../assets/Icons/gym.jpg')} style = {{width:120 , height:100}}/>
        <GoToButton screenName="Gyms" />
        </View>
      <View >
      <Image source={require('../assets/Icons/bmi.png')} style = {{width:120 , height:100}}/>
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
             <Stack.Screen name="Home" component={HomeScreen} /> 
            <Stack.Screen name="Blogs" component={BlogsScreen} />
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