import React, { useState, useContext } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, TextInput, View, Image } from 'react-native';

import Button from './../common/Button';

import { PostsContext } from '../api/postContext';

import { launchImageLibrary } from 'react-native-image-picker';

import RNFetchBlob from 'rn-fetch-blob'


const HomeScreen = ({ navigation }) => {

    const {postsContext} = useContext(PostsContext);

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [region, setRegion] = useState('');
    const [files, setFiles] = useState({});

    const pickImage = async () => {

        launchImageLibrary({mediaType : "photo", includeBase64 : true}, async (file) => {
            
            setFiles({ name : "gmme.jpg", filename :"gmme.jpg", type : "image/jpg", data : RNFetchBlob.wrap(file.uri)})
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{width : "100%"}}>

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

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Price"
                        placeholderTextColor="#bbbebf"
                        onChangeText={text => setPrice(text)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Address"
                        placeholderTextColor="#bbbebf"
                        onChangeText={text => setAddress(text)}
                        value={address}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Zipcode"
                        placeholderTextColor="#bbbebf"
                        onChangeText={text => setZipcode(text)}
                        value={zipcode}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Region"
                        placeholderTextColor="#bbbebf"
                        onChangeText={text => setRegion(text)}
                        value={region}
                    />
                </View>

                <Button style={styles.btn} title="Chose image" onPress={() => pickImage()} />


                <Button style={[styles.btn, { backgroundColor: "#437FC7", marginTop : 40 }]} title="Create Post" onPress={() => {
                    if(files == null) return;

                    postsContext.createPost({ title, description, price, address, zipcode, region, files}, () => {
                        navigation.pop();
                        navigation.navigate("Home");
                    });
                }} />

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop : 30
    },
    inputView: {
        backgroundColor: '#e3e3e3',
        borderRadius: 10,
        margin: 10,
        marginLeft : 40,
        marginRight : 40,
        justifyContent: 'center'
    },
    inputText: {
        margin : 10,
        height: 40,
        color: '#000',
        fontSize : 18
    },
    btn: {
        backgroundColor: '#437FC7',
        borderRadius: 10,
        height: 50,
        margin: 10,
        marginLeft : 40,
        marginRight : 40,
        justifyContent: 'center',
    },
});

export default HomeScreen;