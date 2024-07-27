
import React from 'react';
import Ahihi from '../image/Untitled.png';
import Ehehe from '../image/istockphoto-513105805-612x612.jpg';
import Ohoho from '../image/Dental professor1.png';
import Uhuhu from '../assets/images/istockphoto-1473412507-612x612.jpg'
import Xhxhx from '../image/istockphoto-466825216-612x612.jpg';
import { PiTooth } from "react-icons/pi";
import { PiToothDuotone } from "react-icons/pi";
import { PiToothFill } from "react-icons/pi";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import './Home.css';
import CarouselPage1 from './CarouselPage1';
import CarouselPage2 from './CarouselPage2';
import CarouselPage3 from './CarouselPage3';
import SlickSlider from './SlickSlider';

const Home = () => {
  return (
    <div className='container'>    

      <div className='ahihi'><img src={Ahihi}/></div>
      <div className='ohoho'><img src={Ohoho}/></div>

      <div className='box-content'> 
        {/* <img src={Uhuhu}/>  */}
        <div><CarouselPage1/></div>
        <div className='a-content'>
          <h1><span>The advance of the times</span></h1>
          <p>With a new age trend like today, technology is no longer strange to us, the same goes for dentistry, it is researched and developed by passionate scientists specializing in the field dental. Come to us and you will enjoy the modernity of these extremely beautiful machines both in terms of internal and external structure.</p>
          <button>Find out more</button>
        </div>
      </div>
      <hr />
      <div className='box-content_1'>     
        <div className='a-content'>
          <h4>About Us</h4>
          <h1><span>Dentists love their profession</span></h1>
          <p>With a team of professional dentists with more than 10 years of experience, they were initially trained by the best universities and graduated with prestigious university degrees and then they went to work and accumulated experience gradually to consolidate solid skills and in-depth knowledge to serve life so that now patients can safely trust them for in-depth advice on dental issues.</p>        
        </div>
        {/* <img src={Ehehe}/>  */}
        <div><CarouselPage2/></div>
    </div>
    <hr />
    <div className='box-content'> 
        <div><CarouselPage3/></div>
        <div className='a-content'>
          <h1><span>Reasonable service with price</span></h1>
          <p>You don't need to worry about your wallet when you come to us because we work for love and not purely for money. We will devote 100% of our time to advising you on our services so that you can feel comfortable with any service and make the right choice for your budget.</p>
          <button>Find out more</button>
        </div>
    </div>
    
    <div className='box-teeth'>
    <div className='tooth1'>
    <PiTooth className='i_con1'/>
    <h1>Teeth whitening</h1>
    <p>With modern ultraviolet tooth whitening service, your teeth will be naturally bright white thanks to AI smart antibacterial technology, which will penetrate every surface of your teeth and kill every microbe. bacteria and then make your teeth naturally white and bright.</p>
    {/* <h1>from 500$</h1> */}
    </div>

    <div className='tooth2'>
      <PiToothFill className='i_con2'/>
      <h1>Wisdom tooth extraction</h1>
      <p>Tooth extraction is often used in cases where teeth are damaged by decay or severe trauma and are difficult to recover. Choosing to have your wisdom teeth extracted here, you can be assured of advanced anesthesia techniques along with modern tooth extraction technology to ensure sterility, bring safety, and make you feel comfortable and painless. pain, no discomfort.</p>
      {/* <h2>from 200$</h2> */}
    </div>

    <div className='tooth3'>
      <PiToothDuotone className='i_con3'/>
      <h1>Transparent braces</h1>
      <p>Do you feel self-conscious with buck teeth when going out? You feel shy when communicating, that's when you have bad teeth, it's okay, come to us, we will help you solve that. Money is not important, the interesting thing here is that it will help you improve your confidence when communicating.</p>
      {/* <h1>from 1000$</h1> */}
    </div>
    </div>

     <div className='box_slider'>
     <h1>Customer's Smile</h1>
     <div><SlickSlider/></div>
     </div>

    <div className='box-fooder'>
    <div>
      <h2>Dental Professor</h2>
      <p>Homepage</p>
      <p>About Us</p>
      <p>Service</p>
      <p>Contact</p>
    </div>

    <div>
      <h2>Our Services</h2>
      <p>Transparent braces</p>
      <p>Teeth whitening</p>
      <p>Porcelain dental crowns</p>
      <p>Tooth extraction</p>
    </div>

    <div className=''>
      <h2>Contact Address</h2>
      <h3>Dental professor-center</h3>
      <div className='phone'><FaPhone /><p>Tel: 0123456789</p></div>
      <div className='email'><MdEmail /><p>Email: doinhubui113@gmail.com</p></div>
    </div>
    </div>
     
     
    </div>
  );
};

export default Home;
