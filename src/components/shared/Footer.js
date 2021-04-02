import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>SimplyRecipes</span>.
      </p>
      &nbsp;
      <a href="https://www.gatsbyjs.com/">Gatsby</a>
    </footer>
  );
};

export default Footer;
