import React, { useContext, useReducer, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = React.createContext()

const AuthContextProvider = (props) => {

    const [user, setUser] = useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                        failedLogin: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                        failedLogin: false,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
                case 'FAILED_LOGIN':
                    return {
                        ...prevState,
                        failedLogin: true,
                        isSignout: false,
                        userToken: null,
                    }
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null,
            failedLogin: false,
        }
    );

    React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            let userToken;

            try {
                userToken = await AsyncStorage.getItem('userToken');
            } catch (e) {
                console.log(e)
            }

            setUser({ type: 'RESTORE_TOKEN', token: userToken });
        };

        bootstrapAsync();
    }, []);

    const authContext = React.useMemo(
        () => ({
            signIn: async data => {

                let json;

                try {

                    let response = await fetch('http://api.dannyhaslund.dk:3001/user/login', {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: data.username,
                            password: data.password
                        })
                    });
                    json = await response.json();

                    if (!json.success) {
                        setUser({ type: "FAILED_LOGIN" });
                        return console.log("Wrong");
                    }

                    await AsyncStorage.setItem('userToken', json.token)

                    setUser({ type: 'SIGN_IN', token: json.token });


                } catch (e) {
                    console.log(e)
                }

                
            },
            signOut: async () => {
                try {
                    await AsyncStorage.removeItem('userToken')
                } catch (e) {
                    console.log(e)
                }

                setUser({ type: 'SIGN_OUT' })
            },
            signUp: async data => {

                setUser({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
            getUser : () => {
                return user;
            }
        }),
        []
    );

    return (
        <AuthContext.Provider value={{auth :authContext, user}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;