import Cabecalho from "../Components/Navbar/Navbar"
import logo from '../assets/img/pulse.png'
import '../assets/scss/Home.scss'
function Home(){
    return(
        <>
            <Cabecalho/>
            <main className="Container">
                <div className="main-banner">
                    <p>Saúde na Palma da Mão, Bem-Estar ao Alcance de Todos!</p>
                    <div className="logo-container">
                        <img src={logo} className="logo"/>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Home