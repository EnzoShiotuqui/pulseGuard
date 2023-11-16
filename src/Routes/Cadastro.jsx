import  Navbar  from "../Components/Navbar/Navbar.jsx";
import '../assets/scss/Cadastro.scss'
import { useNavigate, Link } from "react-router-dom";
import  { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { isEmail } from "validator";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap"
import { Spinner } from "react-bootstrap";

import styled from "styled-components"

export const Pmodall = styled.p`
    font-size:25px;
    color:##023E8A;
    text-align:center;
`

export const PSubb = styled.p`
    text-align:center;
`



function Cadastro(){

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm()
    const [loading, setLoading] = useState(false);
    const watchPassword = watch("password");
    const [showModal, setShowModal] = useState(false);
    const [duplicateData, setDuplicateData] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);
    const navigate = useNavigate();
    const checkForDuplicateData = async (data) => {
        try {
          const response = await fetch("http://localhost:5000/cadastros");
          const users = await response.json();
    
          return users.some((user) => user.email === data.email);
        } catch (error) {
          console.error("Erro ao verificar dados iguais da API:", error);
          return false;  
        }
      };

      const onSubmit = async (data) => {
        setLoading(true)
        if (await checkForDuplicateData(data)) {
          setDuplicateData(true);
          setShowEmailError(true);
        } else {
          try {
            const response = await fetch("http://localhost:5000/cadastros", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
      
            if (response.status === 201) {
            setAuthenticated(true)
            const sessionUserData = JSON.parse(sessionStorage.getItem("sessionUserData")) || [];
            sessionUserData.push(data);
            sessionStorage.setItem("sessionUserData", JSON.stringify(sessionUserData))
            
        
      
              reset({
                name: "",
                email: "",
                password: "",
                passwordConfirmation: "",
              });
      
              setShowModal(true); 
            } else {
              console.error("Erro ao cadastrar o usuário na API.");
            }
          } catch (error) {
            console.error("Erro ao cadastrar o usuário na API:", error);
          }
        }
      };  

      const hideModal = () => {
        setShowModal(false);
        setLoading(true);
        setTimeout(() => {
            navigate(authenticated ? "/login" : "/");
        }, 2000);
      };

      useEffect(() => {
        const redirectToLogin = async () => {
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
    
        redirectToLogin();
      }, [authenticated]);
    
      useEffect(() => {
        if (loading && authenticated) {
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }
      }, [loading, authenticated]);
    
      const handleEmailChange = () => {
        setShowEmailError(false);
      };
    return(
        <>
         <Navbar/>
            <main className="cadastro-container">
                <p className="paragrafo">Seja bem vindo a PulseGuard que tal ficar por dentro de tudo?</p>
                <p className="paragrafo">Para ficar sabendo das novidades, basta realizar o cadastro!</p>

                <div className="form-box">
                    <div className="header-cadastro">
                        <h2 className="titulo">Fazer Cadastro</h2>
                    </div>
                   <div className="form">
                    <div className="app-container">
                            <div className="form-boxx">
                                <label>Nome</label>
                                <input className={errors?.name && "input-error"} type="text" placeholder="Seu nome" {...register("name", { required: true })}/>
                                {errors?.name?.type === "required" && (
                                    <p className="error-message">Nome é Obrigatório.</p>
                                 )}
                            </div>

                            <div className="form-boxx">
                                <label>email</label>
                                <input className={errors?.email && "input-error"} type="email" placeholder="email"  {...register("email", {
                                 required: true,
                                validate: (value) => isEmail(value),
                                })} onChange={handleEmailChange} />
                                 {errors?.email?.type === "required" && (
                                    <p className="error-message">Email é Obrigatório.</p>
                                 )}
                                 {errors?.email?.type === "validate" && (
                                    <p className="error-message">Email inválido</p>
                                )}
                                {showEmailError && (
                                    <p className="error-message">Já existe um cadastro com este e-mail.</p>
                                )}
                            </div>

                            <div className="form-boxx">
                                <label>Senha</label>
                                <input type="password" placeholder="Senha" className={errors?.password && "input-error"} {...register("password", { required: true, minLength: 6 })}/>
                                {errors?.password?.type === "required" && (
                                    <p className="error-message">Senha é Obrigatório.</p>
                                )}

                                {errors?.password?.type === "minLength" && (
                                    <p className="error-message">
                                    A senha precisa de pelo menos 6 caracteres
                                    </p>
                                )}
                            </div>

                            <div className="form-boxx">
                                <label>Confirmar senha</label>
                                <input className={errors?.passwordConfirmation && "input-error"} {...register("passwordConfirmation", {
                                required: true,
                                validate: (value) => value === watchPassword,
                                })} type="password" placeholder="Confirmar senha"/>
                                {errors?.passwordConfirmation?.type === "required" && (
                                    <p className="error-message">
                                        A confirmação de senha é obrigatória
                                    </p>
                                 )}
                                 {errors?.passwordConfirmation?.type === "validate" && (
                                    <p className="error-message">As senhas não combinam</p>
                                )}
                            </div>

                            <div className="form-boxx">
                                <button onClick={handleSubmit(onSubmit)}>Criar conta!</button>
                                <h2 className="backbtn"><Link to="/">Voltar a home</Link></h2>
                            </div>

                        </div>
                    </div> 
                    
                </div>
            </main>
            <Modal show={showModal} onHide={hideModal}  backdrop="static">
                <Modal.Header closeButton style={{background:'#04b8ff'}}>
                    <Modal.Title>Cadastro Concluído</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{background:'linear-gradient(to bottom, #04b8ff, #056788)'}}>
                    <Pmodall>Seu cadastro foi realizado com sucesso.</Pmodall>
                    <PSubb>Você será direcionado automaticamente para área de login!</PSubb>
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

export default Cadastro