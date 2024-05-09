import * as React from 'react';

import logo from '../img/iona-logo.png';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import youtube from '../img/social/youtube.svg';

const Footer = () => {
  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div className="content has-text-centered">
        <img src={logo} alt="Ensemble Iona" style={{ width: '24em' }} />
      </div>
      <div className="content has-text-centered has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
          <div style={{ maxWidth: '100vw' }} className="columns">
            <div className="column is-12 social">
              <a title="facebook" href="https://www.facebook.com/EnsembleIona">
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a
                title="instagram"
                href="https://www.instagram.com/ensembleiona/"
              >
                <img
                  src={instagram}
                  alt="Instagram"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a title="youtube" href="https://www.youtube.com/@EnsembleIona">
                <img
                  src={youtube}
                  alt="Youtube"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
