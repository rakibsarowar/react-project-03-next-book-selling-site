import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/Home/Home'
import About from './component/About/About'
import Books from './component/Books/Books'

const router = createBrowserRouter([
  {
    path: '/',
    // Parent  and need to call all children in it. 
    element: <App></App>,
    children:[
      {
        // 1st item will be default so this home will be default---------------------------------.
        path: '/',
        element: <Home></Home>
      },
      {
        path:'books',
        element:<Books></Books>,
        loader: ()=> fetch ('https://api.itbook.store/1.0/new'),
        
      },

      {
        path: '/about',
        element: <About></About>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}></RouterProvider>
)
