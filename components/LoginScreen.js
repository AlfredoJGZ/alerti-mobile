import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from "expo-constants";
import { View, Text, TextInput, StyleSheet, Image, TouchableHighlight } from 'react-native';

function LoginScreen() {
    return ( 
    <>
      <StatusBar barStyle = "light-content" backgroundColor = "#1E272E" />
      <View style={styles.container}>
        <Image 
          style={styles.loginImg}
          source={require('../assets/alerti-logo.png')}  
        />
        <Text style={styles.text}>
          Iniciar Sesión
        </Text>
        <TextInput style={styles.input} placeholder='Nombre de usuario' />
        <TextInput style={styles.input} placeholder='Contraseña' secureTextEntry />
        <TouchableHighlight>
          <Text style={styles.button} onPress={()=>{alert('you pressed')}}>
            Entrar
          </Text>
        </TouchableHighlight>
      </View>
    </>
    );
};

const styles = StyleSheet.create({
    container:{
      backgroundColor: '#f5f5f5',
      marginTop: Constants.statusBarHeight,
      height: 100 +'%',
      width: 100 + '%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text:{
      fontSize: 25,
      marginBottom: 15
    },
    loginImg:{
      width: 264,
      height: 56,
      marginBottom: 25
    },
    input:{
      borderWidth: 1,
      borderColor: '#1E272E',
      borderRadius: 5,
      height: 40,
      width: 80 + '%',
      padding: 10,
      marginBottom: 15
    },
    button:{
      paddingVertical: 15,
      paddingHorizontal: 30,
      backgroundColor: '#1E272E',
      color: '#FFFFFF',
      borderRadius: 5,
      fontSize: 15
    }
  });

export default LoginScreen; 