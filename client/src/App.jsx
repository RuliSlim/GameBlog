import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { Navbar } from './components';
import Home from './pages/Home';
import ChangeTheme from './hooks/ChangeTheme';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';


function App () {  
  const { theme, toggleDarkTheme } = ChangeTheme();
  const muiTheme = createMuiTheme(theme);

  return (
    <MuiThemeProvider theme = {muiTheme}>
      <Grid container>
        <Grid item xs={12}>
          <Navbar toggleModed={toggleDarkTheme}/>
        </Grid>
        <Container maxWidth="xs">
          <Home />
          {JSON.stringify(theme.palette.type, null, 4)}
        </Container>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
