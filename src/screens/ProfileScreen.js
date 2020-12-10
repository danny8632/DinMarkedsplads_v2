import React, { useContext } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import Button from './../common/Button';

import { AuthContext } from './../api/authContext';

const HomeScreen = ({navigation}) => {

    const { auth } = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.container}>
			<ScrollView removeClippedSubviews={true}>
                <Button onPress={() => navigation.navigate("CreatePostScreen")} style={styles.btn} title="Create Post"/>
                <Button onPress={() => auth.signOut()} style={styles.btn} title="Logout"/>
			</ScrollView>
		</SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    btn : {
        marginBottom: 20,
        width : "90%",
        alignSelf : "center"
    }
});

export default HomeScreen;