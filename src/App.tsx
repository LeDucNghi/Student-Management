import './App.css';

import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AdminLayout } from 'components/Layout';
import LoginPage from 'features/auth/pages/LoginPage';
import { NotFound } from 'components/Common';
import { cityApi } from 'api/cityApi';

function App() {
  useEffect(() => {
    cityApi.getAll().then((res) => console.log(res));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/admin" element={<AdminLayout />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
