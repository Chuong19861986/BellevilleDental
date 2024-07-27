import React, { useState } from "react";
import Slider from "react-slick";
import styles from "./Carousel.module.css";
import img1 from "../image/khoi1.jpg";
import img2 from "../image/khoi1_2.jpg";
import img3 from "../image/khoi1_3.jpg";

export default function CarouselPage1() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    rtl: true
  };

  return (
    <div className="container">
      <div className="top-section">
        <div className="left-side">
          <div className={styles.container1}>
            <Slider {...settings}>
              <div className={styles.img}>
                <img src={img1} alt="Slide 1" />
              </div>
              <div className={styles.img}>
                <img src={img2} alt="Slide 2" />
              </div>
              <div className={styles.img}>
                <img src={img3} alt="Slide 3" />
              </div>
            </Slider>
            </div>
            </div>
            </div>        
    </div>
  );
}
