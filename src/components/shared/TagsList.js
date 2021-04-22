import React from 'react';
import { Link } from 'gatsby';
import slugify from 'slugify';
import getTags from '../../utils/getTags';

const TagList = ({ recipes }) => {
  const tags = getTags(recipes);

  return (
    <div className="tag-container">
      <h4>Recipes</h4>

      <div className="tags-list">
        {tags.map((tag, index) => {
          const [text, value] = tag;
          const slug = slugify(text, { lower: true });

          return (
            <Link key={index} to={`/tags/${slug}`}>
              {text} ({value})
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagList;
