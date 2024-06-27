import React from 'react';
import { createBrowserRouter,RouterProvider,Routes } from 'react-router-dom';
import Login from './Layouts/Login/Login';
import Rai from './Layouts/Home/Rai';

type Props = {}

const App = (props: Props) => {

const routes = createBrowserRouter([
  { path: '/rai', element: <Rai /> },
  { path: '/login', element: <Login /> },
  { path: '/registration', element: <Login /> },
]);

  return (
  <RouterProvider router={routes} />
  )
}

export default App