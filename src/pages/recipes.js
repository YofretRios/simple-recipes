import React from 'react';
import { useQuery } from 'react-query';
import Layout from '../components/shared/Layout';
import AllRecipes from '../components/shared/AllRecipes';
import SEO from '../components/shared/SEO';

const Recipes = () => {
  const { isFetching, data } = useQuery('breeds', async () => {
    const breeds = await fetch('https://dog.ceo/api/breeds/list/all');

    return breeds.json();
  });

  return (
    <Layout>
      <SEO title="Recipes" />
      <main className="page">
        <h1>All Recipes</h1>

        <AllRecipes />
      </main>
    </Layout>
  );
};

export default Recipes;
