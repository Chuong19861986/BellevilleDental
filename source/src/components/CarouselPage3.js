import React from "react";
import Slider from "react-slick";
import styles from "./Carousel.module.css";
import img1 from "../image/khoi3_1.webp";
import img2 from "../image/khoi3_2.jpg";
import img3 from "../image/istockphoto-466825216-612x612.jpg";

export default function CarouselPage3() {
  var settings = {
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
    <div className={styles.container1}>
    <Slider {...settings}>
        
      <div className={styles.img}>
        <img src={img1}/>
      </div>
      <div className={styles.img}>
        <img src={img2}/>
      </div>
      <div className={styles.img}>
        <img src={img3}/>
      </div>
      
      
    </Slider>
    </div>
  );
}