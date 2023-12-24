import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './bottomTab';
import { NavigationContainer } from '@react-navigation/native';
import AddCategoryScreen from '../screens/AddCategories';
import Login from '../screens/Login'

const Stack = createStackNavigator();

function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen  name='Home' options={{headerShown: false}} component={BottomTab} />
            <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name='AddCategoryScreen' component={AddCategoryScreen} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default StackNavigation;