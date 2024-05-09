import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

// eslint-disable-next-line
export const ArtistPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  name,
  voice,
  helmet,
  image,
  title,
}) => {
  const PostContent = contentComponent || Content;
  const heroImage = getImage(image) || image;

  return (
    <div>
      <section className="section">
        {helmet || ''}
        <div className="container content">
          <div className="columns">
            <div className="column is-6 is-offset-1">
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                {name}
                <span className="subtitle is-size-5 is-block">{voice}</span>
              </h1>
              <PostContent content={content} />
            </div>
            <div className="column is-4 is-offset-1">
              <GatsbyImage
                image={heroImage}
                alt={title}
                className="hero-image"
              />
            </div>
          </div>
          <div className="columns">
            <div className="column is-12 is-offset-1">
              <Link className="button" to="/about">
                Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

ArtistPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  name: PropTypes.string,
  voice: PropTypes.string,
  helmet: PropTypes.object,
};

const ArtistPost = ({ data }) => {
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
          Artists
        </h1>
      </div>
      <ArtistPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        image={post.frontmatter.image}
        helmet={
          <Helmet titleTemplate="%s | Artist">
            <title>{`${post.frontmatter.name}<br />${post.frontmatter.voice}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.name} - ${post.frontmatter.voice}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        name={post.frontmatter.name}
        voice={post.frontmatter.voice}
      />
    </Layout>
  );
};

ArtistPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default ArtistPost;

export const pageQuery = graphql`
  query ArtistPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        name
        voice
        tags
        image {
          childImageSharp {
            gatsbyImageData(width: 660, quality: 100, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
