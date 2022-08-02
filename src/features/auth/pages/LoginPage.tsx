import * as React from 'react';

import { Box, Button, CircularProgress, Paper, Typography, createTheme } from '@mui/material';

import { authActions } from '../authSlice';
import { makeStyles } from '@mui/styles';
import { useAppSelector } from 'app/hooks';
import { useDispatch } from 'react-redux';

const theme = createTheme();

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },

  box: {
    padding: theme.spacing(2),
  },
});
export default function LoginPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLogging = useAppSelector((state) => state.auth.logging);

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
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            disabled={isLogging}
          >
            {' '}
            {isLogging ? <CircularProgress size={20} color="secondary" /> : 'Fake Login'}
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
