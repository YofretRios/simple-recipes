import React from 'react';
import { Link } from 'gatsby';
import getTags from '../../utils/getTags';

const TagList = ({ recipes }) => {
  const tags = getTags(recipes);

  return (
    <div className="tag-container">
      <h4>Recipes</h4>

      <div className="tags-list">
        {tags.map((tag, index) => {
          const [text, value] = tag;

          return (
            <Link key={index} to={`/${text}`}>
              {text} ({value})
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagList;
