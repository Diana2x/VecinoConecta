import React from 'react';
import LoginForm from './Components/LoginForm/LoginForm';
import Dashboard from './Components/Dashboard/Dashboard';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <div><LoginForm /></div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard /></div>
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={(router)} />
    </div>
  );
};

export default App;

