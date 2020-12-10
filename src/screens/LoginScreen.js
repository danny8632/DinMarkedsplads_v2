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
        width: '80%',
        backgroundColor: '#465881',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20
    },
    inputText: {
        height: 50,
        color: 'white'
    },
    loginBtn: {
        width: '80%',
        backgroundColor: '#fb5b5a',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: 'white'
    }
});