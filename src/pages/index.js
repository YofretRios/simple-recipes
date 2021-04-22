import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/shared/Layout';
import AllRecipes from '../components/shared/AllRecipes';
import SEO from '../components/shared/SEO';

const Index = () => {
  return (
    <Layout>
      <SEO title="Home" description="This is the main page" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />

          <div className="hero-container">
            <div className="hero-text">
              <h1>Simply Recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>

        <AllRecipes />
      </main>
    </Layout>
  );
};

export default Index;
