import './Footer.css';
import img from '../image/Dental professor.jpg'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Footer(){
    return(
        <div className='box_footer'>
             <div className='box-img' >
              <div className='img'><img src={img}/></div>
              <div className='i_icon'>
              <i class="fa-brands fa-facebook" ></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-tiktok"></i>
              </div>
              </div>

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
    )
}
export default Footer;