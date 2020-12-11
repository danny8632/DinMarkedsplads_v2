import React from 'react';
import RootNavigation from './navigation/RootNavigation';


import AuthContextProvider from './api/authContext';
import PostsContextProvider from './api/postContext';

export default function App() {
  return (
    <AuthContextProvider>
      <PostsContextProvider>
        <RootNavigation />
      </PostsContextProvider>
    </AuthContextProvider>
  );
}