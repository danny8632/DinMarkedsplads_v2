import React from 'react';
import { StyleSheet, ScrollView, View, Text, SafeAreaView, Image } from 'react-native';
import Post from './../common/Post';
import { Comments } from './../constants/StaticPosts';

const Comment = ({comment}) => {
    return (
        <View style={styles.comment}>
            <Image source={require('./../assets/favicon.png')}></Image>
            <View style={styles.comment_text_wrapper}>
                <Text style={styles.comment_username}>{comment.username}</Text>
                <Text style={styles.comment_text}>{comment.text}</Text>
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

    let comments = Comments.filter(comment => comment.postId == route.params.post.id);

    return (
        <SafeAreaView style={styles.container}>
			<Post post={route.params.post}></Post>
            <Description post={route.params.post}></Description>

            <ScrollView removeClippedSubviews={true}>
                {comments.map(x => <Comment key={x.id} comment={x} />)}
            </ScrollView>
		</SafeAreaView>
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