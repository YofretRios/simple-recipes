import React from 'react';
import { graphql, Link } from 'gatsby';
import slugify from 'slugify';
import Layout from '../components/shared/Layout';
import SEO from '../components/shared/SEO';
import getTags from '../utils/getTags';

const Tags = ({ data }) => {
  const tags = getTags(data.allContentfulRecipe.nodes);

  return (
    <Layout>
      <SEO title="Tags" />
      <main className="page">
        <section className="tags-page">
          {tags.map((tag, index) => {
            const [text, value] = tag;
            const slug = slugify(text, { lower: true });

            return (
              <Link key={index} to={`/tags/${slug}`} className="tag">
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
