import React from 'react';
import { StyleSheet, Text,Dimensions, Image,ImageBackground, View, KeyboardAvoidingView } from 'react-native';
import CustomHeader, {} from '../Navigation/CustomHeader/CustomHeader';
import CustomTabNavigator, {} from '../Navigation/CustomTab/CustomTabNavigator';
class Home extends React.Component {
  constructor(){
    super();
  }
  static router = CustomTabNavigator.router;
  render() {
    return (
     <View style={styles.container}>
         <CustomHeader navigation={this.props.navigation} />
          <CustomTabNavigator navigation={this.props.navigation} />
     </View>
    );
  }
}

const styles = StyleSheet.create({
  ImgView:{
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'center',
    alignContent: 'center',
    left: 50,
    right: 0,
  },
});

export default Home