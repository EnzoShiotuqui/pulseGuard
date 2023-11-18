import pulse from '../../assets/img/tech.png';
import './Cabecalho.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

function Cabecalho() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user data from session storage
    const storedUserData = sessionStorage.getItem('loggedInUser');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    sessionStorage.removeItem('loggedInUser');
    setTimeout(() => {
      navigate('/Login');
    }, 1000);
    setShowLogoutModal(false);
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <>
      <header className="header-new">
        <img src={pulse} alt="logo" className="logo" />
        <nav className="navbar-new">
          <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleDropdown}>
              {userData ? userData.name : 'Nome'}
            </button>
            {dropdownOpen && (
              <div className="dropdown-content">
                <p>{userData ? userData.email : 'Email'}</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Bootstrap Modal */}
      <Modal show={showLogoutModal} onHide={cancelLogout}>
        <Modal.Header closeButton style={{ background: "#04b8ff" }}>
          <Modal.Title>Confirmação de Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{
            background: 'linear-gradient(to bottom, #04b8ff, #056788)',
          }}>
          <p style={{fontSize:"1.2rem"}}>Tem certeza que deseja sair {JSON.parse(sessionStorage.getItem("userData")).name} ? </p>
        </Modal.Body>
        <Modal.Footer style={{ background: "#056788" }}>
          <Button  onClick={cancelLogout} style={{ background: "#051288" }}>
            Não
          </Button>
          <Button style={{ background: "#14aec2" }} onClick={confirmLogout}>
            Sim
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cabecalho;
