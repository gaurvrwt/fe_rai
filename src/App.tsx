import React from 'react';
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom';
import Login from './Layouts/Login/Login';
import Rai from './Layouts/Home/Rai';
import { AuthProvider } from './utils/userContext';
import ProtectedRoutes from './utils/ProtectedRoutes';

type Props = {}

const App = (props: Props) => {

  const routes = createBrowserRouter([
    {
      path: '/', element: <ProtectedRoutes />, children: [
        { path: 'rai', element: <Rai /> }
      ]
    },
    { path: '/login', element: <Login /> },
    { path: '/registration', element: <Login /> },
  ]);

  return (
    <AuthProvider >
      <RouterProvider router={routes} />
    </AuthProvider>
  )
}

export default App