import React from 'react';
import { StyleSheet, Text,Dimensions, Image,ImageBackground, View, KeyboardAvoidingView } from 'react-native';

class Dashboard extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (
     <View style={styles.container}>
         <Text style={styles.text}> Welcome to Dashboard Page!!!</Text>
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
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'center',
    alignContent: 'center',
    left: 50,
    right: 0,
  },
});

export default Dashboard