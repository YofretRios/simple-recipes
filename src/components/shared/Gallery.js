import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const query = graphql`
  {
    allFile(filter: {extension: {ne: "svg"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 200
            height: 200
          )
        }
        name
      }
    }
  }
`;

const Gallery = () => {
  const data = useStaticQuery(query);

  const nodes = data.allFile.nodes;

  return (
    <div>
      <section>
        {nodes.map((image, index) => (
          <article key={index}>
            <p>{image.name}</p>
            <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt="Gallery Image" />
          </article>
        ))}
      </section>
    </div>
  );
};

export default Gallery;
