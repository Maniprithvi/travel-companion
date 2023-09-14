import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider,createTheme } from '@mui/material/styles';


const theme = createTheme();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
