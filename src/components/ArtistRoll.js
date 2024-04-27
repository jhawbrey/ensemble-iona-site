import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const ArtistRollTemplate = (props) => {
  const { edges: posts } = props.data.allMarkdownRemark;

  return (
    <div className="columns is-multiline">
      {posts &&
        posts.map(({ node: post }) => (
          <div className="is-parent column is-4" key={post.id}>
            <article
              className={`Artist-list-item tile is-child box notification`}
            >
              <header class="columns">
                {post?.frontmatter?.featuredimage && (
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${post.frontmatter.name}, ${post.frontmatter.voice}`,
                      width:
                        post.frontmatter.featuredimage.childImageSharp
                          .gatsbyImageData.width,
                      height:
                        post.frontmatter.featuredimage.childImageSharp
                          .gatsbyImageData.height,
                    }}
                  />
                )}
                <div class="column is-8">
                  <h2 className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.name}
                    </Link>
                  </h2>
                  {post.frontmatter.voice}
                </div>
              </header>
            </article>
          </div>
        ))}
    </div>
  );
};

ArtistRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default function ArtistRoll() {
  return (
    <StaticQuery
      query={graphql`
        query ArtistRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "artist-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  name
                  voice
                  templateKey
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 120
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
      render={(data, count) => <ArtistRollTemplate data={data} count={count} />}
    />
  );
}
