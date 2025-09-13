import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home/Home.jsx'
import About from "./component/About/about.jsx";



const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
            path:"",
            element:<Home/>
     } ,
      {
            path:"about",
            element:<About/>
     }
   
  ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/> 
  </React.StrictMode>,
)
