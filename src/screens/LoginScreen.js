import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Button from './../common/Button';

import { AuthContext } from '../api/authContext';

const LoginScreen = () => {
    const { auth, user } = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.error_text}>{user.failedLogin ? 'Wrong' : ''}</Text>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email or username"
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

            <TouchableOpacity>
                <Text style={styles.loginText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputView: {
        width: '100%',
        backgroundColor: '#465881',
        borderRadius: 10,
        margin: 20,
        justifyContent: 'center'
    },
    inputText: {
        margin : 10,
        height: 40,
        color: 'white'
    },
    loginBtn: {
        width: '100%',
        backgroundColor: '#fb5b5a',
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
    },
    loginText: {
        color: 'white'
    }
});