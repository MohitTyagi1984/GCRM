import React from 'react';
import { StyleSheet, Text,View } from 'react-native';

class MyQuotations extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (
     <View style={styles.container}>
         <Text style={styles.text}> My Quotations!!!</Text>
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

export default MyQuotations