import React, { useContext } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import Post from './../common/Post';

import { PostsContext } from './../api/postContext';

const HomeScreen = ({navigation}) => {

    const { posts } = useContext(PostsContext)

    return (
        <SafeAreaView style={styles.container}>
			<ScrollView removeClippedSubviews={true}>
				{posts.map(post => <Post key={post.id} post={post} onPress={() => navigation.navigate('PostScreen', {post})} />)}
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