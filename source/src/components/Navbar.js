import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import jhjhj from '../image/Dental professor.jpg'
import { SlArrowDown } from "react-icons/sl";
import './Navbar.css';

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);


  // Hàm chuyển lên đầu trang khi nhấn vào đường link
  const handleLinkClick = (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
    const targetPage = event.target.getAttribute('href'); // Lấy đường dẫn trang mới
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Cuộn lên đầu trang
    // Chuyển đến trang mới sau khi cuộn xong
    setTimeout(() => {
      window.location.href = targetPage;
    }, 500); // Đợi 500ms trước khi chuyển trang
  };
  

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
       <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        
      <div className="logo"><img src={jhjhj}/></div>
      <input type='text' placeholder='Search for teeth...' />
      <ul className="menu">
        <li className='menu__item'><Link className='menu__link' to="/" onClick={handleLinkClick} >HOME</Link></li>      
        <li className='menu__item'><Link className='menu__link' to="/service" onClick={handleLinkClick} >SERVICE <SlArrowDown className='menu__link1' /></Link>
        <div className='menu__child'>
          <div className='menu__child-item'>           
            <ul className='menu__child-list'>
              <li className='menu__child-list-item'><Link>Teeth Whitening</Link></li>
              <li className='menu__child-list-item'><Link>Dental Hygiene</Link></li>
              <li className='menu__child-list-item'><Link>Other Services</Link></li>
            </ul>
          </div>
    
        </div>
        </li> 
        <li className='menu__item'><Link className='menu__link' to="/about" onClick={handleLinkClick} >ABOUT US</Link></li>
        <li className='menu__item'><Link className='menu__link' to="/contact" onClick={handleLinkClick} >CONTACT</Link></li>
        <li className='menu__item'><Link className='menu__link' to="/gioi-thieu"><button className='nav-button'>Get start</button></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
