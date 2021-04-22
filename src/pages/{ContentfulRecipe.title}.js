import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {BsClockHistory, BsClock, BsPeople} from 'react-icons/bs';
import slugify from 'slugify';
import Layout from '../components/shared/Layout';

const RecipeTemplate = ({ data: { contentfulRecipe } }) => {
  const {
    title,
    cookTime,
    prepTime,
    servings,
    alt,
    description: { description },
    image,
    content: { tags, instructions, ingredients, tools }
  } = contentfulRecipe;
  const path = getImage(image);

  return (
    <Layout>
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage
              image={path}
              alt={alt}
              className="about-img"
            />

            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>

              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>Prep Time</h5>
                  <p>{prepTime} min.</p>
                </article>

                <article>
                  <BsClockHistory />
                  <h5>Cook Time</h5>
                  <p>{cookTime} min.</p>
                </article>

                <article>
                  <BsPeople />
                  <h5>Servings</h5>
                  <p>{servings}</p>
                </article>
              </div>

              <p className="recipe-tags">
                Tag: {tags.map((tag, index) => {
                  const slug = slugify(tag, { lower: true });

                  return (
                    <Link key={index} to={`/tags/${slug}`}>{tag}</Link>
                  );
                })}
              </p>
            </article>
          </section>

          <section className="recipe-content">
            <article>
              <h4>Instructions</h4>

              {instructions.map((inst, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>Step {index += 1}</p>
                      <div />
                    </header>
                    <p>{inst}</p>
                  </div>
                );
              })}
            </article>

            <article className="second-column">
              <div>
                <h4>Ingredients</h4>

                {ingredients.map((ing, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {ing}
                    </p>
                  );
                })}
              </div>
              <div>
                <h4>Tools</h4>

                {tools.map((tool, index) => {
                  return (
                    <p key={index} className="single-tool">
                      {tool}
                    </p>
                  );
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query getRecipe($title: String) {
    contentfulRecipe(title: {eq: $title}) {
      id
      cookTime
      prepTime
      servings
      title
      alt
      content {
        tags
        tools
        ingredients
        instructions
      }
      description {
        description
      }
      image {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;

export default RecipeTemplate;
