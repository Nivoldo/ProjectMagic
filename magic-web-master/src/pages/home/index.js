import React from 'react'
import './style.css';
import Navbar from '../../components/NavBar';
import Autor from '../../components/carousel'
import Testimonial from '../../components/testimonial'
import Faqs from '../../components/faq';
import Footer from '../../components/footer';
import {AiOutlineDoubleRight} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import img1 from '../../assets/home.png';
import img2 from '../../assets/home2.png';
import img3 from '../../assets/home3.png';
import img4 from '../../assets/home4.png';
import img5 from '../../assets/home5.png';
import img6 from '../../assets/home6.png';

const Home = () => {

    return(
    <>
        <Navbar/>
        <div className="banner">
            <div className="banner-text">
                <h2 id="banner-text" className="font-weight-bold display-4 text-white">CONSTRUINDO<br/> NEGÓCIOS MÁGICOS<br/> COM O PODER DO ON-LINE!</h2>
                <Link to='/register'><button type="button" id="banner-button" className="btn btn-primary">Quero começar minha evolução <AiOutlineDoubleRight/></button></Link>
            </div>
            <img src={img1} alt="banner1" className="banner1-img"/>
        </div>
        <div className="banner-2">
            <img src={img2} alt="banner1" className="banner2-img"/>
            <div className="banner2-text">
                <h2 id="banner2-title" className="display-5 text-white mx-auto">Faça a Magia acontecer e tenha a vida dos sonhos com Negócios On-line</h2>
                <h3 id="banner2-subtitle">Imagina ter as habilidades necessárias para construir um negócio on-line lucrativo que sirva para você ter a vida dos seus sonhos, esse é o objetivo da nossa escola da magia.</h3>
            </div>
        </div>
        <div className="banner d-flex">
            <div className="banner3-text">
                <h2 id="banner3-title" className="display-5 text-white mx-auto">Melhores Professores</h2>
                <h3 id="banner3-subtitle">Tenha as mentorias com os melhores traçando seu caminho para o sucesso!</h3>
            </div>
            <div className="card-autor-container">
                <Autor/>
            </div>
        </div>
        <div className="banner-3 banner4">
            <div className="d-flex img-container">
            <img src={img3} alt="banner1" className="banner3-img"/>
            <img src={img4} alt="banner1" className="banner4-img"/>
            <img src={img5} alt="banner1" className="banner5-img"/>
            <img src={img6} alt="banner1" className="banner6-img"/>
            </div>
            <div className="info-container">
                <div className="info">
                    <div className="info-number">
                        <p className="info-number-text">1</p>
                    </div>
                    <div className="info-text">
                        <p className="info-text-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sagittis sem, eu egestas velit. Donec rutrum, purus non vulputate posuere, felis est viverra ligula, vel pretium orci nulla et magna.</p>
                    </div>
                </div>
                <div className="info">
                    <div className="info-number">
                        <p className="info-number-text">2</p>
                    </div>
                    <div className="info-text">
                    <p className="info-text-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sagittis sem, eu egestas velit. Donec rutrum, purus non vulputate posuere, felis est viverra ligula, vel pretium orci nulla et magna.</p>
                    </div>
                </div>
                <div className="info">
                    <div className="info-number">
                        <p className="info-number-text">3</p>
                    </div>
                    <div className="info-text">
                    <p className="info-text-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sagittis sem, eu egestas velit. Donec rutrum, purus non vulputate posuere, felis est viverra ligula, vel pretium orci nulla et magna.</p>
                    </div>
                </div>
                <div className="info">
                    <div className="info-number">
                        <p className="info-number-text">4</p>
                    </div>
                    <div className="info-text">
                    <p className="info-text-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sagittis sem, eu egestas velit. Donec rutrum, purus non vulputate posuere, felis est viverra ligula, vel pretium orci nulla et magna.</p>
                    </div>
                </div>
            </div>            
        </div>
        <div className="testimonial-container">
            <Testimonial/>
        </div>
        <div className="banner-22">
            <div className="faq-title">
                <h1 className="display-4 text-white">Dúvidas Frequentes</h1>
            </div>
            <div className="faq">
                <Faqs/>
            </div>
        </div>
        <Footer/>
    </>
    )
}



export default Home;