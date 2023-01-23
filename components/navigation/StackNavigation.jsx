import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Principal from '../principal/Principal';
import Login from '../login/Login';
import Lector from '../lector/Lector';
import PaginaLibro from '../principal/PaginaLibro';
import Register from '../login/Register';
import VerMas from '../principal/VerMas';
import Ajustes from '../ajustes/Ajustes';
import PaginaFavoritos from '../principal/PaginaFavoritos';
import PaginaLeidos from '../principal/PaginaLeidos';
import PaginaRecientes from '../principal/PaginaRecientes';
import PaginaBuscar from '../principal/PaginaBuscar';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import PaginaLeidos from '../principal/PaginaLeidos';
// import PaginaFavoritos from '../principal/PaginaFavoritos';
// import PaginaRecientes from '../principal/PaginaRecientes';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

//https://reactnavigation.org/docs/nesting-navigators/#navigating-to-a-screen-in-a-nested-navigator
//nested navigation

export const StackNavigation = () => {
  return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Buscar libros" component={PaginaBuscar} />
        <Stack.Screen name="Libro" component={PaginaLibro} />
        <Stack.Screen name="Lector" component={Lector} />    
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name="Últimos leídos" component={PaginaLeidos} />
        <Stack.Screen name="Favoritos" component={PaginaFavoritos} />
        <Stack.Screen name="Más recientes" component={PaginaRecientes} />
        <Stack.Screen name="Ajustes" component={Ajustes} />
      </Stack.Navigator>
  );
}