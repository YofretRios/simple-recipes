import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/shared/Layout';
import * as styles from '../styles/home.module.scss';

const Index = () => {
  return (
    <Layout>
      <StaticImage
        src="../assets/images/recipes/recipe-1.jpeg"
        alt="test image"
        className={styles.staticImg}
        height={400}
        placeholder="tracedSVG"
      />
    </Layout>
  );
};

export default Index;
