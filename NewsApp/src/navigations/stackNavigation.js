import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './bottomTab';
import { NavigationContainer } from '@react-navigation/native';
import AddCategoryScreen from '../screens/AddCategories';
import Login from '../screens/Login'
import Signup from '../screens/Signup';
import Environment from '../screens/subCategoryScreens/Environment';

const Stack = createStackNavigator();

function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen  name='bottomTab' options={{headerShown: false}} component={BottomTab} />
                <Stack.Screen name='AddCategoryScreen' component={AddCategoryScreen} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name='Environment' component={Environment} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default StackNavigation;