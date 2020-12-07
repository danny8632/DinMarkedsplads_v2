import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import Button from './../common/Button';

import {logUserOut} from './../api/authContext';

const HomeScreen = ({navigation}) => {

    const logout = logUserOut();

    return (
        <SafeAreaView style={styles.container}>
			<ScrollView removeClippedSubviews={true}>
                <Button onPress={() => navigation.navigate("CreatePostScreen")} style={styles.btn} title="Create Post"/>
                <Button onPress={() => logout()} style={styles.btn} title="Logout"/>
			</ScrollView>
		</SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    btn : {
        marginBottom: 20
    }
});

export default HomeScreen;