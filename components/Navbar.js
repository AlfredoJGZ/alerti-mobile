import React from 'react'; 
import { StatusBar } from 'expo-status-bar';
import Constants from "expo-constants";
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

  const navigation = useNavigation();
  
  return(
    <>
      <StatusBar backgroundColor="blue" />
      <View style={styles.navbar}>
        
        <TouchableHighlight>
          <View>
            <FontAwesomeIcon icon={ faBars } size={25} color={'white'} onPress={() => { navigation.toggleDrawer()}}/>
          </View>
        </TouchableHighlight>
        
        <Image 
          style={styles.navbarImg}
          source={require('../assets/alerti-logo.png')}  
        />
  
        <TouchableHighlight>
          <View>
            <FontAwesomeIcon icon={ faSignOutAlt } size={25} color={'white'} />
          </View>  
        </TouchableHighlight>
  
      </View>
    </>
  )
    
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor:'#1E272E',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: Constants.statusBarHeight,
  },
  navbarImg:{
    width: 132,
    height: 28,
  }
});


export default Navbar; 