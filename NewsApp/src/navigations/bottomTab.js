// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Ionicons, Fontisto  } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import FavoritesScreen from '../screens/Favorites';
import AddCategoryScreen from '../screens/AddCategories';
import SearchScreen from '../screens/Search';
import MyListScreen from '../screens/MyList';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'My List') {
              iconName = focused ? 'list-outline' : 'list';
            } else if (route.name === 'Read Later') {
                iconName = focused ? 'bookmarks-outline' : 'bookmark-outline'
            } else if (route.name === 'Add Content') {
                iconName = focused ? 'add-outline' : 'add'
            } else if (route.name === 'Search') {
                iconName = focused ? 'search-outline' : 'search'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        initialRouteName='Home'
      >
        <Tab.Screen name="My List" component={MyListScreen} />
        <Tab.Screen name="Read Later" component={FavoritesScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add Content" component={AddCategoryScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default BottomTab;