import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../src/Screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import ListContact from '../src/Screens/ListContact';
import Menu from '../src/Screens/Menu';
import DetailContact from '../src/Screens/DetailContact';





const Stack = createNativeStackNavigator();
export default function NavigationRouter() {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };  
  return (
    <>
    <NavigationContainer>

    <Stack.Navigator screenOptions={{
          headerShown: false
      }}
      initialRouteName='splash'
      >
        <Stack.Screen name="splash" component={SplashScreen}  />
        <Stack.Screen name="ListContact" component={ListContact}  />
        <Stack.Screen name="Menu" component={Menu}  />
        <Stack.Screen name="DetailContact" component={DetailContact}  />
  
    </Stack.Navigator>
    </NavigationContainer>
 
    </>

  )
}