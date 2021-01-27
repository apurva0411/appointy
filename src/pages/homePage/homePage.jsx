import React from 'react';
import homeimg from '../../assets/home.png';
import './homePage.css';

const homePage = () => {
    return (
        <div className='homepage'>
          <div>
            <img src = {homeimg} alt='home' className='home'></img> 
          </div>
          <div className='topline'>
             <h1>WELCOME !</h1>
          </div>
        </div>
    )
}

export default homePage
