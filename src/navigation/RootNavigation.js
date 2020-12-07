import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './../screens/HomeScreen';
import PostScreen from './../screens/PostScreen';
import SearchScreen from './../screens/SearchScreen';
import LoginScreen from './../screens/LoginScreen';


const Stack = createStackNavigator();


const StackNavigator = () => {
    
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
            <Stack.Screen name="PostScreen" component={PostScreen} options={{ title: "Post" }} />
        </Stack.Navigator>
    );
};


const LoginStack = createStackNavigator();

const LoginNavigator = () => {

    return (
        <LoginStack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Login" }} />
        </LoginStack.Navigator>
    )
}


const Tab = createBottomTabNavigator();

const RootNavigator = () => {
    
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Home" component={StackNavigator} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Login" component={LoginNavigator} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;