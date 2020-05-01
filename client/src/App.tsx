import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { Navbar } from './components';
import Home from './pages/Home';

function App () {  
  return (
    <Grid container>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Container maxWidth="xs">
        <Home />
      </Container>
    </Grid>
  );
}

export default App;
