import React from 'react';
import PropTypes from 'prop-types';
import { BlogPostTemplate } from '../../templates/concert-post';

const BlogPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags']);
  return (
    <BlogPostTemplate
      content={widgetFor('body')}
      title={entry.getIn(['data', 'title'])}
    />
  );
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default BlogPostPreview;
