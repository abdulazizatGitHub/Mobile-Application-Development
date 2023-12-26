import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../common/context';

const MyListScreen = () => {
  const { user, logoutUser } = useContext(AppContext);
  const navigation = useNavigation();

  const handleManageCategories = () => {
    // Navigate to the screen where the user can manage categories
    navigation.navigate('ManageCategories');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {user ? (
        <>
          <Text>User Details:</Text>
          <Text>Email: {user.email}</Text>
          <Button title="Logout" onPress={logoutUser} />
          <Button title="Manage Your Categories" onPress={handleManageCategories} />
        </>
      ) : (
        <Text>Please log in to view your list and manage your account.</Text>
      )}
    </View>
  );
};

export default MyListScreen;
