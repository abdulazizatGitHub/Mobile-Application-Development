import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, ImageBackground } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../common/context';
const Login = () => {
  const navigation = useNavigation();

  const { loginUser } = useContext(AppContext); // Add this line to get the loginUser function

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Basic input validation
      if (!email || !password) {
        alert('Please fill in all fields.');
        return;
      }

      // Firebase Authentication - Sign in with email and password
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;

      if (user) {
        // Use loginUser to update the user context
        loginUser(user);

        // Navigate to the Home screen
        navigation.navigate('Home');
      } else {
        console.log('User not found..');
      }
    } catch (error) {
      console.error('Error signing in:', error.message);
      alert('Error signing in. Please check your email and password.');
    }
  };


  return (
    <SafeAreaProvider style={styles.mainContainer}>
      <ImageBackground style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }} resizeMode='cover'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <ImageBackground style={styles.form}>
              <Text style={styles.heading}>LOGIN</Text>
              <View style={styles.form_input}>
                <TextInput
                  mode="outlined"
                  label="Email"
                  placeholder="Email"
                  onChangeText={(email) => setEmail(email)}
                  value={email}
                />
                <TextInput
                  mode="outlined"
                  label="Password"
                  placeholder="Password"
                  onChangeText={(password) => setPassword(password)}
                  value={password}
                  secureTextEntry
                />
                <Button style={styles.sigin_btn} icon="login" mode="contained" onPress={handleLogin}>
                  SIGN IN
                </Button>
              </View>
              <Text style={{ marginTop: '10%' }}>Don't have an account <Text style={{ color: 'blue', textDecorationLine: 'underline', fontSize: 18 }} onPress={() => navigation.navigate('Signup')}>Signup?</Text></Text>
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '85%',
    height: '60%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },

  form: {
    width: '90%',
    height: '90%',
    marginTop: '20%',
    gap: '30%',
    padding: 10,
  },

  heading: {
    fontWeight: '800',
    fontSize: 25,
  },

  form_input: {
    width: '95%',
    gap: '20%',
    marginTop: '10%',
  },

  sigin_btn: {
    width: '85%',
    position: 'relative',
    left: '8%',
    top: '5%',
    backgroundColor: 'tomato',
  },
});

export default Login;
