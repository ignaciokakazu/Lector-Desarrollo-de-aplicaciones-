import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../login/Login';
import PaginaFavoritos from '../principal/PaginaFavoritos';
import PaginaLeidos from '../principal/PaginaLeidos';
import PaginaRecientes from '../principal/PaginaRecientes';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <NavigationContainer independent={true}>
    <Tab.Navigator>
      <Tab.Screen name="Últimos leídos" component={PaginaLeidos} />
      <Tab.Screen name="Favoritos" component={PaginaFavoritos} />
      <Tab.Screen name="Más recientes" component={PaginaRecientes} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}