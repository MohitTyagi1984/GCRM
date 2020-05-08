import React from 'react';
import { StyleSheet, Text,Dimensions, Image,ImageBackground, View, KeyboardAvoidingView } from 'react-native';
import LoginView, {  } from './src/component/Login/LoginView';
import Dashboard, {  } from './src/component/Dashboard/Dashboard';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateLeads, {} from './src/component/Lead/CreateLeads';
import MyLeads, {} from './src/component/Lead/MyLeads';
import MainApp, {} from './src/component/MainApp';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
// import {createStackNavigator} from 'react-navigation-stack';
import {AsyncStorage} from 'react-native';
import { registerRootComponent } from 'expo';
class App extends React.Component {
  constructor(){
    super();
    AsyncStorage.setItem('userId', 'mohit@gmail.com');
    AsyncStorage.setItem('password', 'tyagi');
    // this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  // toggleDrawer() {
  //   //Props to open/close the drawer
  //   this.props.navigationProps.toggleDrawer();
  // };
  render() {
    return (
      <View style={styles.container}>
        <MainApp />
      </View>
    );
  }
} 
// const MyTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: 'lightgrey'
//   },
// };
// const Stack = createStackNavigator();

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
registerRootComponent(App);