import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrap">
        <div className="footer"></div>
        <div className="social"></div>
      </div>
    );
  }
}

export default Footer;