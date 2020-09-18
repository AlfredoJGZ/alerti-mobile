import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return(
    <View style={styles.navbar}>
      <FontAwesomeIcon icon={ faBars } size={25} color={'white'} />
      <Image 
        style={styles.navbarImg}
        source={require('./assets/alerti-logo.png')}  
      />
      <FontAwesomeIcon icon={ faSignOutAlt } size={25} color={'white'} />
    </View>
  )
};

export default function App() {
  return (
    <Navbar />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    backgroundColor: '#1E272E',
    marginTop: 25, 
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  navbarImg: {
    width: 132,
    height: 28
  }
});
