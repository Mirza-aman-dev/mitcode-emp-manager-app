import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen'; // Ensure this is correct
import HomeScreen from './screens/HomeScreen'; // Ensure this is correct

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      setTimeout(() => SplashScreen.hideAsync(), 2000); // Duration of splash
    }
    prepare();
  }, []);

  return (
    <NavigationContainer>
      {/* <View style={styles.splashContainer}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
      </View> */}
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={HomeScreen} // Correct component for Login
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={LoginScreen} // Correct component for Home
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#168fc2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});
