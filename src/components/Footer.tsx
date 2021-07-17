import React, {FunctionComponent} from 'react';

import FooterBG from '../img/footer-bg.jpg';

import './Footer.sass'

export const Footer: FunctionComponent = () => {
  return <footer className="SiteFooter">
    <img className="bg-image" src={FooterBG} />
  </footer>
}

export default Footer;
