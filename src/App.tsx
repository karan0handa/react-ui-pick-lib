import React from 'react';
import '@fontsource/inter';
import './App.css';
import { Box } from '@mui/joy';
import Header from './components/Header';
import MainBody from './components/MainBody';

function App() {
  return (
    <Box>
      <Header/>
      <MainBody/>
    </Box>
  );
}

export default App;
