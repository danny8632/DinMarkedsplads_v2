import React from 'react';
import RootNavigation from './navigation/RootNavigation';


import AuthContextProvider from './api/authContext';

export default function App() {
  return (
    <AuthContextProvider>
      <RootNavigation />
    </AuthContextProvider>
  );
}