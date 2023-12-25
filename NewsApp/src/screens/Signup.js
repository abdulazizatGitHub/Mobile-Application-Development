import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, ImageBackground } from 'react-native';
import { TextInput, Button, Icon } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import db from '../../configFirebase';

const Signup = () => {
    const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    try {
      // Basic input validation
      if (!fullName || !email || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
      }

      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }

      // Firebase Authentication - Create user with email and password
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Access the user details from the userCredential
      const user = userCredential.user;
      console.log(user);

      // Use setDoc to set the data for the document
      const userRef = await setDoc(doc(db, 'users', user.uid), {
        fullName: fullName,
        email: email
      });

      navigation.navigate('Home');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.error('Error signing up:', 'Email is already in use.');
        alert('Email is already in use. If you forgot your password, use the "Forgot Password" option.');
      } else {
        console.error('Error signing up:', error.message);
        alert('Error signing up. Please try again.');
      }
    }
  };

    
    return (
       <SafeAreaProvider>
         <ImageBackground style ={{width: "100%", height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center'}} resizeMode='cover'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style = {styles.container}>
            <View style = {styles.form}>
                <Text style = {styles.heading}>Create Account</Text>
                <View style = {styles.form_input}>
                    <TextInput
                        mode="outlined"
                        label="Full Name"
                        placeholder="Full Name"
                        onChangeText={(name) => setFullName(name)}
                    />
                    <TextInput
                        mode="outlined"
                        label="Email"
                        placeholder="Email"
                        onChangeText={(email) => setEmail(email)}
                    />
                    <TextInput
                        mode="outlined"
                        label="Password"
                        placeholder="Password"
                        onChangeText={(pass) => setPassword(pass)}
                    />
                    <TextInput
                        mode="outlined"
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        onChangeText={(cPass) => setConfirmPassword(cPass)}
                    />
                    <Button style = {styles.sigin_btn} icon="login" mode="contained" onPress={handleSignup}>
                        SIGN UP
                    </Button>
                </View>
                <Text>Already have an accoung <Text style = {{color: 'blue', textDecorationLine : "underline", fontSize : 18}}>Login?</Text></Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
        </ImageBackground>
       </SafeAreaProvider>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '85%',
        height: '75%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '15',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: '5',
    },

    form: {
        width: '90%',
        height: '85%',
        // borderColor: 'red',
        // borderWidth: '2',
        marginTop: '20%',
        gap: '40%',
        padding: 10
    },

    heading: {
        fontWeight: '800',
        fontSize: 25,
    },

    form_input: {
        width: '95%',
        
        gap: '20%',
        marginTop: '10%'
    },

    sigin_btn: {
        width: '85%',
        position: 'relative',
        left: '8%',
        top: '5%',
        backgroundColor: 'tomato'
    },
    titleMessage: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 8, // You can adjust the gap using margin
      },
      title: {
        fontSize: 28,
        color: 'royalblue',
        fontWeight: '600',
        letterSpacing: -1,
        position: 'relative',
        alignItems: 'center',
        paddingLeft: 30,
      },
      titleBefore: {
        position: 'absolute',
        width: 16,
        height: 16,
        borderRadius: 8, // Half of the width/height to create a circle
        left: 0,
        backgroundColor: 'royalblue',
      },
      titleAfter: {
        position: 'absolute',
        width: 18,
        height: 18,
        borderRadius: 9, // Half of the width/height to create a circle
        left: 0,
        backgroundColor: 'royalblue',
        animationName: 'pulse', // You'll need to define the 'pulse' animation separately
        animationDuration: '1s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
      },

});
export default Signup;
