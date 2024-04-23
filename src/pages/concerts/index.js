import * as React from 'react';

import Layout from '../../components/Layout';
import ConcertRoll from '../../components/ConcertRoll';

export default class ConcertIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/hero-banner-1.jpg')`,
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
            Concerts
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <ConcertRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
