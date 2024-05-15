import * as React from 'react';

import Layout from '../../components/Layout';
import ArtistRoll from '../../components/ArtistRoll';

export default class ArtistIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '#dcddd7 0.5rem 0px 0px, #dcddd7 -0.5rem 0px 0px',
              backgroundColor: '#dcddd7',
              color: 'black',
              lineHeight: '1',
              padding: '0.25em',
              width: '100%',
              textAlign: 'right',
            }}
          >
            Artists
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <ArtistRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
