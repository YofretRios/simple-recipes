import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/shared/Layout';
import getTags from '../utils/getTags';

const Tags = ({ data }) => {
  const tags = getTags(data.allContentfulRecipe.nodes);

  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {tags.map((tag, index) => {
            const [text, value] = tag;

            return (
              <Link key={index} to={`/${text}`} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default Tags;

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;
