    import Cabecalho from "../Components/Cabecalho/Cabecalho"
    import Carousel from 'react-bootstrap/Carousel';
    import { Link } from "react-router-dom";
    import '../assets/scss/Usuario.scss'
    import img1 from '../assets/img/tech-p.png'
    import img2 from '../assets/img/doctor.png'
    import img3 from '../assets/img/monitor.png'
    function Usuario(){

        return(
            <>
                <Cabecalho/>
                <div className="user-container">
                    <h1 className="title">Bem vindo ao Pulse-Guard</h1>
                    <Carousel fade interval={2000} >
                    <Carousel.Item>
                        <img src={img1} />
                        <Carousel.Caption>
                        <h3>Tecnologia Atualizada</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img2}   />
                        <Carousel.Caption>
                        <h3>Integração com Profissionais de Saúde</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img3}  />
                        <Carousel.Caption>
                        <h3>Monitoramento</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                    <div className="vantagens">
                        <div>
                            <h1>Monitoramento Contínuo </h1>
                            <i class='bx bx-desktop'></i>
                            <p>Os usuários teriam um monitoramento contínuo de sua saúde, promovendo a conscientização e a tomada de decisões informadas sobre estilo de vida e cuidados com a saúde.</p>
                        </div>
                        <div>
                            <h1>Eficiência nos Cuidados de Saúde</h1>
                            <i class='bx bx-heart' ></i>
                            <p>Facilita o trabalho dos profissionais de saúde, fornecendo dados precisos e atualizados, otimizando o tempo de consulta e permitindo um acompanhamento mais eficiente.</p>
                        </div>
                        <div>
                            <h1>Prevenção e Diagnóstico Precoce</h1>
                            <i class='bx bxs-report'></i>
                            <p>Identificação precoce de padrões anormais que podem indicar problemas de saúde, permitindo intervenções proativas e a prevenção de complicações.</p>
                        </div>
                        <div>
                            <h1>Motivação para a Saúde</h1>
                            <i class='bx bx-dumbbell'></i>
                            <p>Recursos interativos, como metas personalizadas e recompensas, podem motivar os usuários a adotarem estilos de vida mais saudáveis</p>
                        </div>
                    </div>
                    <button className="btn-about">
                        Saiba Mais 
                    </button>
                </div>
                
            </>
        )
    }
    export default Usuario