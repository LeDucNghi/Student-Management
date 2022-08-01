import * as React from 'react';

import { Navigate, Route, RouteProps } from 'react-router-dom';

export interface PrivateRouteProps {}

export function PrivateRoute(props: RouteProps) {
  // check if user is logged in
  // if yes, show route
  // otherwise, redirect to login page

  const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  console.log('🚀 ~ file: PrivateRoute.tsx ~ line 13 ~ PrivateRoute ~ isLoggedIn', isLoggedIn);
  if (!isLoggedIn) return <Navigate to="/login" replace={true} />;

  return <Route {...props} />;
}
