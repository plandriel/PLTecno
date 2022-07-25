import React from 'react'
import { Images } from "../../utils/images";

const Carousel = () => {
  return (

    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={Images.Slider01} className="d-block w-100" alt="Banner publicidad notebooks" />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={Images.Slider02} className="d-block w-100" alt="Banner publicidad PC ARMADA" />
    </div>
    <div className="carousel-item">
      <img src={Images.Slider03} className="d-block w-100" alt="Banner publicidad NVIDIA" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden"></span>
  </button>
</div>
  )
}

export default Carousel