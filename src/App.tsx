import './App.css';

import { NotFound, PrivateRoute } from 'components/Common';
import { Route, Switch } from 'react-router-dom';

import { AdminLayout } from 'components/Layout';
import LoginPage from 'features/auth/pages/LoginPage';
import React from 'react';

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={LoginPage} />

        <PrivateRoute path="/admin">
          <AdminLayout />
        </PrivateRoute>

        <Route path="/" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
