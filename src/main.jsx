import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { router } from './route/Route/Route'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './Provider/AuthProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
    <ToastContainer />
  </React.StrictMode>,
)
