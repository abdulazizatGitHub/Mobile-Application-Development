import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, ImageBackground } from 'react-native';
import { TextInput, Button, Icon } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../Components/Header';
const Signup = () => {
    const navigation = useNavigation();
    
    return (
       <SafeAreaProvider>
         <ImageBackground style ={{width: "100%", height: '100%', flex: '1', justifyContent: 'center', alignItems: 'center'}} source={require('../assets/images/imageBackground.png')} resizeMode='cover'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style = {styles.container}>
            <View style = {styles.form}>
                <Text style = {styles.heading}>Create Account</Text>
                <View style = {styles.form_input}>
                    <TextInput
                        mode="outlined"
                        label="Full Name"
                        placeholder="Full Name"
                    />
                    <TextInput
                        mode="outlined"
                        label="Email"
                        placeholder="Email"
                        
                    />
                    <TextInput
                        mode="outlined"
                        label="Password"
                        placeholder="Password"
                    />
                    <TextInput
                        mode="outlined"
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        left ={<Icon name = 'account' />}
                    />
                    <Button style = {styles.sigin_btn} icon="login" mode="contained">
                        SIGN UP
                    </Button>
                </View>
                <Text>Already have an accoung <Text style = {{color: 'blue', textDecorationLine : "underline", fontSize : '18px'}} onPress={() => navigation.navigate('Login')}>Login?</Text></Text>
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
        fontSize: '25px',
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
        top: '5%'
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
