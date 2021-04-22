/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: 'Simply Recipes',
    description: 'Nice and clean recipes site',
    author: 'Yofret Rios',
    person: {
      name: 'Jhon',
      age: 32
    },
    simpleData: ['item1', 'item2'],
    complexData: [
      {
        name: 'Jhon',
        age: 32
      },
      {
        name: 'Susan',
        age: 21
      }
    ]
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'jcs1lc0zcdye',
        accessToken: process.env.CONTENTFUL_API_KEY
      }
    },
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Montserrat',
              variants: ['400']
            },
            {
              family: 'Inconsolata',
              variants: ['400', '500', '600', '700']
            }
          ]
        }
      }
    }
  ]
};
