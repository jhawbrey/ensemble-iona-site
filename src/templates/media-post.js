import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content';

// eslint-disable-next-line
export const MediaPostTemplate = ({ content, contentComponent, url }) => {
  return (
    <div>
      <section className="section">
        <div className="container content">
          <iframe
            className="video"
            src={url}
            title={url}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope;"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

MediaPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  url: PropTypes.string,
};

const MediaPost = ({ data }) => {
  const { markdownRemark: post } = data;

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
          Media
        </h1>
      </div>
      <MediaPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        url={post.frontmatter.url}
      />
    </Layout>
  );
};

MediaPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    url: PropTypes.string,
  }),
};

export default MediaPost;

export const pageQuery = graphql`
  query MediaPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        url
      }
    }
  }
`;
