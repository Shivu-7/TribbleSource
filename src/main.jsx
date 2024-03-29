import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BlogPage from './BlogPage';
import AboutUs from './AboutUs';
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "blog",
    element: <BlogPage/>,
  }, 
  {
    path: "AboutUs",
    element: <AboutUs/>,
  },
]); 

ReactDOM.createRoot(document.getElementById('root')).render(
   // <React.StrictMode>
    <RouterProvider router={router} />
    //</React.StrictMode>
);
