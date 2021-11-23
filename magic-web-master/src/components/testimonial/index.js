import Carousel from "react-multi-carousel";
import './style.css';
import "react-multi-carousel/lib/styles.css";
import cliente from '../../assets/testimonial.jpg';
import {AiFillInstagram} from 'react-icons/ai';


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
const Testimonial = ()=>{
    return(
        <Carousel responsive={responsive} infinite={true} >
            <div className="testimonial">
                <img className="testimonial-img" src={cliente} alt="Cliente 1"/>
                <div className="testimonial-text">
                    <p className="testimonial-text-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sagittis sem, eu egestas velit. Donec rutrum, purus non vulputate posuere, felis est viverra ligula, vel pretium orci nulla et magna.</p>
                    <p className="testimonial-insta"><AiFillInstagram/>project-magic</p>
                </div>
            </div>
            <div className="testimonial">
                <img className="testimonial-img" src={cliente} alt="Cliente 1"/>
                <div className="testimonial-text">
                    <p className="testimonial-text-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sagittis sem, eu egestas velit. Donec rutrum, purus non vulputate posuere, felis est viverra ligula, vel pretium orci nulla et magna.</p>
                    <p className="testimonial-insta"><AiFillInstagram/>project-magic</p>
                </div>
            </div>
            <div className="testimonial">
                <img className="testimonial-img" src={cliente} alt="Cliente 1"/>
                <div className="testimonial-text">
                    <p className="testimonial-text-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sagittis sem, eu egestas velit. Donec rutrum, purus non vulputate posuere, felis est viverra ligula, vel pretium orci nulla et magna.</p>
                    <p className="testimonial-insta"><AiFillInstagram/>project-magic</p>
                </div>
            </div>
            <div className="testimonial">
                <img className="testimonial-img" src={cliente} alt="Cliente 1"/>
                <div className="testimonial-text">
                    <p className="testimonial-text-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sagittis sem, eu egestas velit. Donec rutrum, purus non vulputate posuere, felis est viverra ligula, vel pretium orci nulla et magna.</p>
                    <p className="testimonial-insta"><AiFillInstagram/>project-magic</p>
                </div>
            </div>
            <div className="testimonial">
                <img className="testimonial-img" src={cliente} alt="Cliente 1"/>
                <div className="testimonial-text">
                    <p className="testimonial-text-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sagittis sem, eu egestas velit. Donec rutrum, purus non vulputate posuere, felis est viverra ligula, vel pretium orci nulla et magna.</p>
                    <p className="testimonial-insta"><AiFillInstagram/>project-magic</p>
                </div>
            </div>
            <div className="testimonial">
                <img className="testimonial-img" src={cliente} alt="Cliente 1"/>
                <div className="testimonial-text">
                    <p className="testimonial-text-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sagittis sem, eu egestas velit. Donec rutrum, purus non vulputate posuere, felis est viverra ligula, vel pretium orci nulla et magna.</p>
                    <p className="testimonial-insta"><AiFillInstagram/>project-magic</p>
                </div>
            </div>
        </Carousel>
        )
   }
export default Testimonial;