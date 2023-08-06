import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "../../screens/DetailsScreen/detailsScreen";
import HomeScreen from "../../screens/HomeScreen/homeScreen";
import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components/native";

const Stack = createNativeStackNavigator();

const RootLayout = () => {
  const [fontLoaded] = useFonts({
    "Ubuntu-Bold": require("../../../assets/fonts/Ubuntu-Bold.ttf"),
  });

  const theme = {
    textFont: "Ubuntu-Bold",
  };

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
          <Stack.Screen
            name="DetailsScreen"
            component={DetailsScreen}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default RootLayout;
