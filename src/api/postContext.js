import { ThemeProvider } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from './authContext';

export const PostsContext = React.createContext()

const PostsContextProvider = (props) => {

    const { user } = useContext(AuthContext);

    const [posts, setPosts] = useState([]);

    const postsContext = {
        fetchPosts: async () => {

            try {

                let response = await fetch('http://api.dannyhaslund.dk:3001/product', {
                    method: 'GET',
                    headers: { Accept: 'application/json' }
                });

                let json = await response.json();

                if (!json.success) {
                    return console.log("Wrong");
                }

                let data = [];

                for (let i = 0; i < json.results.length; i++) {
                    let product = json.results[i];
                    product['comments'] = [];
                    data.push(product);
                }

                setPosts(() => data);


            } catch (e) {
                console.log("try error ", e)
            }

        },
        fetchComments: async (post) => {

            try {

                let newArr = [...posts];

                let index = newArr.findIndex(x => x.id == post.id);

                if (typeof post == "undefined") throw Error;

                let response = await fetch(`http://api.dannyhaslund.dk:3001/comment?id=${post.id}`, {
                    method: 'GET',
                    headers: { Accept: 'application/json' }
                });

                let json = await response.json();

                if (!json.success || typeof json.results == "undefined") {
                    return console.log("Wrong");
                }
                else {
                    newArr[index].comments = json.results;
                    newArr[index]['numOfComments'] = json.results.length;

                    setPosts(() => newArr);
                }

            } catch (e) {
                console.log("try error ", e)
            }
        },
        createPost: async (post) => {

            try {

                if (typeof post == "undefined") throw Error;

                var form = new FormData();

                console.log(post)

                for (let key in post) {

                    if(key == "files")
                        form.append(`image`, post[key], "test.jpg");
                    else
                        form.append(key, post[key]);
                }

                let options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': "multipart/form-data; ",
                        'Authorization': 'Bearer ' + user.userToken,
                    },
                    body : form
                }

                console.log(options.body, options.body.file)

                let response = await fetch(`http://api.dannyhaslund.dk:3001/product`, options);

                let json = await response.json();

                if (!json.success || typeof json.results == "undefined") {
                    return console.log(json);
                }
                else {
                    setPosts((prev) => [...prev, json.results]);
                }

            } catch (e) {
                console.log("try error ", e)
            }


        }
    };

    useEffect(() => {
        postsContext.fetchPosts();
    }, []);

    return (
        <PostsContext.Provider value={{ postsContext, posts, setPosts }}>
            {props.children}
        </PostsContext.Provider>
    )
}

export default PostsContextProvider;