// MyListScreen.js
import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { AppContext } from '../common/context';

const MyListScreen = () => {
  const { user, logoutUser } = useContext(AppContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {user ? (
        <>
          <Text>User Details:</Text>
          <Text>Email: {user.email}</Text>
          <Button title="Logout" onPress={logoutUser} />
        </>
      ) : (
        <Text>Please log in to view your list and manage your account.</Text>
      )}
    </View>
  );
};

export default MyListScreen;
