import Cabecalho from "../Components/Navbar/Navbar"
import logo from '../assets/img/orange-b.png'
import '../assets/scss/Home.scss'
function Home(){
    return(
        <>
            <Cabecalho/>
            <main className="Container">
                <div className="main-banner">
                    <div className="logo-container">
                        <img src={logo}/>
                    </div>
                    <p>Saúde na Palma da Mão, Bem-Estar ao Alcance de Todos!</p>
                </div>
            </main>
        </>
    )
}
export default Home