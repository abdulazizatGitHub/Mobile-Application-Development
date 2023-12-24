import React, { useState } from 'react';
import { Text, TextInput, Button, View, TouchableOpacity } from 'react-native';
// import { signInWithEmailAndPassword as loginUser } from "firebase/auth";
// import { auth } from '../../firebase';
const Login = ({ navigation }) => {
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password

//   const handleLogin = async () => {
//     try {
//       // Sign in user using Firebase Authentication
//       await loginUser(auth, email, password);
//       console.log("login Success-ful")
//       // If successful, navigate to the Home screen or any other screen
//       navigation.navigate('Tab');
//     } catch (error) {
//       console.error('Error logging in:', error.message);
//     }
//   };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5'  ,height:"100"}}>

      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Login</Text>
      <TextInput
        placeholder="email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Login" 
      // onPress={handleLogin} 
      style={{ backgroundColor: '#4caf50', borderWidth: 1, borderColor: '#fff' }}/>
      {/* <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={{ textAlign: 'center', marginTop: 20 }}>
          Don't have an account? Register here!
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Login;
