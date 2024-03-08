import * as React from "react";

import Layout from "../../components/Layout";
import MediaRoll from "../../components/MediaRoll";

export default class MediaPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/rehearsal1.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #000, -0.5rem 0 0 #000",
              backgroundColor: "#000",
              color: "white",
              padding: "1rem",
            }}
          >
            Media
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <MediaRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
