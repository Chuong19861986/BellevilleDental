import React from "react";
import Slider from "react-slick";
import './SlickSlider.css';
import img1 from '../image_slide/fotky-od-vas-dental-brothers-10-web.webp';
import img2 from '../image_slide/fotky-od-vas-dental-brothers-2-web.webp';
import img3 from '../image_slide/fotky-od-vas-dental-brothers-8-web.webp';
import img4 from '../image_slide/fotky-od-vas-dental-brothers-9-web.webp';
import img5 from '../image_slide/NSBinhTinh_BF-1.jpg';
import img6 from '../image_slide/fotky-od-vas-dental-brothers-12-web.webp';
import img7 from '../image_slide/fotky-od-vas-dental-brothers-22-web-700x700.webp';
import img8 from '../image_slide/screencapture-nhakhoakim-chuong-trinh-uu-dai-2024-07-08-22_42_35.png';
import img9 from '../image_slide/fotky-od-vas-dental-brothers-4-web.webp';

function SlickSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplaySpeed: 250,
    autoplay: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>

        <div><img src={img1} /></div>
        <div><img src={img2} /></div>
        <div><img src={img3} /></div>
        <div><img src={img4} /></div>
        <div><img src={img5} /></div>
        <div><img src={img6} /></div>
        <div><img src={img7} /></div>
        <div><img src={img8} /></div>
        <div><img src={img9} /></div>
      
      </Slider>
    </div>
  );
}

export default SlickSlider;