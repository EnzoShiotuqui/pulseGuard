import Cabecalho from "../Components/Cabecalho/Cabecalho"
import '../assets/scss/About.scss'
import { Link } from "react-router-dom";

function About(){
    return(
        <>
        <Cabecalho/>
            <div className="about-container">
                <h1 className="title">Quem somos?</h1>
                <div className="vantagens">
                        <div>
                            <h1>Pulse Guard </h1>
                            <i class='bx bx-desktop'></i>
                            <p>Somos uma empresa que anda de mão dadas com a sáude e a tecnologia. A pulse guard é responsável por introduzir ao mercado disposítivos que facilitam a vida tanto do paciente do doutor. Nosso produto seria um dispositivo móvel como pulseiras, colares que monitoram parâmetros vitais, como frequência cardíaca, níveis de glicose, pressão arterial, qualidade do sono e atividade física.</p>
                        </div>
                        <div>
                            <h1>Pulse Guard em hospitais</h1>
                            <i class='bx bx-plus-medical'></i>
                            <p>Para hospitais. Desenvolvemos outro dispositivo para agilizar as consultar e facilitar a vida dos doutores. Esse dispositivo estaria conectado a um banco com todos os dados dos pacientes, que permitiria um relatório mais rápido e completo. Além de estar integrado com um analíse de amostras do corpo, como urina e saliva, isso daria o diagnóstico preciso e saber com antecedência o que será necessário tratar</p>
                        </div>
                        <div>
                            <h1>Aplicativo Móvel</h1>
                            <i class='bx bxs-phone' ></i>
                            <p>Um aplicativo móvel interativo que se conecta aos dispositivos vestíveis e coleta dados em tempo real. Ele fornece uma interface fácil de usar para os usuários monitorarem seu estado de saúde, estabelecerem metas e receberem alertas personalizados.</p>
                        </div>
                        <div>
                            <h1>Algoritmos</h1>
                            <i class='bx bxs-report'></i>
                            <p>Algoritmos avançados de aprendizado de máquina que analisam os dados coletados ao longo do tempo. Eles podem identificar padrões, prever tendências e alertar os usuários sobre possíveis problemas de saúde. Por exemplo, alertas para mudanças significativas nos padrões de sono, aumentos repentinos na frequência cardíaca ou variações nos níveis de glicose</p>
                        </div>
                    </div>
                    <button className="btn-about">
                        <Link to="/Usuario">Voltar</Link>
                    </button>
            </div>
        </>
    )
}

export default About