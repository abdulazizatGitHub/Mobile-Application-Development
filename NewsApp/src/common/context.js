import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext();

function AppProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for existing user session in AsyncStorage
    const checkUserSession = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error('Error checking user session:', error);
      }
    };

    checkUserSession();
  }, []); // Run once on component mount

  const loginUser = async (userData) => {
    try {
      // Store user data in AsyncStorage
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      // Update the user state
      setUser(userData);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const logoutUser = () => {
    // Clear user data from AsyncStorage
    AsyncStorage.removeItem('userData');
    // Update the user state
    setUser(null);
  };

  return (
    <AppContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
