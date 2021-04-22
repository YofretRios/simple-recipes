import React from 'react';
import Layout from '../components/shared/Layout';
import AllRecipes from '../components/shared/AllRecipes';
import SEO from '../components/shared/SEO';

const Recepies = () => {
  return (
    <Layout>
      <SEO title="Recepies" />
      <main className="page">
        <h1>All Recepies</h1>

        <AllRecipes />
      </main>
    </Layout>
  );
};

export default Recepies;
