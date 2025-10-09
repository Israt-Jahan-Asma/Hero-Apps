import React from 'react';
import { createBrowserRouter } from "react-router";
import Layout from '../Layout/Layout';
import Errorpage from '../ErrorPage/Errorpage';
import Home from '../Pages/Home';
import Apps from '../Pages/Apps'
import Installation from '../Pages/Installation'
import AppDetails from '../Pages/AppDetails';
import ErrorApp from '../ErrorPage/ErrorApp';
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    
    hydrateFallbackElement: <p>Loading...</p>,
    children:[
        {
            index:true,
            path:'/',
            Component: Home,
            
        },
        {
            path:'/apps',
            Component: Apps 
        },
        {
            path:'/installation',
            Component: Installation  
        },
        {
            path:'/app-details/:id',
            Component: AppDetails,
            errorElement: <ErrorApp></ErrorApp>
        },
        {
            path:'*',
            Component: Errorpage
        }
    ]
  },
]);

