import React from 'react';
import Layout from '../components/shared/Layout';
import * as styles from '../styles/home.module.scss';

const index = () => {
  return (
    <Layout>
      <h1 className={styles.text}>Home Page</h1>
    </Layout>
  );
};

export default index;
