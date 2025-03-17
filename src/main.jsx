import { StrictMode } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App';
import Profile from './Profile';
import Spinach from './Spinach';
import Popeye from './Popeye';
import DefaultProfile from './DefaultProfile';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "profile",
    element: <Profile isLoggedIn={true}/>,
    children: [
      {index: true, element: <DefaultProfile />},
      { path: "spinach", element: <Spinach /> },
      {path: "popeye", element: <Popeye />},
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
