import React from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DashboardsScreen from './components/DashboardsScreen';
import OpcionesScreen from './components/OpcionesScreen';
import MonitoresScreen from './components/MonitoresScreen';
import FalabellaPeruScreen from './components/FalabellaPeruScreen';
import CmrArgentinaScreen from './components/CmrArgentinaScreen';
import CmrChileScreen from './components/CmrChileScreen';
import FalabellaChileScreen from './components/FalabellaChileScreen';
import FalabellaColombiaScreen from './components/FalabellaColombiaScreen';
import CmrMexicoScreen from './components/CmrMexicoScreen';
import AmbientesScreen from './components/AmbientesScreen';
import LoginScreen from './components/LoginScreen'; 

const Drawer = createDrawerNavigator();

export default function App() {
  const logged = false; 
  return (
    <>
    
    <NavigationContainer>
      {logged ? (
        <Drawer.Navigator initialRouteName='Dashboards' drawerStyle={styles.drawer} drawerContentOptions={drawerItemsStyles}>
          <Drawer.Screen name='Dashboards' component={DashboardsScreen} />
          <Drawer.Screen name='Opciones' component={OpcionesScreen} />
          <Drawer.Screen name='Monitores' component={MonitoresScreen} />
          <Drawer.Screen name='Falabella Perú' component={FalabellaPeruScreen} options={{ drawerLabel: 'Home' }} />
          <Drawer.Screen name='CMR Argentina' component={CmrArgentinaScreen} />
          <Drawer.Screen name='CMR Chile' component={CmrChileScreen} />
          <Drawer.Screen name='Falabella Chile' component={FalabellaChileScreen} />
          <Drawer.Screen name='Falabella Colombia' component={FalabellaColombiaScreen} />
          <Drawer.Screen name='CMR México' component={CmrMexicoScreen} />
          <Drawer.Screen name='Ambientes Previos' component={AmbientesScreen} />     
        </Drawer.Navigator>
      ):( 
        <LoginScreen />
      )} 
    </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  drawer:{
    backgroundColor: '#1E272E',
  }
});

const drawerItemsStyles = {
  inactiveTintColor: '#ffffff',
}
  





