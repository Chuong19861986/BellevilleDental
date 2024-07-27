import React from 'react'
import './About.css';
import Footer from './Footer'

const About = () => {
  return (
    <div>
      <h1 className='h1s'>Why visit Dental Professor?</h1>
      <div className='element_grid'>

        <div className='element_flex'>
              <div><img width="600" height="600" src="https://dentalbrothers.sk/wp-content/uploads/2022/06/dental-brothers-icon-01.svg"/></div>
              <div><h3>Modern equipment</h3></div>
              <div><p>Our facilities are modern and luxuriously furnished with <strong>special and high-end instruments and equipment</strong>. We are one of the few in the country to use an intraoral camera and an antiplaque scanner for dental hygiene.</p></div>
        </div>
        <div className='element_flex'>
             <div><img width="600" height="600" src="https://dentalbrothers.sk/wp-content/uploads/2022/06/dental-brothers-icon-08.svg"  /></div>
             <div><h3>No waiting</h3></div>
             <div><p>Our customers have the option to make an <strong>appointment for a specific date and time that suits them.</strong> This means that they are booked in for dental hygiene or teeth whitening at the exact time and thus do not have to waste time waiting unnecessarily.</p></div>
        </div>
        <div className='element_flex'>
             <div><img width="600" height="600" src="https://dentalbrothers.sk/wp-content/uploads/2022/09/dental-brothers-icon-14.svg" /></div>
             <div><h3>Consistent dental hygiene</h3></div>
             <div><p>We perform dental hygiene<strong> professionally, thoroughly and precisely.</strong> We are not in a hurry and therefore the length of the dental hygiene treatment is at least 45 minutes.</p></div>
        </div>
        <div className='element_flex'>
              <div><img width="600" height="600" src='https://dentalbrothers.sk/wp-content/uploads/2022/06/dental-brothers-icon-10.svg' /></div>
              <div><h3>Customers card</h3></div>
              <div><p>Customers also receive a stamp on their loyalty card after each procedure. After collecting a sufficient amount, they get the next procedure<strong> completely free of charge.</strong></p></div>
        </div>
        <div className='element_flex'>
              <div><img width="600" height="600" src='https://dentalbrothers.sk/wp-content/uploads/2022/06/dental-brothers-icon-12.svg' /></div>
              <div><h3>Various benefits</h3></div>
              <div><p>At Dental Brothers, we also offer<strong> benefits for families, small businesses and large corporations.</strong> With the purchase of a 2x All Inclusive package, our customers' children can automatically come in for a <strong> free dental hygiene</strong> appointment.</p></div>
        </div>
        <div className='element_flex'>
                 <div><img width="600" height="600" src='https://dentalbrothers.sk/wp-content/uploads/2022/06/dental-brothers-icon-04.svg' /></div>
                 <div><h3>Individual approach</h3></div>
                 <div><p>At Dental Brothers, we treat every customer<strong> individually and above and beyond the norm.</strong> Therefore, customers do not have to worry about any outdated methods, methods or techniques and can come to us with pleasure and without fear.</p></div>
        </div>
        <div className='element_flex'>
          <div><img width="600" height="600" src="https://dentalbrothers.sk/wp-content/uploads/2022/06/dental-brothers-icon-02.svg"/> </div>
          <div><h3>Consistent dental hygiene</h3></div>
          <div><p>We perform dental hygiene<strong> professionally, thoroughly and precisely.</strong> We are not in a hurry and therefore the length of the dental hygiene treatment is at least 45 minutes.</p></div>
        </div>
        <div className='element_flex'>
          <div><img width="600" height="600" src="https://dentalbrothers.sk/wp-content/uploads/2023/11/7-dni-v-tyzdni.svg"/> </div>
          <div><h3>We work 7 days a week</h3></div>
          <div><p>We are open every day, including weekends, from 7:00 am to 9:00 pm. Therefore, you can visit us whenever it suits you best.</p></div>
        </div>
        <div className='element_flex'>
          <div><img width="600" height="600" src="https://dentalbrothers.sk/wp-content/uploads/2022/06/dental-brothers-icon-11.svg"/> </div>
          <div><h3>Birthday/Christmas discount</h3></div>
          <div><p>Loyal customers can also avail a<strong> discount</strong> on any act <strong>during their birthday or name day.</strong></p></div>
        </div>
      </div>
            <Footer/>
    </div>
  )
}

export default About;