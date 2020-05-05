import React from 'react';
import { StyleSheet, Text,Dimensions, Image,ImageBackground, View, KeyboardAvoidingView } from 'react-native';
import LoginView, {  } from './src/component/Login/LoginView';
import Dashboard, {  } from './src/component/Dashboard/Dashboard';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AsyncStorage} from 'react-native';
class App extends React.Component {
  constructor(){
    super();
    AsyncStorage.setItem('userId', 'mohit@gmail.com');
    AsyncStorage.setItem('password', 'tyagi');
  }
  render() {
    return (
      // <ImageBackground style={styles.ImgView} source={require('./assets/Image/GreenLamImg1.jpg')} 
      // resizeMode= "stretch">
          // <View style={styles.container}>
           <NavigationContainer theme={MyTheme} >
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={LoginView} options={{ headerShown: false }}/>
            <Stack.Screen name="Dashboard" component={Dashboard} />
          </Stack.Navigator>
          </NavigationContainer>
        //  </View>
        //  </ImageBackground>
    );
  }
} 
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'lightgrey'
  },
};
const Stack = createStackNavigator();
const styles = StyleSheet.create({
  ImgView:{
    flex: 1,
    fontFamily: "lato-regular",
    width: "100%",
    height: "100%"
  },
  container: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'transparent'
  },
});

export default App