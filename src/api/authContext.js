import React, { useContext, useReducer, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = React.createContext()

const AuthContextProvider = (props) => {

    const [sessionText, setSessionText] = useState(null)

    const getData = async () => {
        try {
            const sestext = await AsyncStorage.getItem('@storage_Key')
            setSessionText(sestext)

        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }

    useEffect( () => {
        setSessionText(getData())
    }, [] )

    const [user, setUser] = useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                        failedLogin : false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                        failedLogin : false,
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
                        failedLogin : true,
                        isSignout: false,
                        userToken: null,
                    }
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: sessionText,
            failedLogin : false,
        }
    );

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const getUser = () => {
    const { user } = useContext(AuthContext);

    return user;
}

export const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
        // saving error
    }
}

/*export const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      console.log(value);
      if(value !== null) {
        return value;
      }
    } catch(e) {
      // error reading value
    }
}*/

export const logUserIn = () => {
    const { setUser } = useContext(AuthContext);

    return ({username, password}) => {
        //console.log(username, password);
        //setUser({ type: 'SIGN_IN', token: 'dummy-auth-token' });

        if(username !== "gemme" || password !== "gemme")
        {
            setUser({ type : "FAILED_LOGIN" });
            
        }
        else
        {
            setUser({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            storeData("gemme");
        }
    }
}


export const logUserOut = () => {
    const { setUser } = useContext(AuthContext);

    return () => {
        setUser({ type : "SIGN_OUT" });
    }
    
}

export default AuthContextProvider;