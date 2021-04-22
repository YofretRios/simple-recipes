import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/shared/Layout';
import Recipes from '../components/shared/AllRecipes';

const Index = () => {
  return (
    <Layout>
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

        <Recipes />
      </main>
    </Layout>
  );
};

export default Index;
