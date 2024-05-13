import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';
import FullWidthImage from '../../components/FullWidthImage';
import MediaRoll from '../../components/MediaRoll';

const heroImage = { url: '../img/hero-banner-1.jpg' };

export default class MediaPage extends React.Component {
  render() {
    return (
      <Layout>
        <FullWidthImage img={heroImage} title="Media" height={400} />
        <section className="section">
          <div className="container">
            <div className="content">
              <h3 className="has-text-weight-semibold is-size-2">Videos</h3>
              <MediaRoll />
              <article
                className={`media-list-item tile is-child box notification`}
              >
                <header>
                  <p align="center">
                    Check out more videos on our Ensemble Iona{' '}
                    <Link
                      to="https://www.youtube.com/@EnsembleIona"
                      target="_blank"
                    >
                      YouTube channel
                    </Link>
                    !
                  </p>
                </header>
              </article>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
