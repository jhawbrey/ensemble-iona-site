import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const ConcertRollTemplate = (props) => {
  const { edges: posts } = props.data.allMarkdownRemark;

  return (
    <div className="columns is-multiline">
      {posts &&
        posts.map(({ node: post }) => (
          <div className="is-parent column is-12" key={post.id}>
            <article
              className={`concert-list-item tile columns is-child box notification`}
            >
              {post?.frontmatter?.featuredimage && (
                <div className="is-child column is-4 featured-thumbnail">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      width:
                        post.frontmatter.featuredimage.childImageSharp
                          .gatsbyImageData.width,
                      height:
                        post.frontmatter.featuredimage.childImageSharp
                          .gatsbyImageData.height,
                    }}
                  />
                </div>
              )}
              <div className="is-child column is-8">
                <h2 className="post-meta">
                  <Link
                    className="title has-text-primary is-size-4"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <br />
                  <span className="subtitle is-size-5 is-block">
                    {post.frontmatter.date} - {post.frontmatter.time}
                  </span>
                </h2>
                <p>
                  {post.frontmatter.venue}
                  <br />
                  {post.frontmatter.address}
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    More Info →
                  </Link>
                </p>
              </div>
            </article>
          </div>
        ))}
    </div>
  );
};

ConcertRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default function ConcertRoll() {
  return (
    <StaticQuery
      query={graphql`
        query ConcertRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "concert-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  time
                  venue
                  address
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 300
                        quality: 100
                        layout: CONSTRAINED
                      )
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => (
        <ConcertRollTemplate data={data} count={count} />
      )}
    />
  );
}
