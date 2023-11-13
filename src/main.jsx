import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorPage from './routes/ErrorPage.jsx'
import Home from './routes/Home.jsx'

import { createBrowserRouter, RouterProvider, Route , Navigate} from "react-router-dom"

const router = createBrowserRouter([

  {
    path: "/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
