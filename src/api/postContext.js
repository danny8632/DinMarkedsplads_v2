import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from './authContext';

import { Posts } from './../constants/StaticPosts';

export const PostsContext = React.createContext()

const PostsContextProvider = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(() => Posts);
    }, []);

    return (
        <PostsContext.Provider value={{ posts, setPosts }}>
            {props.children}
        </PostsContext.Provider>
    )
}

export const getPosts = () => {
    const { posts } = useContext(PostsContext);

    return posts;
}

export const addPost = () => {
    const { posts, setPosts } = useContext(PostsContext);
    const { user } = useContext(AuthContext);

    return ({title, description, image}) => {
        const id = posts.map(x => x.id).reduce((accumulator, currentValue) => accumulator > currentValue ? accumulator : currentValue) + 1;

        if(title != "" && description != "" && image != null)
        {
            const post = {
                id : id,
                title : title,
                username : user.userToken,
                image : image,
                description : description,
                comments : []
            };
            setPosts((prev) => [...prev, post])
        }
    }
} 

export default PostsContextProvider;