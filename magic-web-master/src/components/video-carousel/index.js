import React from "react";
import "./style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import thumb from "../../assets/thumb.png";
import destaque from "../../assets/destaque.png"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4.1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const VideoCarousel = () => {
  return (
    <>
      <div className="video-carousel-container-destaque">
        <Carousel
          responsive={responsive}
          arrows={true}
          infinite={true}
          autoPlay={false}
        >
          <div className="video-container-destaque">
            <img className="video-thumb-destaque" src={destaque} alt="video" />
            <div class="video-info-destaque">
              <h1 className="video-title-destaque">Curso 01</h1>
              <h1 className="video-description-destaque">Descrição do curso teste.</h1>
            </div>
          </div>
          <div className="video-container-destaque">
            <img className="video-thumb-destaque" src={destaque} alt="video" />
            <div class="video-info-destaque">
              <h1 className="video-title-destaque">Curso 02</h1>
              <h1 className="video-description-destaque">Descrição do curso teste.</h1>
            </div>
          </div>
          <div className="video-container-destaque">
            <img className="video-thumb-destaque" src={destaque} alt="video" />
            <div class="video-info-destaque">
              <h1 className="video-title-destaque">Curso 03</h1>
              <h1 className="video-description-destaque">Descrição do curso teste.</h1>
            </div>
          </div>
          <div className="video-container-destaque">
            <img className="video-thumb-destaque" src={destaque} alt="video" />
            <div class="video-info-destaque">
              <h1 className="video-title-destaque">Curso 04</h1>
              <h1 className="video-description-destaque">Descrição do curso teste.</h1>
            </div>
          </div>
          <div className="video-container-destaque">
            <img className="video-thumb-destaque" src={destaque} alt="video" />
            <div class="video-info-destaque">
              <h1 className="video-title-destaque">Curso 05</h1>
              <h1 className="video-description-destaque">Descrição do curso teste.</h1>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="video-carousel-container">
        <label className="display-4 video-carousel-title">
          Cursos em Andamento
        </label>
        <Carousel
          responsive={responsive}
          arrows={true}
          infinite={true}
          autoPlay={false}
        >
          <div className="video-container">
            <img className="video-thumb" src={thumb} alt="video" />
            <div class="video-info">
              <h1 className="video-title">Curso 01</h1>
              <h1 className="video-description">Descrição do curso teste.</h1>
            </div>
          </div>
          <div className="video-container">
            <img className="video-thumb" src={thumb} alt="video" />
            <div class="video-info">
              <h1 className="video-title">Curso 02</h1>
              <h1 className="video-description">Descrição do curso teste.</h1>
            </div>
          </div>
          <div className="video-container">
            <img className="video-thumb" src={thumb} alt="video" />
            <div class="video-info">
              <h1 className="video-title">Curso 03</h1>
              <h1 className="video-description">Descrição do curso teste.</h1>
            </div>
          </div>
          <div className="video-container">
            <img className="video-thumb" src={thumb} alt="video" />
            <div class="video-info">
              <h1 className="video-title">Curso 04</h1>
              <h1 className="video-description">Descrição do curso teste.</h1>
            </div>
          </div>
          <div className="video-container">
            <img className="video-thumb" src={thumb} alt="video" />
            <div class="video-info">
              <h1 className="video-title">Curso 05</h1>
              <h1 className="video-description">Descrição do curso teste.</h1>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="video-carousel-container">
        <label className="display-4 video-carousel-title">Novos Cursos</label>
        <Carousel
          responsive={responsive}
          arrows={true}
          infinite={true}
          autoPlay={false}
        >
          <div className="video-container">
            <img className="video-thumb" src={thumb} alt="video" />
            <div class="video-info">
              <h1 className="video-title">Curso 01</h1>
              <h1 className="video-description">Descrição do curso teste.</h1>
            </div>
          </div>
          <div className="video-container">
            <img className="video-thumb" src={thumb} alt="video" />
            <div class="video-info">
              <h1 className="video-title">Curso 02</h1>
              <h1 className="video-description">Descrição do curso teste.</h1>
            </div>
          </div>
          <div className="video-container">
            <img className="video-thumb" src={thumb} alt="video" />
            <div class="video-info">
              <h1 className="video-title">Curso 03</h1>
              <h1 className="video-description">Descrição do curso teste.</h1>
            </div>
          </div>
          <div className="video-container">
            <img className="video-thumb" src={thumb} alt="video" />
            <div class="video-info">
              <h1 className="video-title">Curso 04</h1>
              <h1 className="video-description">Descrição do curso teste.</h1>
            </div>
          </div>
          <div className="video-container">
            <img className="video-thumb" src={thumb} alt="video" />
            <div class="video-info">
              <h1 className="video-title">Curso 05</h1>
              <h1 className="video-description">Descrição do curso teste.</h1>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="video-carousel-container">
        <label className="display-4 video-carousel-title">
          Cursos mais comprados
        </label>
        <Carousel
          responsive={responsive}
          arrows={true}
          infinite={true}
          autoPlay={false}
        >
          <div className="video-container">
            <img className="video-thumb" src={thumb} alt="video" />
            <div class="video-info">
              <h1 className="video-title">Curso 01</h1>
              <h1 className="video-description">Descrição do curso teste.</h1>
            </div>
          </div>
          <div className="video-container">
            <img className="video-thumb" src={thumb} alt="video" />
            <div class="video-info">
              <h1 className="video-title">Curso 02</h1>
              <h1 className="video-description">Descrição do curso teste.</h1>
            </div>
          </div>
          <div className="video-container">
            <img className="video-thumb" src={thumb} alt="video" />
            <div class="video-info">
              <h1 className="video-title">Curso 03</h1>
              <h1 className="video-description">Descrição do curso teste.</h1>
            </div>
          </div>
          <div className="video-container">
            <img className="video-thumb" src={thumb} alt="video" />
            <div class="video-info">
              <h1 className="video-title">Curso 04</h1>
              <h1 className="video-description">Descrição do curso teste.</h1>
            </div>
          </div>
          <div className="video-container">
            <img className="video-thumb" src={thumb} alt="video" />
            <div class="video-info">
              <h1 className="video-title">Curso 05</h1>
              <h1 className="video-description">Descrição do curso teste.</h1>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};
export default VideoCarousel;
