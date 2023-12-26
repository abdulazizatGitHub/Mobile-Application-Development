import React, { createContext, useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext();

function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userPreferences, setUserPreferences] = useState([]);

  const updatePreferences = useCallback(async () => {
    try {
      const preferencesData = await AsyncStorage.getItem('userPreferences');
      if (preferencesData) {
        setUserPreferences(JSON.parse(preferencesData));
      }
    } catch (error) {
      console.error('Error updating preferences:', error);
    }
  }, []);

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
    updatePreferences(); // Update preferences on component mount
  }, [updatePreferences]);

  useEffect(() => {
    // Listen for changes to userPreferences and update state accordingly
    updatePreferences();
  }, [updatePreferences, userPreferences]);


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

  const addCategory = async (category) => {
    try {
      // Fetch data for the selected category
      const response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_35058e2fa09da1e781886c1470c3cba09fd4b&q=all%20type%20news&country=cn,pk,ru,ae,gb&language=en&category=${category}`);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      if (data.status === 'success') {
        // Check if the category already exists in user preferences
        const existingCategoryIndex = userPreferences.findIndex((item) => item.category === category);

        if (existingCategoryIndex !== -1) {
          // If the category exists, update the data for that category
          const updatedPreferences = [...userPreferences];
          updatedPreferences[existingCategoryIndex] = { category, data: data.results };

          // Store updated preferences in AsyncStorage
          await AsyncStorage.setItem('userPreferences', JSON.stringify(updatedPreferences));

          // Update state
          setUserPreferences(updatedPreferences);
        } else {
          // If the category doesn't exist, add it to user preferences
          const updatedPreferences = [
            ...userPreferences,
            { category, data: data.results },
          ];

          // Store updated preferences in AsyncStorage
          await AsyncStorage.setItem('userPreferences', JSON.stringify(updatedPreferences));

          // Update state
          setUserPreferences(updatedPreferences);
        }
      } else {
        console.error('Error fetching news data:', data);
      }
    } catch (error) {
      console.error('Error adding category:', error.message);
    }
  };

  const addToFavorites = async (article) => {
    try {
      // Fetch the current favorites from AsyncStorage
      const favoritesData = await AsyncStorage.getItem('favorites');
      const favorites = favoritesData ? JSON.parse(favoritesData) : [];
  
      // Add the new article to favorites
      favorites.push(article);
  
      // Update AsyncStorage with the new favorites list
      await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  };
  return (
    <AppContext.Provider value={{ user, loginUser, logoutUser, userPreferences, addCategory, addToFavorites }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
