import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Navbar from './components/Navbar';

const theme = createTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#000000',
    },
    secondary: {
      main: '#E19A4C',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />;
      <button variant="contained" color="primary">
        Botón
      </button>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search/:searchTerm" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
