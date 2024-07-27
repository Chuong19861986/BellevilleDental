import React from 'react'
import styles from './Model.module.css'
import Ahihi from '../assets/images/404-tick.png'
import { useNavigate } from 'react-router-dom'

const Model = () => {
  const navigate = useNavigate();
  const handleClick1 = () => {
    navigate(<home/>);
  }
  return (
    <div className={styles.containerss}>
       {/* <button type='submit' className={styles.btn}>Submit</button> */}
       <div className={styles.popup} id='popup'>
        <img src={Ahihi}/>
        <h2>Thanh you!</h2>
        <p>Your order has been paid successfully. Thank!</p>
        <button type='button' onClick={handleClick1}>Ok</button>
       </div>
    </div>
  )
}

export default Model;