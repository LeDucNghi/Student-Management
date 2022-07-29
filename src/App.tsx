import './App.css';

import { NotFound, PrivateRoute } from 'components/Common';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AdminLayout } from 'components/Layout';
import LoginPage from 'features/auth/pages/LoginPage';
import { cityApi } from 'api/cityApi';

function App() {
  useEffect(() => {
    cityApi.getAll().then((res) => console.log(res));
  }, []);

  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />

      <Route path="admin" element={<PrivateRoute />}>
        <Route path="admin" element={<AdminLayout />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
