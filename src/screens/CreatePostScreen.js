import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';


const HomeScreen = ({navigation}) => {

    return (
        <SafeAreaView style={styles.container}>
			<Text>You made it</Text>
		</SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    }
});

export default HomeScreen;