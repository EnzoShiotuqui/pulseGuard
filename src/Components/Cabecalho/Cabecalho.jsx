import pulse from '../../assets/img/tech.png';
import './Cabecalho.scss';
import { useState, useEffect } from 'react';

function Cabecalho() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userData, setUserData] = useState(null);

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
    // Implement your logout logic here
    // For example, clear the user data from session storage
    sessionStorage.removeItem('loggedInUser');
    setUserData(null);
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
    </>
  );
}

export default Cabecalho;
