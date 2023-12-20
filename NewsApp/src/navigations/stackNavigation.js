import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './bottomTab';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' options={{headerShown: false}} component={BottomTab} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default StackNavigation;