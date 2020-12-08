import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, ScrollView , TextInput, View} from 'react-native';

import { StackActions } from '@react-navigation/native';

import Button from './../common/Button';

import {addPost} from './../api/postContext';

import * as ImagePicker from 'expo-image-picker';

const HomeScreen = ({navigation}) => {

    const createPost = addPost();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

            if (status !== 'granted') {
                //  Todo show error
                return;
            }
            else {
                let result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    aspect: [1.4, 1],
                    quality: 1,
                });

                console.log(result);

                if (!result.cancelled) {
                    setImage(result.uri);
                }
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Title"
                        placeholderTextColor="#bbbebf"
                        onChangeText={text => setTitle(text)}
                        value={title}
                    />

                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Description"
                        placeholderTextColor="#bbbebf"
                        onChangeText={text => setDescription(text)}
                        value={description}
                    />
                </View>

                <Button style={styles.btn} title="Chose image" onPress={() => pickImage()} />


                <Button style={[styles.btn, {backgroundColor : "#42f595"}]} title="Create Post" onPress={() => {
                    createPost({title, description, image});
                    const popAction = StackActions.pop(1);
                    navigation.dispatch(popAction);
                    navigation.navigate("Home");
                }} />

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputView: {
        width : "80%",
        backgroundColor: '#465881',
        borderRadius: 8,
        margin: 10,
        padding: 5,
        paddingLeft : 10,
        paddingRight : 10,
        alignSelf: "center"
    },
    inputText : {
        height: 40,
        color: 'white',
        fontSize : 18
    },
    btn : {
        width : "80%",
        alignSelf : "center",
        backgroundColor: "#465881",
        marginTop : 20
    }
});

export default HomeScreen;