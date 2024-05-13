import * as React from 'react';
import Layout from '../../components/Layout';
import FullWidthImage from '../../components/FullWidthImage';
import ConcertRoll from '../../components/ConcertRoll';

const heroImage = { url: '../img/hero-banner-1.jpg' };

export default class ConcertIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <FullWidthImage img={heroImage} title="Concerts" height={400} />

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
