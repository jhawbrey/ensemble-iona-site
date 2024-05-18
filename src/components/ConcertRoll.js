import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const Schedule = (props) => {
  const { edges: posts } = props.data.allMarkdownRemark;

  let concerts = [];
  let pastConcerts = [];

  const sortList = (data, direction) => {
    data.sort(
      (a, b) =>
        new Date(b.node.frontmatter.date) -
        new Date(a.node.frontmatter.date) * (direction === 'descend' ? -1 : 1)
    );
  };

  const scheduleList = (dataList) => (
    <div className="columns is-multiline">
      {dataList.map(({ node: post }) => (
        <div className="is-parent column is-12" key={post.id}>
          <article className="concert-list-item tile is-child box notification">
            <header className="columns">
              {post.frontmatter.featuredimage && (
                <div className="column is-4 featured-thumbnail">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                    }}
                  />
                </div>
              )}
              <div className="column is-8">
                <h2 className="post-meta">
                  <Link
                    className="title has-text-black is-size-4"
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
            </header>
          </article>
        </div>
      ))}
    </div>
  );

  for (var i = 0; i < posts.length; i++) {
    let cDate = new Date(posts[i].node.frontmatter.date);
    const today = new Date();
    if (cDate > today) {
      concerts.push(posts[i]);
    } else {
      pastConcerts.push(posts[i]);
    }
  }

  sortList(pastConcerts, 'descend');
  sortList(concerts, 'ascend');

  if (concerts.length === 0) {
    return (
      <div>
        <h2>Upcoming Events</h2>
        <div className="is-parent column">
          <article className="concert-list-item tile columns is-child box notification">
            <header className="columns">
              <p>Check back soon for upcoming concerts!</p>
            </header>
          </article>
        </div>
        <h2>Past Events</h2>
        {scheduleList(pastConcerts)}
      </div>
    );
  } else {
    return (
      <div>
        <h2>Upcoming Events</h2>
        {scheduleList(concerts)}
        <h2>Past Concerts</h2>
        {scheduleList(pastConcerts)}
      </div>
    );
  }
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
            sort: { frontmatter: { date: DESC } }
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
      render={(data, count) => <Schedule data={data} count={count} />}
    />
  );
}
