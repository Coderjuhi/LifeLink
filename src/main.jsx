import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home/Home.jsx'
import About from "./component/About/about.jsx";
import Contact from "./component/Contact/Contact.jsx";
import Login from "./component/Login.jsx";
import SignUp from "./component/SignUp.jsx";



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
     } ,
      {
            path:"contact",
            element:<Contact/>
     },
     {
            path:"login",
            element:<Login/>
     },
     {
            path:"signUp",
            element:<SignUp/>
     }
   
  ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/> 
  </React.StrictMode>,
)
