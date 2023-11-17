import './App.Module.scss'
import { Outlet } from "react-router-dom";
import Rodape from './Components/Rodape/Rodape.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
function App() {
  return (
    <>
      <Outlet/>
      <Rodape/>
    </>
  )
}

export default App
