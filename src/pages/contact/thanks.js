import React from 'react';
import Layout from '../../components/Layout';
import FullWidthImage from '../../components/FullWidthImage';

const heroImage = { url: '../img/hero-banner-4.jpg' };

// eslint-disable-next-line
export default () => (
  <Layout>
    <FullWidthImage img={heroImage} title="Contact" height={400} />
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Thank you!</h1>
          <p>We have received your subscription request.</p>
        </div>
      </div>
    </section>
  </Layout>
);
