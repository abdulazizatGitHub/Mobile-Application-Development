// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import FavoritesScreen from '../screens/Favorites';
import AddCategoryScreen from '../screens/AddCategories';
import MyListScreen from '../screens/MyList';
import { Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Login from '../screens/Login'

const Tab = createBottomTabNavigator();

function BottomTab() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Account') {
              iconName = focused ? 'person-outline' : 'person-circle-outline';
            } else if (route.name === 'Read Later') {
                iconName = focused ? 'bookmarks-outline' : 'bookmark-outline'
            } else if (route.name === 'Add Content') {
                iconName = focused ? 'add-outline' : 'add'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
          },
          headerRight: ()=>{
            return(
              <Button  
              onPress={() => navigation.navigate(Login)}
              title="Login"
              color="#215"/>
            )
        },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        initialRouteName='Home'
      >
        <Tab.Screen name="Account" component={MyListScreen} />
        <Tab.Screen name="Read Later" component={FavoritesScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add Content" component={AddCategoryScreen} />
      </Tab.Navigator>
  );
}
export default BottomTab;