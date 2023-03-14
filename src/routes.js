import React from 'react';
import DefaltLayout from './components/layout/defaultLayout';
import Login from './auth/login';
import Register from './auth/register';
import Home from "./pages/Home/Home";
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';



import {  Navigate, createBrowserRouter } from 'react-router-dom';
import Error from './components/err/Error';


const routes = createBrowserRouter([
    {
        path: "/", element: <DefaltLayout />,
        children: [
            {path: '/', element: <Navigate to="/login"/>},
            { path: '/login', element: <Login /> },
            { path: '/signup', element: <Register /> }
        ],
    },
    {
        path: "/", element: <Home />,
        children: [
            { path: '/book', element: <BookList /> },
            { path: '/book/:id', element: <BookDetails /> }
        ]
    },
    { path: "*", element: <Error/>}

]);


export default routes;
