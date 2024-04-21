import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import { getImage } from 'gatsby-plugin-image';
import FullWidthImage from '../components/FullWidthImage';

// eslint-disable-next-line
export const ConcertPostTemplate = ({
  content,
  image,
  contentComponent,
  description,
  title,
  date,
  time,
  venue,
  address,
  helmet,
}) => {
  const PostContent = contentComponent || Content;
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImage img={heroImage} />
      <section className="section">
        {helmet || ''}

        <div className="columns">
          <div className="column is-6 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
          </div>
        </div>
        <div className="container content">
          <div className="columns">
            <div className="column is-6 is-offset-1">
              <p>{description}</p>
              <PostContent content={content} />
            </div>
            <div className="column is-4 is-offset-1">
              <p>
                {date} - {time}
                <br />
                {venue}
                <br />
                {address}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

ConcertPostTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  tags: PropTypes.array,
  address: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  venue: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const ConcertPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ConcertPostTemplate
        image={post.frontmatter.image}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Concert">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        address={post.frontmatter.address}
        date={post.frontmatter.date}
        time={post.frontmatter.time}
        venue={post.frontmatter.venue}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

ConcertPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default ConcertPost;

export const pageQuery = graphql`
  query ConcertPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        time
        venue
        address
        title
        description
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
