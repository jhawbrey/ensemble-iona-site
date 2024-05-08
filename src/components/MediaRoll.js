import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

const MediaRollTemplate = (props) => {
  const { edges: posts } = props.data.allMarkdownRemark;

  return (
    <div className="columns is-multiline">
      {posts &&
        posts.map(({ node: post }) => (
          <div className="is-parent column is-12" key={post.id}>
            <article
              className={`media-list-item tile is-child box notification`}
            >
              <header>
                <iframe
                  className="video"
                  src={'https://www.youtube.com/embed/' + post.frontmatter.url}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </header>
            </article>
          </div>
        ))}
    </div>
  );
};

MediaRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default function MediaRoll() {
  return (
    <StaticQuery
      query={graphql`
        query MediaRollQuery {
          allMarkdownRemark(
            sort: { frontmatter: { date: DESC } }
            filter: { frontmatter: { templateKey: { eq: "media-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  url
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <MediaRollTemplate data={data} count={count} />}
    />
  );
}
