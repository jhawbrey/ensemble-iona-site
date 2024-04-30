import React from 'react';
import Layout from '../../components/Layout';

// eslint-disable-next-line
export default () => (
  <Layout>
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url('/img/hero-banner-4.jpg')`,
      }}
    >
      <h1
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: '0.5rem 0 0 #000, -0.5rem 0 0 #000',
          backgroundColor: '#000',
          color: 'white',
          padding: '1rem',
        }}
      >
        Contact
      </h1>
    </div>
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
