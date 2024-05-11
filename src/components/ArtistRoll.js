import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const ArtistRollTemplate = (props) => {
  const { edges: posts } = props.data.allMarkdownRemark;
  let soprano = [];
  let alto = [];
  let tenor = [];
  let bass = [];
  let leadership = [];

  const sortList = (data, direction) => {
    data.sort(
      (a, b) =>
        new Date(b.node.frontmatter.name) -
        new Date(a.node.frontmatter.name) * (direction === 'desc' ? -1 : 1)
    );
  };

  const peopleList = (dataList, role) => (
    <div className="columns is-multiline">
      {dataList.map(({ node: post }) => (
        <div className="is-parent column is-6" key={post.id}>
          <article
            className={`artist-list-item tile is-child box notification`}
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
                    className="title has-text-black is-size-4"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.name}
                  </Link>
                </h2>
                {role === 'leader'
                  ? post.frontmatter.title
                  : post.frontmatter.voice}
              </div>
            </header>
          </article>
        </div>
      ))}
    </div>
  );

  for (var i = 0; i < posts.length; i++) {
    if (posts[i].node.frontmatter.voice !== '') {
      if (posts[i].node.frontmatter.voice === 'Soprano') {
        soprano.push(posts[i]);
      } else if (posts[i].node.frontmatter.voice === 'Alto') {
        alto.push(posts[i]);
      } else if (posts[i].node.frontmatter.voice === 'Countertenor') {
        alto.push(posts[i]);
      } else if (posts[i].node.frontmatter.voice === 'Tenor') {
        tenor.push(posts[i]);
      } else if (posts[i].node.frontmatter.voice === 'Baritone') {
        bass.push(posts[i]);
      } else if (posts[i].node.frontmatter.voice === 'Bass') {
        bass.push(posts[i]);
      }
    }
    if (posts[i].node.frontmatter.title !== '') {
      leadership.push(posts[i]);
    }
  }

  sortList(soprano, 'Ascend');
  sortList(alto, 'Ascend');
  sortList(tenor, 'Ascend');
  sortList(bass, 'Ascend');
  sortList(leadership, 'ascend');

  return (
    <div>
      <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
        Artists
      </h2>
      {peopleList(soprano, 'artist')}
      {peopleList(alto, 'artist')}
      {peopleList(tenor, 'artist')}
      {peopleList(bass, 'artist')}
      <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
        Leadership
      </h2>
      {peopleList(leadership, 'leader')}
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
            sort: { frontmatter: { name: DESC } }
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
                  title
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
