import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import slugify from 'slugify';

const Recipes = ({ recipes = []}) => {
  return (
    <div className="recipes-list">
      {recipes.map((recipe) => {
        const { id, title, image, prepTime, cookTime, alt } = recipe;
        const path = getImage(image);
        const slug = slugify(title, {lower: true });

        return (
          <Link to={`/${slug}`} className="recipe" key={id}>
            <GatsbyImage
              image={path}
              className="recipe-img"
              alt={alt}
            />
            <h5>{title}</h5>
            <p>Prep : {prepTime}min | Cook : {cookTime}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Recipes;
