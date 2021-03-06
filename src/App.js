import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Paper, Link, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getEntries } from './actions/entries.js';
import Form from './components/Form/Form.js';
import Intro from './components/Intro/Intro.js';
import useStyles from './styles.js';
import Heading from './components/Heading/Heading.js';

function App() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEntries());
  },[currentId, dispatch]);

  return (
    <Container maxwidth="lg">
      <Grow in>
        <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item>
            <Heading/>
          </Grid>
          <Grid item>
            <Intro/>
          </Grid>
          <Grid item>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
          </Grid>
          {/*
          <Grid item>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
          </Grid>
          */}
          {/*
          <Grid item>
            <Entries setCurrentId={setCurrentId}/>
          </Grid>
          */}
          <Grid item>
            <Paper align="center">
              <Link className={classes.link} href="https://humboldt4future.github.io/impressum/">
                <Typography className={classes.text} variant="h5">
                  Hier kommen sie zu unserem Impressum, auf dem auch das Impressum unserer Schule verlinkt ist
                </Typography>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
}

export default App;
