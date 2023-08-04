import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@/screens/HomeScreen/homeScreen';
import DetailsScreen from '@/screens/DetailsScreen/detailsScreen';

const Stack = createNativeStackNavigator();

const RootLayout = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home Screen' component={HomeScreen}></Stack.Screen>
        <Stack.Screen  name='Details Screen' component={DetailsScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootLayout;