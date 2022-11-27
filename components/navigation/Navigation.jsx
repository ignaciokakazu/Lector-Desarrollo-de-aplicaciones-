import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Principal from '../principal/Principal';
import Login from '../login/Login';
import Lector from '../lector/Lector';
import PaginaLibro from '../principal/PaginaLibro';
import VerMas from '../principal/VerMas';

const Stack = createNativeStackNavigator();

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
    </NavigationContainer>
  );
}