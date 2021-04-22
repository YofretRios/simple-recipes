import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import TagsList from './TagsList';
import RecipesList from './RecipesList';

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        cookTime
        prepTime
        title
        id
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        alt
      }
    }
  }
`;

const AllRecipes = () => {
  const { allContentfulRecipe: { nodes } } = useStaticQuery(query);

  return (
    <section className="recipes-container">
      <TagsList recipes={nodes} />
      <RecipesList recipes={nodes} />
    </section>
  );
};

export default AllRecipes;
