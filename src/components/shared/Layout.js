import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

import './Layout';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
        {children}
      <Footer />
    </>
  );
};

export default Layout;
