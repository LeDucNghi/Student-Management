import * as React from 'react';

import { Box, Button, Paper, Typography } from '@mui/material';

import { authActions } from '../authSlice';
import { makeStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';

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
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(
      authActions.login({
        username: '',
        password: '',
      })
    );
  };
  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>

        <Box mt={4}>
          <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
            {' '}
            Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
