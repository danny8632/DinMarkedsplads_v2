import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import Post from './../common/Post';

import { getPosts, getComments } from './../api/postContext';

const HomeScreen = ({navigation}) => {

    const posts = getPosts().results;
    console.log(posts);
    console.log(posts[0].userId);
    //{posts.map(post => <Post key={post.id} post={post} onPress={() => navigation.navigate('PostScreen', {post})} />)}   
    
    return (
        <SafeAreaView style={styles.container}>
			<ScrollView removeClippedSubviews={true}>
            <Post key={posts[0].userId} post={posts[0]} />
			</ScrollView>
		</SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    }
});

export default HomeScreen;