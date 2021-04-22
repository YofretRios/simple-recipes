import React from 'react';
import { graphql } from 'gatsby';
import RecipesList from '../components/shared/RecipesList';
import Layout from '../components/shared/Layout';

const TagTemplate = ({ pageContext, data: { allContentfulRecipe: { nodes } } }) => {
  return (
    <Layout>
      <main className="page">
        <h1>{pageContext.tag}</h1>

        <div className="tag-recipes">
          <RecipesList recipes={nodes} />
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query getRecipeByTag($tag: String) {
    allContentfulRecipe(filter: {content: {tags: {eq: $tag}}}) {
      nodes {
        content {
          tags
        }
        title
        id
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        alt
      }
    }
  }
`;

export default TagTemplate;
