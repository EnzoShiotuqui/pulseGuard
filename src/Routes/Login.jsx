import Navbar from "../Components/Navbar/Navbar.jsx"
import '../assets/scss/Login.scss'
import  { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";


import styled from "styled-components"

export const Pmodal = styled.p`
    font-size:25px;
    text-align:center;
`
function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();

        const apiResponse = await fetch("http://localhost:5000/cadastros");
        const apiData = await apiResponse.json();
        const userFromApi = apiData.find((user) => user.email === email && user.password === password);

        if (userFromApi) {
            setAuthenticated(true);
            setShowModal(true);
        }else {
            // If not found in API, check sessionStorage
            const userData = JSON.parse(sessionStorage.getItem("UserData")) || [];
            const user = userData.find(
              (user) => user.email === email && user.password === password
            );
            if (user) {
                setAuthenticated(true);
                setShowModal(true);
              } else {
                alert("Autenticação falhou. Verifique suas credenciais.");
              }
        }

        
      };

      const hideModal = () => {
        setShowModal(false);
        setLoading(true);
        setTimeout(() => {
            navigate(authenticated ? "/Usuario" : "/");
        }, 2000);
      };

      useEffect(() => {
        const redirectToUser = async () => {
          setLoading(true);
    
          if (authenticated) {
            try {
              const response = await fetch("http://localhost:5000/cadastros");
              const users = await response.json();
    
              return users.some((user) => user.email === data.email);
            } catch (error) {
              console.error("Erro ao verificar dados iguais da API:", error);
              return false;
            }
          }
        };
    
        redirectToUser();
      }, [authenticated]);
    
      useEffect(() => {
        if (loading && authenticated) {
          setTimeout(() => {
            navigate("/Usuario");
          }, 2000);
        }
      }, [loading, authenticated]);
    return(
        <>
            <Navbar/>
             <main className="login-container">
                <div className="form-box">
                <div className="login-header">
                    <h2 className="titulo">Fazer Login</h2>
                 </div>
                 <div className="form">
                    <div className="app-container">
                        <form onSubmit={handleSubmit}>

                            <div className="form-boxx">
                                <label>E-Mail</label>
                                <input
                                    type="email"
                                    placeholder="Seu Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="form-boxx">
                                <label>Senha</label>
                                <input
                                    type="password"
                                    placeholder="Senha"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="form-boxx">
                                <button type="submit">Fazer Login</button>
                                <h2 className="backbtn"><Link to="/Cadastro">Voltar ao cadastro</Link></h2>
                            </div>

                        </form>
                    </div>
                 </div>
                </div>
                
             </main>
             <Modal show={showModal} onHide={hideModal}>
                <Modal.Header closeButton style={{background:'#04b8ff'}}>
                    <Modal.Title>Bem Vindo</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{background:'linear-gradient(to bottom, #04b8ff, #056788)'}}>
                    <Pmodal>Seja Bem vindo a reUse, é um prazer em  tê-lo  conosco</Pmodal>
                    <Pmodal>Você será direcionado Automaticamente </Pmodal>
                    {loading && (
                        <div className="text-center mt-3">
                        <Spinner animation="border" variant="light" />
                        </div>
                )}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Login