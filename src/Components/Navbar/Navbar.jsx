import { Link } from "react-router-dom";
import { useState } from "react"; // Importe o useState
import './Navbar.scss'
import 'boxicons/css/boxicons.min.css';
import pulse from '../../assets/img/pulse.png';

function Navbar() {
    const [isActive, setIsActive] = useState(false); // Estado para controlar a classe ativa

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <header className={`header ${isActive ? 'active' : ''}`}>
                <Link to='/' className="logo">
                    <img src={pulse} alt="logo" className="logo" />
                </Link>
                <div className={`bx bx-menu ${isActive ? 'active' : ''}`} id="menu-icon" onClick={toggleNavbar}></div>
                <nav className={`navbar ${isActive ? 'active' : ''}`}>
                    <Link to="/Cadastro">Cadastro</Link>
                    <Link to="/Login">Login</Link>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
