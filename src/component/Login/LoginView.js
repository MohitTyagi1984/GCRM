import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  KeyboardAvoidingView,
  AsyncStorage
} from 'react-native';
import { createAppContainer } from 'react-navigation';
class LoginView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userId   : '',
      password: '',
    };
  }
   render() {
  //  const onPress = () => {
  //   AsyncStorage.getAllKeys((err, keys) => {
  //     AsyncStorage.multiGet(keys, (err, stores) => {
  //       stores.map((result, i, store) => {
  //         // get at each store's key/value so you can work with it
  //         let key = store[i][0];
  //         let value = store[i][1];
  //         if(key === 'userId' && this.state.userId === value){
  //           this.props.navigation.navigate('Dashboard');
  //         }
  //       });
  //     });
  //   });   
  // };
    
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.keyboardContainer}>
      <View style={styles.formContainer}>
      <Text style={styles.header}>Welcome to Greenlam Industries CRM </Text>
      <Text style={{left:20, marginBottom:20}}>User your company ID to sign in </Text>
      <View >
        <TextInput style={styles.textInput}
        onChangeText={(value) => this.setState({userId: value})}
          placeholder="User Id" 
          underlineColorAndroid={'transparent'} />
        <TextInput style={styles.textInput}
          onChangeText={(value) => this.setState({password: value})}
          secureTextEntry={true}
          underlineColorAndroid={'transparent'}
          placeholder="Password" />
      </View>
      <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}
      // onPress={onPress}>
      onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
    </View>
    </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flex:1,
    flexDirection: 'column',
    alignSelf:'stretch',
    paddingLeft: 0,
    paddingRight:0,
    marginTop: 100,
    top: 100,
    left: 0,
    right: 60,
    position: 'absolute'
  },
  textInput: {
    alignSelf: 'stretch',
    padding:15,
    borderRadius:30,
    backgroundColor: 'rgba(255,255,255,0.8)',
    marginBottom: 20,
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
    left: 50
  },
  loginText: {
    color: 'white',
  },
  header: {
    top:0,
    bottom:0,
    marginBottom:20,
    left:20,
    fontSize:18,
    color: '#fff',
    fontWeight: 'bold',
  },
  keyboardContainer: {
    flex:1,
    right: 30,
    left:30
  }
});
 export default LoginView;