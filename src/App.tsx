import './App.css';

import { NotFound, PrivateRoute } from 'components/Common';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AdminLayout } from 'components/Layout';
import { Button } from '@mui/material';
import LoginPage from 'features/auth/pages/LoginPage';
import { authActions } from 'features/auth/authSlice';
import { cityApi } from 'api/cityApi';
import { useAppDispatch } from 'app/hooks';

function App() {
  useEffect(() => {
    cityApi.getAll().then((res) => console.log(res));
  }, []);

  const dispatch = useAppDispatch();

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => dispatch(authActions.logout())}>
        Logout
      </Button>
      <Routes>
        <Route path="login" element={<LoginPage />} />

        <Route path="admin" element={<PrivateRoute />}>
          <Route path="admin" element={<AdminLayout />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
