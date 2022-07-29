import * as React from 'react';

import { Box, Button, Paper, Typography } from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },

  box: {
    padding: 20,
  },
}));
export default function LoginPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>

        <Box mt={4}>
          <Button variant="contained" color="primary" fullWidth>
            {' '}
            Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
