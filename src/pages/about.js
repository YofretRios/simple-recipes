import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link, graphql } from 'gatsby';
import Layout from '../components/shared/Layout';
import RecipesList from '../components/shared/RecipesList';
import SEO from '../components/shared/SEO';

const About = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>
              I'm baby coloring book poke taxidermy
            </h2>

            <p>
              Taxidermy forage glossier letterpress heirloom before they sold out you probably haven't heard of them banh mi biodiesel chia.
            </p>

            <p>
              Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.
            </p>

            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>

          <StaticImage
            src="../assets/images/about.jpeg"
            alt="pouring salt"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this awesomesauce</h5>

          <RecipesList recipes={data?.allContentfulRecipe?.nodes} />
        </section>
      </main>
    </Layout>
  );
};

export default About;

export const query = graphql`
  {
    allContentfulRecipe(filter: {featured: {eq: true}}) {
      nodes {
        cookTime
        prepTime
        title
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        alt
      }
    }
  }
`;
