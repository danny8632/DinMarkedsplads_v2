import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Button from './../common/Button';

import { AuthContext } from '../api/authContext';

const LoginScreen = ({ navigation }) => {
    const { auth, user } = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>Login</Text>
            </View>

            <View style={{width : "100%"}}>
                <Text style={styles.error_text}>{user.failedLogin ? 'Wrong' : (user.signedUp ? "Sign up successful!!" : "" )}</Text>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Username"
                    placeholderTextColor="#bbbebf"
                    onChangeText={text => setUsername(text)}
                    value={username}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Password"
                    placeholderTextColor="#bbbebf"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                    value={password}
                />
            </View>

            <Button title="Login" onPress={() => auth.signIn({username, password})} style={styles.loginBtn} />

            <View style={styles.signupWrapper}>

                <Text style={styles.signupText}>Stil don't have an account?</Text>

                <TouchableOpacity style={{width : "80%"}} onPress={() => navigation.navigate("Signin")}>
                    <Text style={styles.loginText}>Click here for Sign Up</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop : 30
    },
    inputView: {
        width: '80%',
        backgroundColor: '#e3e3e3',
        borderRadius: 10,
        margin: 10,
        justifyContent: 'center'
    },
    inputText: {
        margin : 10,
        height: 40,
        color: '#000',
        fontSize : 18
    },
    loginBtn: {
        width: '80%',
        backgroundColor: '#437FC7',
        borderRadius: 10,
        height: 50,
        margin: 10,
        justifyContent: 'center',
    },
    signupText : {
        width : "100%",
        color : "#000",
        fontSize: 18,
        textAlign : "center"
    },
    loginText: {
        width : "100%",
        color : "#000",
        fontWeight : "bold",
        fontSize: 18,
        textAlign : "center"
    },
    signupWrapper : {
        margin : 10,
        width : "100%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleWrapper : {
        width : "100%",
        alignItems: 'center',
        marginBottom : 30

    },
    titleText : {
        width : "100%",
        textAlign : "center",
        fontSize : 40,
        fontWeight : "bold",
        color : "#437FC7"
    },
    error_text : {
        fontWeight : "bold",
        fontSize: 18,
        width : "100%",
        textAlign : "center",
    }
});