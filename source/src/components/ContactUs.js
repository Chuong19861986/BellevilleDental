
import React, { useState } from "react";
import Slider from "react-slick";
import styles from "./Carousel.module.css";
import img1 from "../image/khoi1.jpg";
import img2 from "../image/khoi1_2.jpg";
import img3 from "../image/khoi1_3.jpg";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log(formData);
  };

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
        <div className="right-side">
          <iframe
            className="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99892.75332818943!2d-90.0784241037556!3d38.518815893588375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8a9a469959759%3A0xd86a3de04814d46a!2sSkyview%20Drive-In!5e0!3m2!1svi!2s!4v1721704161144!5m2!1svi!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Belleville Location"
          ></iframe>
        </div>
      </div>
      <div className="bottom-section">
        <div className="contact-form">
          <h2>Contact Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                value={formData.message} 
                onChange={handleChange} 
                required 
              ></textarea>
            </div>
            <div className="form-group">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 90%;
          margin: 0 auto;
        }
        .top-section {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
        .left-side, .right-side {
          flex: 1;
          margin: 1em;
        }
        .bottom-section {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-top: 2em;
        }
        .contact-form {
          background-color: #f9f9f9;
          padding: 2em;
          border-radius: 8px;
          width: 50%;
        }
        .contact-form h2 {
          margin-top: 0;
        }
        .form-group {
          margin-bottom: 1em;
        }
        .form-group label {
          display: block;
          margin-bottom: .5em;
        }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: .5em;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .form-group textarea {
          resize: vertical;
        }
        .form-group button {
          background-color: #4CAF50;
          color: white;
          border: none;
          padding: 1em 2em;
          cursor: pointer;
          border-radius: 4px;
        }
        .form-group button:hover {
          background-color: #45a049;
        }
        .google-map {
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}
