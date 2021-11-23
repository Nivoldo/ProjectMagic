import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import professor from '../../assets/professor.png';
import './style.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Autor = ()=>{
return(
<Carousel responsive={responsive} arrows={false} infinite={true} autoPlay={true}>
    <div className="card-autor">
        <img className="card-autor-img" src={professor} alt="Autor 1"/>
        <div className="card-autor-text">
            <h5 className="text-center">Professor 01</h5>
            <p className="text-center">Formação do professor</p>
        </div>
    </div>
    <div className="card-autor">
        <img className="card-autor-img" src={professor} alt="Autor 1"/>
        <div className="card-autor-text">
            <h5 className="text-center">Professor 02</h5>
            <p className="text-center">Formação do professor</p>
        </div>
    </div>
    <div className="card-autor">
        <img className="card-autor-img" src={professor} alt="Autor 1"/>
        <div className="card-autor-text">
            <h5 className="text-center">Professor 03</h5>
            <p className="text-center">Formação do professor</p>
        </div>
    </div>
    <div className="card-autor">
        <img className="card-autor-img" src={professor} alt="Autor 1"/>
        <div className="card-autor-text">
            <h5 className="text-center">Professor 04</h5>
            <p className="text-center">Formação do professor</p>
        </div>
    </div>
</Carousel>)
}
export default Autor;