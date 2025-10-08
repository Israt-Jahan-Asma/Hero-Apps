import React from 'react';
import { createBrowserRouter } from "react-router";
import Layout from '../Layout/Layout';
import Errorpage from '../ErrorPage/Errorpage';
import Home from '../Pages/Home';
import Apps from '../Pages/Apps'
import Installation from '../Pages/Installation'
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Errorpage></Errorpage>,
    children:[
        {
            index:true,
            path:'/',
            Component: Home
        },
        {
            path:'/apps',
            Component: Apps 
        },
        {
            path:'/installation',
            Component: Installation  
        }
    ]
  },
]);

