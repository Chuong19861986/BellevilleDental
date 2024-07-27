import React from "react";
import styles from "./TeethWhitening.module.css";
import img1 from "../image/whitening1.jpg";
import img2 from "../image/whitening2.jpg";
import img3 from "../image/whitening3.jpg";
import img4 from "../image/whitening4.jpg";
import img5 from "../image/whitening5.jpg";
import pro1 from "../image/product1.jpg";
import pro2 from "../image/product2.jpg";
import pro3 from "../image/product3.jpg";
import pro4 from "../image/product4.jpg";
import pro5 from "../image/product5.jpg";
import service1 from "../image/service1.jpg";
import service2 from "../image/service2.jpg";
import service3 from "../image/service3.jpg";
import service4 from "../image/service4.jpg";
import service5 from "../image/service5.jpg";

const otherServices = [
  {
    name: "Dental Checkup",
    price: "$50",
    description: "Comprehensive dental checkup to maintain oral health.",
    image: service1,
  },
  {
    name: "Root Canal Treatment",
    price: "$500",
    description: "Effective root canal treatment to save your tooth.",
    image: service2,
  },
  {
    name: "Tooth Extraction",
    price: "$100",
    description: "Safe and painless tooth extraction services.",
    image: service3,
  },
  {
    name: "Dental Implants",
    price: "$1000",
    description: "High-quality dental implants for missing teeth.",
    image: service4,
  },
  {
    name: "Orthodontic Braces",
    price: "$1500",
    description: "Orthodontic braces for straighter, healthier teeth.",
    image: service5,
  },
];

const products = [
  {
    name: "Electric Toothbrush",
    price: "$49.99",
    description: "A high-quality electric toothbrush for a deeper clean.",
    image: pro1,
  },
  {
    name: "Whitening Toothpaste",
    price: "$9.99",
    description: "A whitening toothpaste to brighten your smile.",
    image: pro2,
  },
  {
    name: "Mouthwash",
    price: "$5.99",
    description: "An antiseptic mouthwash to keep your breath fresh.",
    image: pro3,
  },
  {
    name: "Dental Floss",
    price: "$3.99",
    description: "A pack of dental floss to remove plaque and debris.",
    image: pro4,
  },
  {
    name: "Toothbrush Holder",
    price: "$7.99",
    description: "A stylish toothbrush holder to keep your toothbrush clean.",
    image: pro5,
  },
];

const services = [
  {
    name: "Basic Whitening",
    price: "$99",
    description: "A basic whitening service to brighten your smile.",
    image: img1,
  },
  {
    name: "Advanced Whitening",
    price: "$199",
    description: "Advanced whitening for deeper stains and longer-lasting results.",
    image: img2,
  },
  {
    name: "Express Whitening",
    price: "$75",
    description: "Quick and affordable whitening for a brighter smile in minutes.",
    image: img3,
  },
  {
    name: "Professional Whitening",
    price: "$299",
    description: "Professional grade whitening for the best results.",
    image: img4,
  },
  {
    name: "Custom Whitening",
    price: "$250",
    description: "Custom whitening tailored to your specific needs.",
    image: img5,
  },
];

const Service = () => {
  return (
    <div>
      <h1>Service</h1> 
      <div className={styles.container1}>
        <h1>Teeth Whitening Services</h1>
        <div className={styles.services}>
          {services.map((service, index) => (
            <div key={index} className={styles.service}>
              <img src={service.image} alt={service.name} className={styles.image} />
              <h2>{service.name}</h2>
              <p>{service.description}</p>
              <p className={styles.price}>{service.price}</p>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <div className={styles.container2}>
        <h1>Dental Hygiene Products</h1>
        <div className={styles.products}>
          {products.map((product, index) => (
            <div key={index} className={styles.product}>
              <img src={product.image} alt={product.name} className={styles.image} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p className={styles.price}>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <div className={styles.container3}>
        <h1>Other Dental Services</h1>
        <div className={styles.services}>
          {otherServices.map((service, index) => (
            <div key={index} className={styles.service}>
              <img src={service.image} alt={service.name} className={styles.image} />
              <h2>{service.name}</h2>
              <p>{service.description}</p>
              <p className={styles.price}>{service.price}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .${styles.container1}, .${styles.container2}, .${styles.container3} {
          width: 80%;
          margin: 0 auto;
          text-align: center;
        }
        .${styles.services}, .${styles.products} {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
        .${styles.service}, .${styles.product} {
          flex: 1 1 300px;
          margin: 1em;
          padding: 1em;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .${styles.image} {
          width: 150px;
          height: auto;
          border-radius: 8px;
          object-fit: cover;
          margin-bottom: 1em;
        }
        .${styles.price} {
          font-size: 1.2em;
          color: #4CAF50;
          font-weight: bold;
          margin-top: 1em;
        }
      `}</style>
    </div>
  );
};

export default Service;
