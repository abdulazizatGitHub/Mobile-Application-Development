import React, { useContext, useState } from 'react';
import { Text, View, FlatList, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../common/context';

const ManageCategories = () => {
  const { userPreferences, setUserPreferences } = useContext(AppContext);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRemoveCategory = async (category) => {
    try {
      // Show a confirmation dialog before removing the category
      Alert.alert(
        'Remove Category',
        `Are you sure you want to remove the category "${category}"?`,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Remove',
            onPress: async () => {
              // Remove the category from AsyncStorage
              const updatedPreferences = userPreferences.filter(
                (item) => item.category !== category
              );
              await AsyncStorage.setItem(
                'userPreferences',
                JSON.stringify(updatedPreferences)
              );

              // Update the state to reflect the removal
              setUserPreferences(updatedPreferences);
            },
          },
        ]
      );
    } catch (error) {
      console.error('Error removing category:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.category}</Text>
      <Button title="Remove" onPress={() => handleRemoveCategory(item.category)} />
    </View>
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Your Categories:</Text>
      <FlatList
        data={userPreferences}
        keyExtractor={(item) => item.category}
        renderItem={renderItem}
        refreshing={isRefreshing}
        onRefresh={() => setIsRefreshing(true)}
      />
    </View>
  );
};

export default ManageCategories;
