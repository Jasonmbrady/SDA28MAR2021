/*
  Create a function to determine the max amount of
  servings that can be made based on a recipe and
  available ingredients.
  Input:
    - recipe object where keys are ingredient names
      and values are unit required (int)
    - available ingredients object where keys are ingredient
      names and values are unit available (int)
  Output:
    int (max servings)
  Side note (not needed for solution): Realistically, the values
  would be an object as well with the keys: unit (unit of measure), and amount.
  If the avaialable ingredient was stored in a different unit,
  a conversion table would be needed to convert units of measure.
*/

const recipe1 = {
    "organic fat": 99,
    "live squid": 1,
    "birds nest": 1,
    "fried flesh": 1,
    spicy: 5,
    "gourmet memes": 4200,
  };
  
  const available1 = {
    "organic fat": 990,
    "live squid": 1,
    "birds nest": 10,
    "fried flesh": 10,
    spicy: 50,
    "gourmet memes": 42000,
    sugar: 9001,
    spice: 5,
    "everything nice": 1,
    "triple point water": 5,
  };
  const expected1 = 1;
  // because only 1 live squid is available and that is the limiting ingredient
  
  // same as available1, except live squid has 10
  const available2 = { ...available1, ["live squid"]: 10 };
  const expected2 = 10;
  
  const available3 = { ...available1, ["live squid"]: 0 };
  const expected3 = 0;
  // Returns an int which is the number of servings that can be made.
  function getMaxServings(recipe, available) {
    // YOUR CODE HERE
    let servings = Infinity;

    for (const ingredient in recipe){
      const availAmount = available[ingredient];
      const needAmount = recipe[ingredient];

      if (available.hasOwnProperty(ingredient) === false || availAmount < needAmount){
        return 0;
      }
      const numServings = Math.floor(availAmount/needAmount);

      if (numServings < servings){
        servings = numServings;
      }
    }
    return servings;

  }
  
  console.log(getMaxServings(recipe1, available2));
