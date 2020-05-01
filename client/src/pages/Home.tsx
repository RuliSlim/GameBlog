import React from 'react';
import { Card } from '../components';
import { Grid } from '@material-ui/core';

const Home = () => {
  return (
    <>
      <Grid container >
        <Grid item xs={12}>
          <Card />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;