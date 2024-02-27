import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const GivePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                Give
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
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
