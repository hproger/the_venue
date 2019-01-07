import * as React from 'react';

const Fade = require('react-reveal/Fade');

interface FooterProps {
}

const Footer: React.SFC<FooterProps> = (props) => {
  return (
      <footer className='bck_red footer_wrapper'>
        <Fade dealy={500}>
            <div className="font_righteous footer_logo_venue">The Venue</div>
            <div className="footer_copyright">The venue 2018. All rights reserved.</div>
        </Fade>
      </footer>
  );
};

export default Footer;