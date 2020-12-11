import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './../screens/HomeScreen';
import PostScreen from './../screens/PostScreen';
import SearchScreen from './../screens/SearchScreen';
import LoginScreen from './../screens/LoginScreen';
import SignupScreen from './../screens/SignupScreen';
import CreatePostScreen from './../screens/CreatePostScreen';
import ProfileScreen from './../screens/ProfileScreen';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faUserCircle, faSearch, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

import { AuthContext } from '../api/authContext';


const iconForTab = {
    Home: faHome,
    Profile: faUserCircle,
    Search: faSearch,
    Login: faSignInAlt
}


const Stack = createStackNavigator();

const StackNavigator = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#437FC7',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
            <Stack.Screen name="PostScreen" component={PostScreen} options={{ title: "Post" }} />
        </Stack.Navigator>
    );
};


const LoginStack = createStackNavigator();

const LoginNavigator = () => {

    return (
        <LoginStack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#437FC7',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Login" }} />
            <Stack.Screen name="Signin" component={SignupScreen} options={{ title: "Sign Up" }} />
        </LoginStack.Navigator>
    )
}

const ProfileStack = createStackNavigator();

const ProfileNavigator = () => {

    return (
        <ProfileStack.Navigator>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: "Profile" }} />
            <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} options={{ title: "CreatePost" }} />
        </ProfileStack.Navigator>
    )
}


const Tab = createBottomTabNavigator();

const RootNavigator = () => {

    const { user } = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = iconForTab[route.name];

                        return <FontAwesomeIcon icon={iconName} color={color} size={size} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#437FC7',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Home" component={StackNavigator} />
                <Tab.Screen name="Search" component={SearchScreen} />
                {
                    user.userToken == null
                        ?
                        (<Tab.Screen name="Login" component={LoginNavigator} />)
                        :
                        (<Tab.Screen name="Profile" component={ProfileNavigator} />)
                }
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;