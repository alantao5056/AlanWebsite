import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// pages
import Home from './pages/Home'
import About from "./pages/About"
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import ErrorPage from "./pages/ErrorPage";

import './App.css'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/projects" element = {<Projects />}></Route>
          <Route path = "/blog" element = {<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <ErrorPage />
//   }, 
//   {
//     path: "/about",
//     element: <About />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "/blog",
//     element: <Blog />,
//     errorElement: <ErrorPage />
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Navbar />
//     <RouterProvider router={router} />
//   </React.StrictMode>
// )