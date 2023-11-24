import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Login from './routes/Login/index.jsx'
import Home from './routes/Home/index.jsx'
import Error from './routes/Error/index.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  errorElement: <Error/>,
  children:[
    {
      path: '/',
      element: <Login/>
    },
    {
      path: '/login/home',
      element: <Home/> 
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
