import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// components
import Navbar from '../components/Navbar'

// pages
import Home from '../pages/Home'
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />
  }, 
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
)