import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import FullWidthImage from '../components/FullWidthImage';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

// eslint-disable-next-line
export const GivePageTemplate = ({
  image,
  title,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImage img={heroImage} title="Give" height="400" />
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
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
        image={post.frontmatter.image}
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
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
