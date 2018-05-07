import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './footer.css';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import instagram from '../../images/instagram.png';
import pinterist from '../../images/pinterest.png';

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrap">
        <div className="footer">"When life gives you lemons, eat some Lahna's Chocolates."</div>
        <div className="social">
            <div className="social-media">
                <a href="https://www.facebook.com/lahna.prows" target='_blank'><img src={facebook} alt="facebook logo"/></a>
                <a href="https://www.instagram.com/lahnaschocolates/?hl=af" target="_blank" rel='noopener noreferrer'><img src={instagram} alt="instagram logo"/></a>
                <a href="https://www.pinterest.com/lahnascandy/" target="_blank" rel='noopener noreferrer'><img src={pinterist} alt="pinterist logo"/></a>
            </div>
            <p>© 2018 Lahna’s Chocolates - All Rights Reserved</p>
        </div>
      </div>
    );
  }
}

export default Footer;