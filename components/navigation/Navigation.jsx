import { NavigationContainer } from '@react-navigation/native';
import { BottomTab } from './BottomTab';
import { StackNavigation } from './StackNavigation';

const Navigation = () => {
    return (
        <NavigationContainer>
            <StackNavigation/>       
        </NavigationContainer>
    )
}

export default Navigation