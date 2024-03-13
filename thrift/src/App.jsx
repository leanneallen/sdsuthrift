import * as React from 'react'; 
import Header from './components/Header'
import ListingList from './components/ListingList'
import Typography from '@mui/material/Typography';
/* import createTheme from '@mui/material/styles';
import ThemeProvider from '@mui/material/styles'; */
import './App.css'

/* const theme = createMuiTheme({
  typography: {
    allVariants: {
      fontFamily: 'serif',
      textTransform: 'none',
      fontSize: 16,
    },
  }
}); */


function App() {
  return (
    <>
    {/* <ThemeProvider theme={theme}> */}
    {/* HEADER DIV */}
      <div className ="header">
        <Header />
      </div>

    {/* BODY DIV */}
      <Typography variant="h3" align="left">
        {"Your Listings"}
      </Typography>
      <div className ="body">
           <ListingList />
      </div>
    {/* </ThemeProvider> */}
    </>
  )
}

export default App
