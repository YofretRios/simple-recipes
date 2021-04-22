import React from 'react';
import Layout from '../components/shared/Layout';
import AllRecipes from '../components/shared/AllRecipes';

const Recepies = () => {
  return (
    <Layout>
      <main className="page">
        <h1>All Recepies</h1>

        <AllRecipes />
      </main>
    </Layout>
  );
};

export default Recepies;
