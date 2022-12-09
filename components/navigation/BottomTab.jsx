import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../login/Login';
import PaginaFavoritos from '../principal/PaginaFavoritos';
import PaginaLeidos from '../principal/PaginaLeidos';
import PaginaRecientes from '../principal/PaginaRecientes';
import PaginaLibro from '../principal/PaginaLibro';

const Tab = createBottomTabNavigator();

//este bottom tab no aparece en toda la navegación, sólo en la página principal
export const BottomTab = () => {
  return (
    
    <Tab.Navigator 
    screenOptions={{headerShown: false}} initialRouteName='Últimos leídos'>
      <Tab.Screen name="Últimos leídos" component={PaginaLeidos} />
      <Tab.Screen name="Favoritos" component={PaginaFavoritos} />
      <Tab.Screen name="Más recientes" component={PaginaRecientes} />
      {/* <Tab.Screen name="Libro" component={PaginaLibro} screenOptions={{}}/> */}
    </Tab.Navigator>
    
  );
}