/**
 * Pull tags as a list
 * @param  {Array} recipes The recipes array
 * @return {Array}         The Tags from recipes object
 */
const getTags = (recipes) => {
  const recipeTags = [];

  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (recipeTags[tag]) {
        recipeTags[tag] = recipeTags[tag] += 1;
      } else {
        recipeTags[tag] = 1;
      }
    });
  });

  const orderedTags = Object.entries(recipeTags).sort((a, b) => {
    const [tagA] = a;
    const [tagB] = b;

    return tagA.localeCompare(tagB);
  });

  return orderedTags;
};

export default getTags;
