import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, ImageBackground, FlatList } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Header from '../Components/Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Login = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submit, setSubmit] = useState([]);

    const handleSubmit = () => {
        setSubmit([...submit, {
            email,
            password
        }]);
        setEmail('');
        setPassword('');
    }
    

    const handleReset = () => {
        setSubmit('');
    }

    return (
        <SafeAreaProvider style={styles.mainContainer}>
            <ImageBackground style={{ width: "100%", height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }} source={require("../assets/images/imageBackground.png")} resizeMode='cover'>
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
                                />
                                <Button style={styles.sigin_btn} icon="login" mode="contained" onPress={handleSubmit}>
                                    SIGN IN
                                </Button>
                            </View>
                            <Text style={{ marginTop: '10%' }}>Don't have an account <Text style={{ color: 'blue', textDecorationLine: "underline", fontSize: '18px' }} onPress={() => navigation.navigate('Signup')}>Signup?</Text></Text>
                        </ImageBackground>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.list}>

                    <FlatList data={submit} renderItem={({ item }) => (
                        <SafeAreaProvider>
                            <Text>Email: {item.email}</Text>
                            <Text>Password: {item.password}</Text>
                        </SafeAreaProvider>
                    )} ></FlatList>
                    <Button style={{ width: '25%', marginTop: '10%', marginLeft: '70%', }} onPress={handleReset}>
                        Reset
                    </Button>
                </View>
                <Button style={{ marginTop: '10%' }} mode="contained" onPress={() => navigation.navigate('Home')}>
                    Back
                </Button>
            </ImageBackground>
        </SafeAreaProvider>

    );
}

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
        borderRadius: '15',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: '6',

    },

    form: {
        width: '90%',
        height: '90%',
        marginTop: '20%',
        gap: '30%',
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
        top: '5%',
    },
    list: {
        position: 'relative',
        width: '90%',
        height: 120,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: '10%'
    }

});
export default Login;