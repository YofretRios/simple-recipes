import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

import 'normalize.css';
import '../../styles/main.scss';

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
