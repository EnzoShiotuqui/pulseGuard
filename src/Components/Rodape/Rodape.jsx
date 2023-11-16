import logo from '../../assets/img/tech.png'
import './Rodape.scss'
function Rodape(){
    return(
            <footer className="footer-container">
                <div className="footer-img">
                    <img src={logo}/>
                    <p>Bem Estar ao alcance de todos</p>
                </div>
                <div className='footer-midia'>
                    <i class='bx bxl-whatsapp'><a href="#">- (11) 11111-1111</a></i>
                    <i class='bx bxs-phone-call'><a href="#">- 1818 181 1818</a></i>
                    <i class='bx bxs-envelope'><a href="#">- pulseguard@gmail.com</a></i>
                    <div className='social-media'>
                        <div class='bx bxl-facebook-square' ></div>
                        <div class='bx bxl-instagram-alt' ></div>
                        <div class='bx bxl-linkedin-square' ></div>
                    </div>
                </div> 
            </footer>
    )
}

export default Rodape