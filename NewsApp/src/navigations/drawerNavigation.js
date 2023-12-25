import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../screens/Login';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
    return(
        <Drawer.Navigator>
        <Drawer.Screen name="Login" component={Login} /> 
      </Drawer.Navigator>
    )
};
export default DrawerNavigation;