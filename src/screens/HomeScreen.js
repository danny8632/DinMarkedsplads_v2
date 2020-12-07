import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import Post from './../common/Post';

import { Posts } from './../constants/StaticPosts';

const HomeScreen = ({navigation}) => {

    return (
        <SafeAreaView style={styles.container}>
			<ScrollView removeClippedSubviews={true}>
				{Posts.map(post => <Post key={post.id} post={post} onPress={() => navigation.navigate('PostScreen', {post})} />)}
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