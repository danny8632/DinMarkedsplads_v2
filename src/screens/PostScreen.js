import React, { useContext, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import Post from './../common/Post';

import { test, PostsContext } from './../api/postContext';

const Comment = ({comment}) => {
    return (
        <View style={styles.comment}>
            <Image source={require('./../assets/favicon.png')}></Image>
            <View style={styles.comment_text_wrapper}>
                <Text style={styles.comment_username}>{comment.username}</Text>
                <Text style={styles.comment_text}>{comment.comment}</Text>
            </View>
        </View>
    );
}

const Description = ({post}) => {
    return (
        <View style={styles.description}>
            <View style={{flexDirection: 'row'}}>
                <Text><Text style={{fontWeight: "bold"}} onPress={() => console.log("clock")}>{post.username} </Text>{post.description}</Text>
            </View>
        </View>
    );
}

const PostScreen = ({route}) => {

    let post = route.params.post;

    const { postsContext } = useContext(PostsContext)

    useEffect(() => {
        postsContext.fetchComments(post);

    }, [])



    return (
        <ScrollView style={styles.container}>
			<Post post={post}></Post>
            <Description post={post}></Description>

            <ScrollView removeClippedSubviews={true}>
                {post.comments.map(x => <Comment key={x.id} comment={x} />)}
            </ScrollView>
		</ScrollView>
    );
}

export default PostScreen;

const styles = StyleSheet.create({
    container : {
		flex: 1
    },
    description : {
        width : "100%",
        borderTopWidth : 1,
        borderColor: "#20232a",
        paddingTop: 4,
        paddingBottom: 0,
        paddingLeft : 10,
        paddingRight : 10
    },
    description_text : {
        flex: 1,
        flexDirection: "row",
        width : "100%",
    },
    comment_wrapper : {
        marginTop : 10
    },
    comment: {
        flex: 1,
        flexDirection: "row",
        height : 48,
        width : "100%",
        marginBottom: 12,
        paddingLeft : 10
    },
    comment_text_wrapper : {
        marginLeft : 6
    },
    comment_username : {
        fontWeight : "bold"
    }
});