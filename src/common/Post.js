import React from 'react';
import { StyleSheet, Image, Text, View, Dimensions, TouchableOpacity } from 'react-native';

const PostWrapper = ({ post, style, onPress }) => {

    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9 / 10);
    const imageWidth = dimensions.width;

    let image = post.images.split(",")[0];

    return (
        <TouchableOpacity style={style} activeOpacity={1} onPress={onPress}>
            <View style={styles.post}>
                <View style={styles.post_title}>
                    <Image style={styles.avatar} source={require('./../assets/favicon.png')}></Image>
                    <Text style={styles.username}>{post.username}</Text>
                </View>
                <View>
                    <Image style={{ width: imageWidth, height: imageHeight, resizeMode: 'cover' }} source={{uri: `http://api.dannyhaslund.dk:3001/static/${image}`}}></Image>
                </View>
                <View style={styles.post_text}>
                    <Text style={{fontWeight : "bold"}}>{post.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default PostWrapper;

const styles = StyleSheet.create({
    post_title: {
        flexDirection:'row',
        width : "100%"
    },
    avatar: {
        width : 45,
        height : 45,
        marginTop : 6,
        marginBottom : 6,
        marginLeft : 16,
        marginRight : 8
    },
    username: {
        width : "100%",
        fontWeight: "bold", 
        fontSize: 16,
        alignSelf : "center"
    },
    post_text : {
        width: "100%",
        padding: 4,
        paddingLeft : 10,
        paddingRight : 10
    }
});