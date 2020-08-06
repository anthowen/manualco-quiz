import React from 'react';

//import logo
import logo__footer from '../../../assets/images/logo_footer.png';

//import social media icons
import fb from '../../../assets/images/fb.png';
import tw from '../../../assets/images/tw.png';
import inn from '../../../assets/images/inn.png';

import './style.scss';

const Footer = () => {
  return (
    <footer>
      <img className="logo" src={logo__footer} alt="footer__logo" />

      <div className="footer__links">
        <div className="footer__link">
          <h3 className="footer__link__title">PRUDUCT</h3>
          <a href="/">Popular</a>
          <a href="/">Trending</a>
          <a href="/">Guided</a>
          <a href="/">Products</a>
        </div>

        <div className="footer__link company-parent">
          <h3 className="footer__link__title">COMPANY</h3>

          <a href="/">Press Releases</a>
          <a href="/">Mission</a>
          <a href="/">Strategy</a>
          <a href="/">About</a>
        </div>

        <div className="footer__link">
          <h3 className="footer__link__title">INFO</h3>

          <a href="/">Support</a>
          <a href="/">Custom Service</a>
          <a href="/">Get Started Guide</a>
          <a href="/">Products</a>
        </div>

        <div className="footer__link social-media">
          <h3 className="footer__link__title">FOLLOW US</h3>

          <div className="social_media_icons">
            <img src={fb} alt="facebook" />
            <img className="twt" src={tw} alt="twitter" />
            <img src={inn} alt="linkedIn" />
          </div>
        </div>
      </div>

      <hr />

      <h6 className="copyr">© 2019 Manual. All rights reserved.</h6>
    </footer>

    //&copy;
  );
};

export default Footer;
