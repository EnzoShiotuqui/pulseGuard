import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Routes/Home.jsx'
import Cadastro from './Routes/Cadastro.jsx'
import Login from './Routes/Login.jsx'
import Usuario from './Routes/Usuario.jsx'
import About from './Routes/About.jsx'

const router = createBrowserRouter([
  {path: "/", element:<App/>,
    children:[
      {path: "/", element: <Home/>},
      {path: "/Cadastro", element: <Cadastro/>},
      {path: "/Login", element: <Login/>},
      {path: "/Usuario", element: <Usuario/>},
      {path: "/About", element: <About/>},
    ]   
  }    
])




ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
