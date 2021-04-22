import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/shared/Layout';
import RecipesList from '../components/shared/RecipesList';

const Contact = ({ data }) => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article>
            <h3>Want To Get In Touch?</h3>
            <p>
              Four dollar toast biodiesel plaid salvia actually pickled banjo bespoke mlkshk intelligentsia edison bulb synth.
            </p>

            <p>
              Cardigan prism bicycle rights put a bird on it deep v.
            </p>

            <p>
              Hashtag swag health goth air plant, raclette listicle fingerstache cold-pressed fanny pack bicycle rights cardigan poke.
            </p>
          </article>

          <article>
            <form
              action="https://formspree.io/f/mpzkwbeb"
              method="POST"
              className="form contact-form"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>

              <div className="form-row">
                <label htmlFor="name">your email</label>
                <input type="email" name="email" id="email" />
              </div>

              <div className="form-row">
                <label htmlFor="name">message</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
              </div>

              <button type="submit" className="btn block">submit</button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this awesomesauce</h5>

          <RecipesList recipes={data?.allContentfulRecipe?.nodes} />
        </section>
      </main>
    </Layout>
  );
};

export default Contact;

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
