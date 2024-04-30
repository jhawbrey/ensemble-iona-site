import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

// eslint-disable-next-line
export const GivePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url('/img/hero-banner-2.jpg')`,
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
          Give
        </h1>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="content">
            <h1>Donate to Ensemble Iona</h1>
            <article
              className={`media-list-item tile is-child box notification`}
            >
              <PageContent className="content" content={content} />
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

GivePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const GivePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <GivePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

GivePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default GivePage;

export const givePageQuery = graphql`
  query GivePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
