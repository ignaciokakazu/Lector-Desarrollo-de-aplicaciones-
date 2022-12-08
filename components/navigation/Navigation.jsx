import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Principal from '../principal/Principal';
import Login from '../login/Login';
import Lector from '../lector/Lector';
import PaginaLibro from '../principal/PaginaLibro';
import VerMas from '../principal/VerMas';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import PaginaLeidos from '../principal/PaginaLeidos';
// import PaginaFavoritos from '../principal/PaginaFavoritos';
// import PaginaRecientes from '../principal/PaginaRecientes';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Libro" component={PaginaLibro} />
        <Stack.Screen name="Lector" component={Lector} />    
        <Stack.Screen name="VerMas" component={VerMas} />  
      </Stack.Navigator>
      {/* <Tab.Navigator>
      <Tab.Screen name="Últimos leídos" component={PaginaLeidos} />
      <Tab.Screen name="Favoritos" component={PaginaFavoritos} />
      <Tab.Screen name="Más recientes" component={PaginaRecientes} />
    </Tab.Navigator> */}
    </NavigationContainer>
  );
}