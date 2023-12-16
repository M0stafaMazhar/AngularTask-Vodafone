import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
 recipesList = [
      {
          "vegetarian": false,
          "vegan": false,
          "glutenFree": false,
          "dairyFree": true,
          "veryHealthy": false,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 6,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 11,
          "healthScore": 22,
          "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
          "license": "CC BY 3.0",
          "sourceName": "Foodista",
          "pricePerServing": 63.99,
          "extendedIngredients": [
              {
                  "id": 11819,
                  "aisle": "Produce",
                  "image": "red-chili.jpg",
                  "consistency": "SOLID",
                  "name": "chili pepper flakes",
                  "nameClean": "chili pepper",
                  "original": "1 teaspoon chili pepper flakes (optional)",
                  "originalName": "chili pepper flakes (optional)",
                  "amount": 1.0,
                  "unit": "teaspoon",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      }
                  }
              },
              {
                  "id": 1034053,
                  "aisle": "Oil, Vinegar, Salad Dressing",
                  "image": "olive-oil.jpg",
                  "consistency": "LIQUID",
                  "name": "extra virgin olive oil",
                  "nameClean": "extra virgin olive oil",
                  "original": "1/3 cup extra virgin olive oil",
                  "originalName": "extra virgin olive oil",
                  "amount": 0.33333334,
                  "unit": "cup",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 0.33333334,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 72.0,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 2012,
                  "aisle": "Spices and Seasonings",
                  "image": "ground-coriander.jpg",
                  "consistency": "SOLID",
                  "name": "coriander leaves",
                  "nameClean": "dried cilantro",
                  "original": "3 tablespoons coriander (cilantro) leaves, chopped",
                  "originalName": "coriander (cilantro) leaves, chopped",
                  "amount": 3.0,
                  "unit": "tablespoons",
                  "meta": [
                      "chopped",
                      "(cilantro)"
                  ],
                  "measures": {
                      "us": {
                          "amount": 3.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 3.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              },
              {
                  "id": 11215,
                  "aisle": "Produce",
                  "image": "garlic.png",
                  "consistency": "SOLID",
                  "name": "garlic",
                  "nameClean": "garlic",
                  "original": "garlic, minced",
                  "originalName": "garlic, minced",
                  "amount": 4.0,
                  "unit": "servings",
                  "meta": [
                      "minced"
                  ],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": 11020420,
                  "aisle": "Pasta and Rice",
                  "image": "shell-pasta.jpg",
                  "consistency": "SOLID",
                  "name": "shrimp",
                  "nameClean": "pasta shells",
                  "original": "20 jumbo shrimp, shells removed",
                  "originalName": "shrimp, shells removed",
                  "amount": 20.0,
                  "unit": "jumbo",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 20.0,
                          "unitShort": "jumbo",
                          "unitLong": "jumbos"
                      },
                      "metric": {
                          "amount": 20.0,
                          "unitShort": "jumbo",
                          "unitLong": "jumbos"
                      }
                  }
              },
              {
                  "id": 9156,
                  "aisle": "Produce",
                  "image": "zest-lemon.jpg",
                  "consistency": "SOLID",
                  "name": "lemon zest",
                  "nameClean": "lemon peel",
                  "original": "1 tablespoon lemon zest",
                  "originalName": "lemon zest",
                  "amount": 1.0,
                  "unit": "tablespoon",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "Tbsp",
                          "unitLong": "Tbsp"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "Tbsp",
                          "unitLong": "Tbsp"
                      }
                  }
              },
              {
                  "id": 11297,
                  "aisle": "Spices and Seasonings",
                  "image": "parsley.jpg",
                  "consistency": "SOLID",
                  "name": "parsley",
                  "nameClean": "parsley",
                  "original": "3 tablespoons chopped parsley",
                  "originalName": "chopped parsley",
                  "amount": 3.0,
                  "unit": "tablespoons",
                  "meta": [
                      "chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 3.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 3.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              }
          ],
          "id": 645721,
          "title": "Grilled Garlicky-Herbed Shrimp",
          "readyInMinutes": 45,
          "servings": 4,
          "sourceUrl": "http://www.foodista.com/recipe/XVTYTLSS/grilled-garlicky-herbed-shrimp",
          "image": "https://spoonacular.com/recipeImages/645721-556x370.jpg",
          "imageType": "jpg",
          "summary": "Grilled Garlicky-Herbed Shrimp takes around <b>45 minutes</b> from beginning to end. For <b>64 cents per serving</b>, you get a hor d'oeuvre that serves 4. Watching your figure? This dairy free recipe has <b>189 calories</b>, <b>1g of protein</b>, and <b>18g of fat</b> per serving. 11 person were glad they tried this recipe. A mixture of chili pepper flakes, garlic, lemon zest, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is perfect for <b>The Fourth Of July</b>. It is brought to you by Foodista. With a spoonacular <b>score of 52%</b>, this dish is solid. Similar recipes are <a href=\"https://spoonacular.com/recipes/grilled-garlicky-herbed-shrimp-1352351\">Grilled Garlicky-Herbed Shrimp</a>, <a href=\"https://spoonacular.com/recipes/grilled-garlicky-herbed-shrimp-1364413\">Grilled Garlicky-Herbed Shrimp</a>, and <a href=\"https://spoonacular.com/recipes/grilled-garlicky-herbed-shrimp-1267345\">Grilled Garlicky-Herbed Shrimp</a>.",
          "cuisines": [],
          "dishTypes": [
              "antipasti",
              "starter",
              "snack",
              "appetizer",
              "antipasto",
              "hor d'oeuvre"
          ],
          "diets": [
              "dairy free"
          ],
          "occasions": [
              "father's day",
              "4th of july",
              "summer"
          ],
          "instructions": "<ol><li>Combine all ingredients except shrimp in a large bowl. Add shrimp and toss to combine making sure all parts of the shrimp is coated in the marinade. Refrigerate 4 hours or overnight. Preheat grill on medium heat. Place shrimp on grill and cook, turning once, until pink  about 5 minutes.</li><li>The Culinary Chases Note: Want a Mediterranean feel?  Serve the shrimp with a roasted red pepper salad. Enjoy!</li></ol>",
          "analyzedInstructions": [
              {
                  "name": "",
                  "steps": [
                      {
                          "number": 1,
                          "step": "Combine all ingredients except shrimp in a large bowl.",
                          "ingredients": [
                              {
                                  "id": 15270,
                                  "name": "shrimp",
                                  "localizedName": "shrimp",
                                  "image": "shrimp.png"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404783,
                                  "name": "bowl",
                                  "localizedName": "bowl",
                                  "image": "bowl.jpg"
                              }
                          ]
                      },
                      {
                          "number": 2,
                          "step": "Add shrimp and toss to combine making sure all parts of the shrimp is coated in the marinade. Refrigerate 4 hours or overnight. Preheat grill on medium heat.",
                          "ingredients": [
                              {
                                  "id": 0,
                                  "name": "marinade",
                                  "localizedName": "marinade",
                                  "image": "seasoning.png"
                              },
                              {
                                  "id": 15270,
                                  "name": "shrimp",
                                  "localizedName": "shrimp",
                                  "image": "shrimp.png"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404706,
                                  "name": "grill",
                                  "localizedName": "grill",
                                  "image": "grill.jpg"
                              }
                          ],
                          "length": {
                              "number": 240,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 3,
                          "step": "Place shrimp on grill and cook, turning once, until pink  about 5 minutes.The Culinary Chases Note: Want a Mediterranean feel?",
                          "ingredients": [
                              {
                                  "id": 15270,
                                  "name": "shrimp",
                                  "localizedName": "shrimp",
                                  "image": "shrimp.png"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404706,
                                  "name": "grill",
                                  "localizedName": "grill",
                                  "image": "grill.jpg"
                              }
                          ],
                          "length": {
                              "number": 5,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 4,
                          "step": "Serve the shrimp with a roasted red pepper salad. Enjoy!",
                          "ingredients": [
                              {
                                  "id": 11916,
                                  "name": "roasted red peppers",
                                  "localizedName": "roasted red peppers",
                                  "image": "red-pepper.jpg"
                              },
                              {
                                  "id": 15270,
                                  "name": "shrimp",
                                  "localizedName": "shrimp",
                                  "image": "shrimp.png"
                              }
                          ],
                          "equipment": []
                      }
                  ]
              }
          ],
          "originalId": null,
          "spoonacularScore": 79.91403198242188,
          "spoonacularSourceUrl": "https://spoonacular.com/grilled-garlicky-herbed-shrimp-645721"
      },
      {
          "vegetarian": true,
          "vegan": false,
          "glutenFree": true,
          "dairyFree": true,
          "veryHealthy": true,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 6,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 3,
          "healthScore": 67,
          "creditsText": "foodista.com",
          "sourceName": "foodista.com",
          "pricePerServing": 454.22,
          "extendedIngredients": [
              {
                  "id": 2004,
                  "aisle": "Spices and Seasonings",
                  "image": "bay-leaves.jpg",
                  "consistency": "SOLID",
                  "name": "bay leaves- broken",
                  "nameClean": "bay leaves",
                  "original": "4 bay leaves- broken",
                  "originalName": "bay leaves- broken",
                  "amount": 4.0,
                  "unit": "",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 16058,
                  "aisle": "Canned and Jarred",
                  "image": "chickpeas.png",
                  "consistency": "SOLID",
                  "name": "chickpeas",
                  "nameClean": "canned chickpeas",
                  "original": "2 15 ounces cans chickpeas, drained and rinsed",
                  "originalName": "chickpeas, drained and rinsed",
                  "amount": 30.0,
                  "unit": "ounces",
                  "meta": [
                      "drained and rinsed",
                      "canned"
                  ],
                  "measures": {
                      "us": {
                          "amount": 30.0,
                          "unitShort": "oz",
                          "unitLong": "ounces"
                      },
                      "metric": {
                          "amount": 850.486,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 6194,
                  "aisle": "Canned and Jarred",
                  "image": "chicken-broth.png",
                  "consistency": "LIQUID",
                  "name": "chicken broth",
                  "nameClean": "chicken broth",
                  "original": "5 cups chicken broth",
                  "originalName": "chicken broth",
                  "amount": 5.0,
                  "unit": "cups",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 5.0,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 1.175,
                          "unitShort": "l",
                          "unitLong": "liters"
                      }
                  }
              },
              {
                  "id": 1032009,
                  "aisle": "Spices and Seasonings",
                  "image": "red-pepper-flakes.jpg",
                  "consistency": "SOLID",
                  "name": "pepper",
                  "nameClean": "red pepper flakes",
                  "original": "1 teaspoon crushed red pepper",
                  "originalName": "crushed red pepper",
                  "amount": 1.0,
                  "unit": "teaspoon",
                  "meta": [
                      "red",
                      "crushed"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      }
                  }
              },
              {
                  "id": 11215,
                  "aisle": "Produce",
                  "image": "garlic.png",
                  "consistency": "SOLID",
                  "name": "garlic",
                  "nameClean": "garlic",
                  "original": "1 Clove garlic, chopped",
                  "originalName": "garlic, chopped",
                  "amount": 1.0,
                  "unit": "Clove",
                  "meta": [
                      "chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "Clove",
                          "unitLong": "Clove"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "Clove",
                          "unitLong": "Clove"
                      }
                  }
              },
              {
                  "id": 10211215,
                  "aisle": "Produce",
                  "image": "garlic.jpg",
                  "consistency": "SOLID",
                  "name": "garlic cloves",
                  "nameClean": "whole garlic cloves",
                  "original": "3 Minced garlic cloves",
                  "originalName": "Minced garlic cloves",
                  "amount": 3.0,
                  "unit": "",
                  "meta": [
                      "minced"
                  ],
                  "measures": {
                      "us": {
                          "amount": 3.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 3.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 11979,
                  "aisle": "Canned and Jarred",
                  "image": "jalapeno-pepper.png",
                  "consistency": "SOLID",
                  "name": "jalapeno chili",
                  "nameClean": "jalapeno pepper",
                  "original": "1 Fresno or Jalapeno chili seeded, stemmed& minced",
                  "originalName": "Fresno or Jalapeno chili seeded, stemmed& minced",
                  "amount": 1.0,
                  "unit": "",
                  "meta": [
                      "minced",
                      "seeded"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 9152,
                  "aisle": "Produce",
                  "image": "lemon-juice.jpg",
                  "consistency": "LIQUID",
                  "name": "lemon zest",
                  "nameClean": "lemon juice",
                  "original": "4 tablespoons fresh lemon juice& 1 tsp lemon zest",
                  "originalName": "fresh lemon juice& 1 tsp lemon zest",
                  "amount": 4.0,
                  "unit": "tablespoons",
                  "meta": [
                      "fresh"
                  ],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              },
              {
                  "id": 4053,
                  "aisle": "Oil, Vinegar, Salad Dressing",
                  "image": "olive-oil.jpg",
                  "consistency": "SOLID",
                  "name": "olive oil",
                  "nameClean": "olive oil",
                  "original": "1 tablespoon Olive oil",
                  "originalName": "Olive oil",
                  "amount": 1.0,
                  "unit": "tablespoon",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "Tbsp",
                          "unitLong": "Tbsp"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "Tbsp",
                          "unitLong": "Tbsp"
                      }
                  }
              },
              {
                  "id": 2027,
                  "aisle": "Spices and Seasonings",
                  "image": "oregano.jpg",
                  "consistency": "SOLID",
                  "name": "oregano",
                  "nameClean": "oregano",
                  "original": "1 1/2 teaspoons dried oregano, crumbled",
                  "originalName": "dried oregano, crumbled",
                  "amount": 1.5,
                  "unit": "teaspoons",
                  "meta": [
                      "dried",
                      "crumbled"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.5,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      },
                      "metric": {
                          "amount": 1.5,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      }
                  }
              },
              {
                  "id": 1102047,
                  "aisle": "Spices and Seasonings",
                  "image": "salt-and-pepper.jpg",
                  "consistency": "SOLID",
                  "name": "salt& pepper",
                  "nameClean": "salt and pepper",
                  "original": "Salt& Pepper",
                  "originalName": "Salt& Pepper",
                  "amount": 4.0,
                  "unit": "servings",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": 11677,
                  "aisle": "Produce",
                  "image": "shallots.jpg",
                  "consistency": "SOLID",
                  "name": "shallot",
                  "nameClean": "shallot",
                  "original": "1 Shallot, chopped",
                  "originalName": "Shallot, chopped",
                  "amount": 1.0,
                  "unit": "",
                  "meta": [
                      "chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 10011457,
                  "aisle": "Produce",
                  "image": "spinach.jpg",
                  "consistency": "SOLID",
                  "name": "spinach loosely",
                  "nameClean": "spinach",
                  "original": "2 cups fresh chard or spinach loosely chopped",
                  "originalName": "fresh chard or spinach loosely chopped",
                  "amount": 2.0,
                  "unit": "cups",
                  "meta": [
                      "fresh",
                      "chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 60.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 11955,
                  "aisle": "Canned and Jarred",
                  "image": "sundried-tomatoes.jpg",
                  "consistency": "SOLID",
                  "name": "oven tomatoes",
                  "nameClean": "sun dried tomatoes",
                  "original": "1 1/2 cups Oven Dried tomatoes coarsely chopped,",
                  "originalName": "Oven Dried tomatoes coarsely chopped",
                  "amount": 1.5,
                  "unit": "cups",
                  "meta": [
                      "dried",
                      "coarsely chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.5,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 165.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              }
          ],
          "id": 649560,
          "title": "Lemon Chickpea & Tomato Stew",
          "readyInMinutes": 45,
          "servings": 4,
          "sourceUrl": "http://www.foodista.com/recipe/X8GTKS62/lemon-chickpea-tomato-stew",
          "image": "https://spoonacular.com/recipeImages/649560-556x370.jpg",
          "imageType": "jpg",
          "summary": "If you want to add more <b>gluten free, dairy free, and lacto ovo vegetarian</b> recipes to your recipe box, Lemon Chickpea & Tomato Stew might be a recipe you should try. For <b>$4.54 per serving</b>, you get a main course that serves 4. One portion of this dish contains approximately <b>19g of protein</b>, <b>10g of fat</b>, and a total of <b>363 calories</b>. This recipe from Foodista requires jalapeno chili, garlic cloves, olive oil, and garlic. 3 people have tried and liked this recipe. <b>Autumn</b> will be even more special with this recipe. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Overall, this recipe earns a <b>tremendous spoonacular score of 86%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/spinach-tomato-chickpea-stew-615972\">Spinach, Tomato & Chickpea Stew</a>, <a href=\"https://spoonacular.com/recipes/moroccan-roasted-tomato-and-chickpea-stew-811835\">Moroccan roasted tomato and chickpea stew</a>, and <a href=\"https://spoonacular.com/recipes/lemony-chickpea-and-oven-dried-tomato-stew-31923\">Lemony Chickpean And Oven-dried Tomato Stew</a>.",
          "cuisines": [],
          "dishTypes": [
              "lunch",
              "soup",
              "main course",
              "main dish",
              "dinner"
          ],
          "diets": [
              "gluten free",
              "dairy free",
              "lacto ovo vegetarian"
          ],
          "occasions": [
              "fall",
              "winter"
          ],
          "instructions": "<ol><li>In a large saucepan, heat the olive oil.</li><li>Add the shallot & garlic and cook over medium heat, stirring, until soft, about 5 minutes.</li><li>Add the chickpeas, chile, oregano, bay leaf and crushed red pepper and season with salt & pepper.</li><li>Cook, stirring frequently, until the herbs are fragrant and the chickpeas are hot and starting to brown- (careful they sometimes jump out of the pan), about 5-7 minutes.</li><li>Add the broth, lemon zest, lemon juice and bring to a boil.</li><li>Simmer the stew over moderately low heat until the broth is reduced by half, about 20 minutes.</li><li>Stir in the Oven-Dried Tomatoes, garlic and chard and simmer for 5 minutes.</li><li>Discard the bay leaf.</li><li>Season the stew with salt & pepper and serve with warm crusty bread to soak up the juices.</li></ol>",
          "analyzedInstructions": [
              {
                  "name": "",
                  "steps": [
                      {
                          "number": 1,
                          "step": "In a large saucepan, heat the olive oil.",
                          "ingredients": [
                              {
                                  "id": 4053,
                                  "name": "olive oil",
                                  "localizedName": "olive oil",
                                  "image": "olive-oil.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404669,
                                  "name": "sauce pan",
                                  "localizedName": "sauce pan",
                                  "image": "sauce-pan.jpg"
                              }
                          ]
                      },
                      {
                          "number": 2,
                          "step": "Add the shallot & garlic and cook over medium heat, stirring, until soft, about 5 minutes.",
                          "ingredients": [
                              {
                                  "id": 11677,
                                  "name": "shallot",
                                  "localizedName": "shallot",
                                  "image": "shallots.jpg"
                              },
                              {
                                  "id": 11215,
                                  "name": "garlic",
                                  "localizedName": "garlic",
                                  "image": "garlic.png"
                              }
                          ],
                          "equipment": [],
                          "length": {
                              "number": 5,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 3,
                          "step": "Add the chickpeas, chile, oregano, bay leaf and crushed red pepper and season with salt & pepper.Cook, stirring frequently, until the herbs are fragrant and the chickpeas are hot and starting to brown- (careful they sometimes jump out of the pan), about 5-7 minutes.",
                          "ingredients": [
                              {
                                  "id": 1032009,
                                  "name": "red pepper flakes",
                                  "localizedName": "red pepper flakes",
                                  "image": "red-pepper-flakes.jpg"
                              },
                              {
                                  "id": 1102047,
                                  "name": "salt and pepper",
                                  "localizedName": "salt and pepper",
                                  "image": "salt-and-pepper.jpg"
                              },
                              {
                                  "id": 16057,
                                  "name": "chickpeas",
                                  "localizedName": "chickpeas",
                                  "image": "chickpeas.png"
                              },
                              {
                                  "id": 2004,
                                  "name": "bay leaves",
                                  "localizedName": "bay leaves",
                                  "image": "bay-leaves.jpg"
                              },
                              {
                                  "id": 2027,
                                  "name": "oregano",
                                  "localizedName": "oregano",
                                  "image": "oregano.jpg"
                              },
                              {
                                  "id": 11819,
                                  "name": "chili pepper",
                                  "localizedName": "chili pepper",
                                  "image": "red-chili.jpg"
                              },
                              {
                                  "id": 1002044,
                                  "name": "herbs",
                                  "localizedName": "herbs",
                                  "image": "mixed-fresh-herbs.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404645,
                                  "name": "frying pan",
                                  "localizedName": "frying pan",
                                  "image": "pan.png"
                              }
                          ],
                          "length": {
                              "number": 7,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 4,
                          "step": "Add the broth, lemon zest, lemon juice and bring to a boil.Simmer the stew over moderately low heat until the broth is reduced by half, about 20 minutes.Stir in the Oven-Dried Tomatoes, garlic and chard and simmer for 5 minutes.Discard the bay leaf.Season the stew with salt & pepper and serve with warm crusty bread to soak up the juices.",
                          "ingredients": [
                              {
                                  "id": 11955,
                                  "name": "sun dried tomatoes",
                                  "localizedName": "sun dried tomatoes",
                                  "image": "sundried-tomatoes.jpg"
                              },
                              {
                                  "id": 1102047,
                                  "name": "salt and pepper",
                                  "localizedName": "salt and pepper",
                                  "image": "salt-and-pepper.jpg"
                              },
                              {
                                  "id": 10018029,
                                  "name": "crusty bread",
                                  "localizedName": "crusty bread",
                                  "image": "crusty-bread.jpg"
                              },
                              {
                                  "id": 9152,
                                  "name": "lemon juice",
                                  "localizedName": "lemon juice",
                                  "image": "lemon-juice.jpg"
                              },
                              {
                                  "id": 9156,
                                  "name": "lemon zest",
                                  "localizedName": "lemon zest",
                                  "image": "zest-lemon.jpg"
                              },
                              {
                                  "id": 2004,
                                  "name": "bay leaves",
                                  "localizedName": "bay leaves",
                                  "image": "bay-leaves.jpg"
                              },
                              {
                                  "id": 11215,
                                  "name": "garlic",
                                  "localizedName": "garlic",
                                  "image": "garlic.png"
                              },
                              {
                                  "id": 1006615,
                                  "name": "broth",
                                  "localizedName": "broth",
                                  "image": "chicken-broth.png"
                              },
                              {
                                  "id": 11147,
                                  "name": "swiss chard",
                                  "localizedName": "swiss chard",
                                  "image": "swiss-chard.jpg"
                              },
                              {
                                  "id": 0,
                                  "name": "stew",
                                  "localizedName": "stew",
                                  "image": ""
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404784,
                                  "name": "oven",
                                  "localizedName": "oven",
                                  "image": "oven.jpg"
                              }
                          ],
                          "length": {
                              "number": 25,
                              "unit": "minutes"
                          }
                      }
                  ]
              }
          ],
          "originalId": null,
          "spoonacularScore": 90.65103149414062,
          "spoonacularSourceUrl": "https://spoonacular.com/lemon-chickpea-tomato-stew-649560"
      },
      {
          "vegetarian": true,
          "vegan": true,
          "glutenFree": true,
          "dairyFree": true,
          "veryHealthy": false,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 2,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 2,
          "healthScore": 8,
          "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
          "license": "CC BY 3.0",
          "sourceName": "Foodista",
          "pricePerServing": 21.14,
          "extendedIngredients": [
              {
                  "id": 16058,
                  "aisle": "Canned and Jarred",
                  "image": "chickpeas.png",
                  "consistency": "SOLID",
                  "name": "garbanzo beans",
                  "nameClean": "canned chickpeas",
                  "original": "1 (15 oz) can garbanzo beans, drained and rinsed",
                  "originalName": "garbanzo beans, drained and rinsed",
                  "amount": 15.0,
                  "unit": "oz",
                  "meta": [
                      "drained and rinsed",
                      "canned"
                  ],
                  "measures": {
                      "us": {
                          "amount": 15.0,
                          "unitShort": "oz",
                          "unitLong": "ounces"
                      },
                      "metric": {
                          "amount": 425.243,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 12698,
                  "aisle": "Health Foods",
                  "image": "tahini-paste.png",
                  "consistency": "SOLID",
                  "name": "tahini",
                  "nameClean": "tahini",
                  "original": "1 Tbsp. tahini",
                  "originalName": "tahini",
                  "amount": 1.0,
                  "unit": "Tbsp",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "Tbsp",
                          "unitLong": "Tbsp"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "Tbsp",
                          "unitLong": "Tbsp"
                      }
                  }
              },
              {
                  "id": 9152,
                  "aisle": "Produce",
                  "image": "lemon-juice.jpg",
                  "consistency": "LIQUID",
                  "name": "lemon juice",
                  "nameClean": "lemon juice",
                  "original": "2 Tbsp. lemon juice",
                  "originalName": "lemon juice",
                  "amount": 2.0,
                  "unit": "Tbsp",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              },
              {
                  "id": 10211215,
                  "aisle": "Produce",
                  "image": "garlic.jpg",
                  "consistency": "SOLID",
                  "name": "garlic cloves",
                  "nameClean": "whole garlic cloves",
                  "original": "2 garlic cloves, minced",
                  "originalName": "garlic cloves, minced",
                  "amount": 2.0,
                  "unit": "",
                  "meta": [
                      "minced"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 2047,
                  "aisle": "Spices and Seasonings",
                  "image": "salt.jpg",
                  "consistency": "SOLID",
                  "name": "salt",
                  "nameClean": "table salt",
                  "original": "1/4 tsp. salt (I used a little less)",
                  "originalName": "salt (I used a little less)",
                  "amount": 0.25,
                  "unit": "tsp",
                  "meta": [
                      "(I used a little less)"
                  ],
                  "measures": {
                      "us": {
                          "amount": 0.25,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      },
                      "metric": {
                          "amount": 0.25,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      }
                  }
              },
              {
                  "id": 2031,
                  "aisle": "Spices and Seasonings",
                  "image": "chili-powder.jpg",
                  "consistency": "SOLID",
                  "name": "cayenne pepper",
                  "nameClean": "ground cayenne pepper",
                  "original": "pinch cayenne pepper",
                  "originalName": "pinch cayenne pepper",
                  "amount": 1.0,
                  "unit": "pinch",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "pinch",
                          "unitLong": "pinch"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "pinch",
                          "unitLong": "pinch"
                      }
                  }
              },
              {
                  "id": 14412,
                  "aisle": "Beverages",
                  "image": "water.png",
                  "consistency": "LIQUID",
                  "name": "water",
                  "nameClean": "water",
                  "original": "1/4 c. water (more or less depending on texture you want)",
                  "originalName": "water (more or less depending on texture you want)",
                  "amount": 0.25,
                  "unit": "c",
                  "meta": [
                      "(more or less depending on texture you want)"
                  ],
                  "measures": {
                      "us": {
                          "amount": 0.25,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 59.147,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 4053,
                  "aisle": "Oil, Vinegar, Salad Dressing",
                  "image": "olive-oil.jpg",
                  "consistency": "SOLID",
                  "name": "olive oil",
                  "nameClean": "olive oil",
                  "original": "1 Tbsp. olive oil (more or less depending on texture you want)",
                  "originalName": "olive oil (more or less depending on texture you want)",
                  "amount": 1.0,
                  "unit": "Tbsp",
                  "meta": [
                      "(more or less depending on texture you want)"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "Tbsp",
                          "unitLong": "Tbsp"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "Tbsp",
                          "unitLong": "Tbsp"
                      }
                  }
              },
              {
                  "id": 11165,
                  "aisle": "Spices and Seasonings",
                  "image": "cilantro.png",
                  "consistency": "SOLID",
                  "name": "cilantro",
                  "nameClean": "cilantro",
                  "original": "1/4 c. cilantro (or more depending on preference) + 3 extra for garnish",
                  "originalName": "cilantro (or more depending on preference) + 3 extra for garnish",
                  "amount": 0.25,
                  "unit": "c",
                  "meta": [
                      "for garnish",
                      "( depending on preference)"
                  ],
                  "measures": {
                      "us": {
                          "amount": 0.25,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              }
          ],
          "id": 639410,
          "title": "Cilantro Hummus",
          "readyInMinutes": 45,
          "servings": 8,
          "sourceUrl": "https://www.foodista.com/recipe/JMRM47TD/cilantro-hummus",
          "image": "https://spoonacular.com/recipeImages/639410-556x370.jpg",
          "imageType": "jpg",
          "summary": "Need a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan hor d'oeuvre</b>? Cilantro Hummus could be an amazing recipe to try. This recipe makes 8 servings with <b>75 calories</b>, <b>3g of protein</b>, and <b>4g of fat</b> each. For <b>21 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. If you have salt, tahini, olive oil, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around <b>45 minutes</b>. 2 people found this recipe to be yummy and satisfying. It is a <b>very affordable</b> recipe for fans of middl eastern food. It is brought to you by Foodista. With a spoonacular <b>score of 49%</b>, this dish is solid. Similar recipes include <a href=\"https://spoonacular.com/recipes/cilantro-hummus-1367317\">Cilantro Hummus</a>, <a href=\"https://spoonacular.com/recipes/avocado-cilantro-hummus-521604\">Avocado Cilantro Hummus</a>, and <a href=\"https://spoonacular.com/recipes/avocado-cilantro-hummus-533355\">Avocado Cilantro Hummus</a>.",
          "cuisines": [
              "Middle Eastern"
          ],
          "dishTypes": [
              "antipasti",
              "condiment",
              "starter",
              "snack",
              "appetizer",
              "dip",
              "antipasto",
              "hor d'oeuvre",
              "spread"
          ],
          "diets": [
              "gluten free",
              "dairy free",
              "lacto ovo vegetarian",
              "vegan"
          ],
          "occasions": [],
          "instructions": "In your food processor, add the garbanzo beans, tahini, lemon juice, garlic, salt and cayenne. Turn on and pulse until mixture is fairly smooth.\nStart processor running steady and slowly pour in the water, stopping to test the texture, then adding more water if you'd like.\nAgain, with motor running, slowly pour in the olive oil, adding more if you'd like.\nStop processor, taste and adjust seasonings, pulse and repeat taste testing until you have it the way you like it.\nAdd cilantro and pulse a few times.\nSpoon out into a bowl and garnish with a drizzle of olive oil and cilantro if desired. Serve immediately, or cover and refrigerate.\nServe as a dip, spread or however you'd like!",
          "analyzedInstructions": [
              {
                  "name": "",
                  "steps": [
                      {
                          "number": 1,
                          "step": "In your food processor, add the garbanzo beans, tahini, lemon juice, garlic, salt and cayenne. Turn on and pulse until mixture is fairly smooth.",
                          "ingredients": [
                              {
                                  "id": 16057,
                                  "name": "chickpeas",
                                  "localizedName": "chickpeas",
                                  "image": "chickpeas.png"
                              },
                              {
                                  "id": 9152,
                                  "name": "lemon juice",
                                  "localizedName": "lemon juice",
                                  "image": "lemon-juice.jpg"
                              },
                              {
                                  "id": 2031,
                                  "name": "ground cayenne pepper",
                                  "localizedName": "ground cayenne pepper",
                                  "image": "chili-powder.jpg"
                              },
                              {
                                  "id": 11215,
                                  "name": "garlic",
                                  "localizedName": "garlic",
                                  "image": "garlic.png"
                              },
                              {
                                  "id": 12698,
                                  "name": "tahini",
                                  "localizedName": "tahini",
                                  "image": "tahini-paste.png"
                              },
                              {
                                  "id": 2047,
                                  "name": "salt",
                                  "localizedName": "salt",
                                  "image": "salt.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404771,
                                  "name": "food processor",
                                  "localizedName": "food processor",
                                  "image": "food-processor.png"
                              }
                          ]
                      },
                      {
                          "number": 2,
                          "step": "Start processor running steady and slowly pour in the water, stopping to test the texture, then adding more water if you'd like.",
                          "ingredients": [
                              {
                                  "id": 14412,
                                  "name": "water",
                                  "localizedName": "water",
                                  "image": "water.png"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 3,
                          "step": "Again, with motor running, slowly pour in the olive oil, adding more if you'd like.",
                          "ingredients": [
                              {
                                  "id": 4053,
                                  "name": "olive oil",
                                  "localizedName": "olive oil",
                                  "image": "olive-oil.jpg"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 4,
                          "step": "Stop processor, taste and adjust seasonings, pulse and repeat taste testing until you have it the way you like it.",
                          "ingredients": [
                              {
                                  "id": 1042027,
                                  "name": "seasoning",
                                  "localizedName": "seasoning",
                                  "image": "seasoning.png"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 5,
                          "step": "Add cilantro and pulse a few times.",
                          "ingredients": [
                              {
                                  "id": 11165,
                                  "name": "cilantro",
                                  "localizedName": "cilantro",
                                  "image": "cilantro.png"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 6,
                          "step": "Spoon out into a bowl and garnish with a drizzle of olive oil and cilantro if desired.",
                          "ingredients": [
                              {
                                  "id": 4053,
                                  "name": "olive oil",
                                  "localizedName": "olive oil",
                                  "image": "olive-oil.jpg"
                              },
                              {
                                  "id": 11165,
                                  "name": "cilantro",
                                  "localizedName": "cilantro",
                                  "image": "cilantro.png"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404783,
                                  "name": "bowl",
                                  "localizedName": "bowl",
                                  "image": "bowl.jpg"
                              }
                          ]
                      },
                      {
                          "number": 7,
                          "step": "Serve immediately, or cover and refrigerate.",
                          "ingredients": [],
                          "equipment": []
                      },
                      {
                          "number": 8,
                          "step": "Serve as a dip, spread or however you'd like!",
                          "ingredients": [
                              {
                                  "id": 0,
                                  "name": "spread",
                                  "localizedName": "spread",
                                  "image": ""
                              },
                              {
                                  "id": 0,
                                  "name": "dip",
                                  "localizedName": "dip",
                                  "image": ""
                              }
                          ],
                          "equipment": []
                      }
                  ]
              }
          ],
          "originalId": null,
          "spoonacularScore": 52.82429504394531,
          "spoonacularSourceUrl": "https://spoonacular.com/cilantro-hummus-639410"
      },
      {
          "vegetarian": false,
          "vegan": false,
          "glutenFree": false,
          "dairyFree": false,
          "veryHealthy": false,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 9,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 3,
          "healthScore": 2,
          "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
          "license": "CC BY 3.0",
          "sourceName": "Foodista",
          "pricePerServing": 67.52,
          "extendedIngredients": [
              {
                  "id": 98938,
                  "aisle": "Produce",
                  "image": "romanesco.png",
                  "consistency": "SOLID",
                  "name": "broccoflower",
                  "nameClean": "romanesco",
                  "original": "1 head of broccoflower, cut into 'florettes'",
                  "originalName": "broccoflower, cut into 'florettes",
                  "amount": 1.0,
                  "unit": "head",
                  "meta": [
                      "cut into 'florettes'"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "head",
                          "unitLong": "head"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "head",
                          "unitLong": "head"
                      }
                  }
              },
              {
                  "id": 1123,
                  "aisle": "Milk, Eggs, Other Dairy",
                  "image": "egg.png",
                  "consistency": "SOLID",
                  "name": "eggs",
                  "nameClean": "egg",
                  "original": "4 eggs",
                  "originalName": "eggs",
                  "amount": 4.0,
                  "unit": "",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 10862,
                  "aisle": "Meat",
                  "image": "cooked-bacon.jpg",
                  "consistency": "SOLID",
                  "name": "bacon",
                  "nameClean": "cooked bacon",
                  "original": "8 strips of bacon, cooked and chopped",
                  "originalName": "bacon, cooked and chopped",
                  "amount": 8.0,
                  "unit": "strips",
                  "meta": [
                      "cooked",
                      "chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 8.0,
                          "unitShort": "strips",
                          "unitLong": "strips"
                      },
                      "metric": {
                          "amount": 8.0,
                          "unitShort": "strips",
                          "unitLong": "strips"
                      }
                  }
              },
              {
                  "id": 2047,
                  "aisle": "Spices and Seasonings",
                  "image": "salt.jpg",
                  "consistency": "SOLID",
                  "name": "salt",
                  "nameClean": "table salt",
                  "original": "1/2 teaspoon salt",
                  "originalName": "salt",
                  "amount": 0.5,
                  "unit": "teaspoon",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 0.5,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      },
                      "metric": {
                          "amount": 0.5,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      }
                  }
              },
              {
                  "id": 20081,
                  "aisle": "Baking",
                  "image": "flour.png",
                  "consistency": "SOLID",
                  "name": "flour",
                  "nameClean": "wheat flour",
                  "original": "3 teaspoons flour",
                  "originalName": "flour",
                  "amount": 3.0,
                  "unit": "teaspoons",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 3.0,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      },
                      "metric": {
                          "amount": 3.0,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      }
                  }
              },
              {
                  "id": 1077,
                  "aisle": "Milk, Eggs, Other Dairy",
                  "image": "milk.png",
                  "consistency": "LIQUID",
                  "name": "milk",
                  "nameClean": "milk",
                  "original": "1 cup milk",
                  "originalName": "milk",
                  "amount": 1.0,
                  "unit": "cup",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "cup",
                          "unitLong": "cup"
                      },
                      "metric": {
                          "amount": 244.0,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 1085,
                  "aisle": "Milk, Eggs, Other Dairy",
                  "image": "milk.jpg",
                  "consistency": "LIQUID",
                  "name": "mayo",
                  "nameClean": "fat free milk",
                  "original": "2 tablespoons of mayo (I used this since I was using skim milk)",
                  "originalName": "mayo (I used this since I was using skim milk)",
                  "amount": 2.0,
                  "unit": "tablespoons",
                  "meta": [
                      "(I used this since I was using skim milk)"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              },
              {
                  "id": 11291,
                  "aisle": "Produce",
                  "image": "spring-onions.jpg",
                  "consistency": "SOLID",
                  "name": "green onions",
                  "nameClean": "spring onions",
                  "original": "1/4 cup green onions, chopped",
                  "originalName": "green onions, chopped",
                  "amount": 0.25,
                  "unit": "cup",
                  "meta": [
                      "chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 0.25,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 25.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 2031,
                  "aisle": "Spices and Seasonings",
                  "image": "chili-powder.jpg",
                  "consistency": "SOLID",
                  "name": "cayenne",
                  "nameClean": "ground cayenne pepper",
                  "original": "dash of cayenne",
                  "originalName": "cayenne",
                  "amount": 1.0,
                  "unit": "dash",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "dash",
                          "unitLong": "dash"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "dash",
                          "unitLong": "dash"
                      }
                  }
              },
              {
                  "id": 1002030,
                  "aisle": "Spices and Seasonings",
                  "image": "pepper.jpg",
                  "consistency": "SOLID",
                  "name": "pepper",
                  "nameClean": "black pepper",
                  "original": "1/2 teaspoon pepper",
                  "originalName": "pepper",
                  "amount": 0.5,
                  "unit": "teaspoon",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 0.5,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      },
                      "metric": {
                          "amount": 0.5,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      }
                  }
              },
              {
                  "id": 1001009,
                  "aisle": "Cheese",
                  "image": "shredded-cheddar.jpg",
                  "consistency": "SOLID",
                  "name": "cheddar cheese",
                  "nameClean": "shredded cheddar cheese",
                  "original": "1/2 pound smoked cheddar cheese, shredded",
                  "originalName": "smoked cheddar cheese, shredded",
                  "amount": 0.5,
                  "unit": "pound",
                  "meta": [
                      "smoked",
                      "shredded"
                  ],
                  "measures": {
                      "us": {
                          "amount": 0.5,
                          "unitShort": "lb",
                          "unitLong": "pounds"
                      },
                      "metric": {
                          "amount": 226.796,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 18338,
                  "aisle": "Refrigerated",
                  "image": "filo-dough.png",
                  "consistency": "SOLID",
                  "name": "phyllo dough sheets",
                  "nameClean": "filo pastry",
                  "original": "1/2 inch package of phyllo dough sheets (1 of the 2 cylinders the box), at room temperature",
                  "originalName": "package of phyllo dough sheets (1 of the 2 cylinders the box), at room temperature",
                  "amount": 0.5,
                  "unit": "inch",
                  "meta": [
                      "at room temperature",
                      "(1 of the 2 cylinders the box)"
                  ],
                  "measures": {
                      "us": {
                          "amount": 0.5,
                          "unitShort": "inch",
                          "unitLong": "inches"
                      },
                      "metric": {
                          "amount": 0.5,
                          "unitShort": "inch",
                          "unitLong": "inches"
                      }
                  }
              },
              {
                  "id": 1053,
                  "aisle": "Milk, Eggs, Other Dairy",
                  "image": "fluid-cream.jpg",
                  "consistency": "LIQUID",
                  "name": "may not be heavy handed",
                  "nameClean": "cream",
                  "original": "7 tablespoons butter, melted (you may or may not be heavy handed with this)",
                  "originalName": "butter, melted (you may or may not be heavy handed with this)",
                  "amount": 7.0,
                  "unit": "tablespoons",
                  "meta": [
                      "with this)",
                      "melted"
                  ],
                  "measures": {
                      "us": {
                          "amount": 7.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 7.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              }
          ],
          "id": 636158,
          "title": "Broccoli and Cheese Phyllo Pie",
          "readyInMinutes": 45,
          "servings": 8,
          "sourceUrl": "https://www.foodista.com/recipe/6ZTLMS7C/broccoli-and-cheese-phyllo-pie",
          "image": "https://spoonacular.com/recipeImages/636158-556x370.jpg",
          "imageType": "jpg",
          "summary": "Broccoli and Cheese Phyllo Pie takes around <b>45 minutes</b> from beginning to end. One portion of this dish contains around <b>14g of protein</b>, <b>20g of fat</b>, and a total of <b>253 calories</b>. For <b>68 cents per serving</b>, this recipe <b>covers 9%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. If you have milk, cheddar cheese, mayo, and a few other ingredients on hand, you can make it. 3 people have tried and liked this recipe. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 28%</b>, which is rather bad. <a href=\"https://spoonacular.com/recipes/skillet-chicken-and-broccoli-pot-pie-with-garlic-butter-phyllo-crust-1545795\">Skillet Chicken and Broccoli Pot Pie with Garlic Butter Phyllo Crust</a>, <a href=\"https://spoonacular.com/recipes/guava-and-goat-cheese-phyllo-pie-1735605\">Guavan and Goat Cheese Phyllo Pie</a>, and <a href=\"https://spoonacular.com/recipes/skillet-phyllo-pie-with-butternut-squash-kale-and-goat-cheese-1309585\">Skillet Phyllo Pie With Butternut Squash, Kale, and Goat Cheese</a> are very similar to this recipe.",
          "cuisines": [],
          "dishTypes": [],
          "diets": [],
          "occasions": [],
          "instructions": "Preheat your oven to 350 degrees.\nPut your broccoflower in a pot with a enough water to cover and cook for 5 minutes. Drain and set aside. In a large bowl put your chopped bacon, green onions, shredded cheese, mix well.\nIn a medium bowl put your eggs, salt, peppers, flour, mayo and milk beat well. I used an immersion blender for the mayo tends to 'seize in little pieces from the cold milk. The immersion blender made it all smooth.\nUnroll your phyllo dough and cover with a damp paper towel. Either grease your 8 inch springform pan with cooking spray or melted butter. Uncover your dough and remove two sheets of phyllo (replacing the damp towel) and lay into your springform pan. Take your pastry brush and coat it with butter. Making sure the phyllo 'sticks' to the sides. Rotate pan a bit and repeat with two more layers and butter. Keep rotating and layering and buttering until you have quite a thick 'phyllo' nest. Roughly about 3/4 of the roll. Since there are 20 sheets to a roll and you are putting down 2 layers at a time; this will be about 14-16 sheets)\nSince your broccoli is cool now, roughly chop it and mix it in with the bacon and cheese mixture. Put the broccoli/bacon/cheese mix into your phyllo nest and gently pat down. Remix your egg mixture (pepper and flour may settle a bit) and pour over your broccoli mixture.\nTake your remaining phyllo sheets and put on top 2 layers at a time coating with butter in between. Roll your over hanging edges with the phyllo sides to create a 'crust edge'. Brush top with butter.\nBake in 350 degree oven for 1 hour and 15 minutes. You may need to cover the phyllo after an hour to keep it from overbrowning. Let sit 15 minutes before cutting (you don't want everything to ooze out on you).\nBe careful cutting very gently so you don't MASSACRE your phyllo dough. Use a serrated knife and gently saw. When you get to the bottom where the phyllo is more thick....you don't have to be so gentle.",
          "analyzedInstructions": [
              {
                  "name": "",
                  "steps": [
                      {
                          "number": 1,
                          "step": "Preheat your oven to 350 degrees.",
                          "ingredients": [],
                          "equipment": [
                              {
                                  "id": 404784,
                                  "name": "oven",
                                  "localizedName": "oven",
                                  "image": "oven.jpg"
                              }
                          ]
                      },
                      {
                          "number": 2,
                          "step": "Put your broccoflower in a pot with a enough water to cover and cook for 5 minutes.",
                          "ingredients": [
                              {
                                  "id": 98938,
                                  "name": "romanesco",
                                  "localizedName": "romanesco",
                                  "image": "romanesco.png"
                              },
                              {
                                  "id": 14412,
                                  "name": "water",
                                  "localizedName": "water",
                                  "image": "water.png"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404752,
                                  "name": "pot",
                                  "localizedName": "pot",
                                  "image": "stock-pot.jpg"
                              }
                          ],
                          "length": {
                              "number": 5,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 3,
                          "step": "Drain and set aside. In a large bowl put your chopped bacon, green onions, shredded cheese, mix well.",
                          "ingredients": [
                              {
                                  "id": 1011026,
                                  "name": "shredded cheese",
                                  "localizedName": "shredded cheese",
                                  "image": "cheddar-cheese.png"
                              },
                              {
                                  "id": 11291,
                                  "name": "green onions",
                                  "localizedName": "green onions",
                                  "image": "spring-onions.jpg"
                              },
                              {
                                  "id": 10123,
                                  "name": "bacon",
                                  "localizedName": "bacon",
                                  "image": "raw-bacon.png"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404783,
                                  "name": "bowl",
                                  "localizedName": "bowl",
                                  "image": "bowl.jpg"
                              }
                          ]
                      },
                      {
                          "number": 4,
                          "step": "In a medium bowl put your eggs, salt, peppers, flour, mayo and milk beat well. I used an immersion blender for the mayo tends to 'seize in little pieces from the cold milk. The immersion blender made it all smooth.",
                          "ingredients": [
                              {
                                  "id": 10111333,
                                  "name": "peppers",
                                  "localizedName": "peppers",
                                  "image": "green-pepper.jpg"
                              },
                              {
                                  "id": 20081,
                                  "name": "all purpose flour",
                                  "localizedName": "all purpose flour",
                                  "image": "flour.png"
                              },
                              {
                                  "id": 1123,
                                  "name": "egg",
                                  "localizedName": "egg",
                                  "image": "egg.png"
                              },
                              {
                                  "id": 4025,
                                  "name": "mayonnaise",
                                  "localizedName": "mayonnaise",
                                  "image": "mayonnaise.png"
                              },
                              {
                                  "id": 1077,
                                  "name": "milk",
                                  "localizedName": "milk",
                                  "image": "milk.png"
                              },
                              {
                                  "id": 2047,
                                  "name": "salt",
                                  "localizedName": "salt",
                                  "image": "salt.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404776,
                                  "name": "immersion blender",
                                  "localizedName": "immersion blender",
                                  "image": "immersion-blender.png"
                              },
                              {
                                  "id": 404783,
                                  "name": "bowl",
                                  "localizedName": "bowl",
                                  "image": "bowl.jpg"
                              }
                          ]
                      },
                      {
                          "number": 5,
                          "step": "Unroll your phyllo dough and cover with a damp paper towel. Either grease your 8 inch springform pan with cooking spray or melted butter. Uncover your dough and remove two sheets of phyllo (replacing the damp towel) and lay into your springform pan. Take your pastry brush and coat it with butter. Making sure the phyllo 'sticks' to the sides. Rotate pan a bit and repeat with two more layers and butter. Keep rotating and layering and buttering until you have quite a thick 'phyllo' nest. Roughly about 3/4 of the roll. Since there are 20 sheets to a roll and you are putting down 2 layers at a time; this will be about 14-16 sheets)",
                          "ingredients": [
                              {
                                  "id": 4679,
                                  "name": "cooking spray",
                                  "localizedName": "cooking spray",
                                  "image": "cooking-spray.png"
                              },
                              {
                                  "id": 18338,
                                  "name": "filo pastry",
                                  "localizedName": "filo pastry",
                                  "image": "filo-dough.png"
                              },
                              {
                                  "id": 1001,
                                  "name": "butter",
                                  "localizedName": "butter",
                                  "image": "butter-sliced.jpg"
                              },
                              {
                                  "id": 0,
                                  "name": "dough",
                                  "localizedName": "dough",
                                  "image": "pizza-dough"
                              },
                              {
                                  "id": 0,
                                  "name": "roll",
                                  "localizedName": "roll",
                                  "image": "dinner-yeast-rolls.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404650,
                                  "name": "springform pan",
                                  "localizedName": "springform pan",
                                  "image": "cake-pan.png"
                              },
                              {
                                  "id": 404764,
                                  "name": "pastry brush",
                                  "localizedName": "pastry brush",
                                  "image": "pastry-brush.jpg"
                              },
                              {
                                  "id": 405895,
                                  "name": "paper towels",
                                  "localizedName": "paper towels",
                                  "image": "paper-towels.jpg"
                              }
                          ]
                      },
                      {
                          "number": 6,
                          "step": "Since your broccoli is cool now, roughly chop it and mix it in with the bacon and cheese mixture.",
                          "ingredients": [
                              {
                                  "id": 11090,
                                  "name": "broccoli",
                                  "localizedName": "broccoli",
                                  "image": "broccoli.jpg"
                              },
                              {
                                  "id": 1041009,
                                  "name": "cheese",
                                  "localizedName": "cheese",
                                  "image": "cheddar-cheese.png"
                              },
                              {
                                  "id": 10123,
                                  "name": "bacon",
                                  "localizedName": "bacon",
                                  "image": "raw-bacon.png"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 7,
                          "step": "Put the broccoli/bacon/cheese mix into your phyllo nest and gently pat down. Remix your egg mixture (pepper and flour may settle a bit) and pour over your broccoli mixture.",
                          "ingredients": [
                              {
                                  "id": 11090,
                                  "name": "broccoli",
                                  "localizedName": "broccoli",
                                  "image": "broccoli.jpg"
                              },
                              {
                                  "id": 1041009,
                                  "name": "cheese",
                                  "localizedName": "cheese",
                                  "image": "cheddar-cheese.png"
                              },
                              {
                                  "id": 1002030,
                                  "name": "pepper",
                                  "localizedName": "pepper",
                                  "image": "pepper.jpg"
                              },
                              {
                                  "id": 10123,
                                  "name": "bacon",
                                  "localizedName": "bacon",
                                  "image": "raw-bacon.png"
                              },
                              {
                                  "id": 20081,
                                  "name": "all purpose flour",
                                  "localizedName": "all purpose flour",
                                  "image": "flour.png"
                              },
                              {
                                  "id": 1123,
                                  "name": "egg",
                                  "localizedName": "egg",
                                  "image": "egg.png"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 8,
                          "step": "Take your remaining phyllo sheets and put on top 2 layers at a time coating with butter in between.",
                          "ingredients": [
                              {
                                  "id": 18338,
                                  "name": "filo pastry",
                                  "localizedName": "filo pastry",
                                  "image": "filo-dough.png"
                              },
                              {
                                  "id": 1001,
                                  "name": "butter",
                                  "localizedName": "butter",
                                  "image": "butter-sliced.jpg"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 9,
                          "step": "Roll your over hanging edges with the phyllo sides to create a 'crust edge'.",
                          "ingredients": [
                              {
                                  "id": 0,
                                  "name": "crust",
                                  "localizedName": "crust",
                                  "image": ""
                              },
                              {
                                  "id": 0,
                                  "name": "roll",
                                  "localizedName": "roll",
                                  "image": "dinner-yeast-rolls.jpg"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 10,
                          "step": "Brush top with butter.",
                          "ingredients": [
                              {
                                  "id": 1001,
                                  "name": "butter",
                                  "localizedName": "butter",
                                  "image": "butter-sliced.jpg"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 11,
                          "step": "Bake in 350 degree oven for 1 hour and 15 minutes. You may need to cover the phyllo after an hour to keep it from overbrowning.",
                          "ingredients": [],
                          "equipment": [
                              {
                                  "id": 404784,
                                  "name": "oven",
                                  "localizedName": "oven",
                                  "image": "oven.jpg"
                              }
                          ],
                          "length": {
                              "number": 75,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 12,
                          "step": "Let sit 15 minutes before cutting (you don't want everything to ooze out on you).",
                          "ingredients": [],
                          "equipment": [],
                          "length": {
                              "number": 15,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 13,
                          "step": "Be careful cutting very gently so you don't MASSACRE your phyllo dough. Use a serrated knife and gently saw. When you get to the bottom where the phyllo is more thick....you don't have to be so gentle.",
                          "ingredients": [
                              {
                                  "id": 18338,
                                  "name": "filo pastry",
                                  "localizedName": "filo pastry",
                                  "image": "filo-dough.png"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404740,
                                  "name": "serrated knife",
                                  "localizedName": "serrated knife",
                                  "image": "serrated-knife.jpg"
                              }
                          ]
                      }
                  ]
              }
          ],
          "originalId": null,
          "spoonacularScore": 33.707576751708984,
          "spoonacularSourceUrl": "https://spoonacular.com/broccoli-and-cheese-phyllo-pie-636158"
      },
      {
          "vegetarian": false,
          "vegan": false,
          "glutenFree": false,
          "dairyFree": false,
          "veryHealthy": false,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 21,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 2,
          "healthScore": 15,
          "creditsText": "foodista.com",
          "sourceName": "foodista.com",
          "pricePerServing": 167.98,
          "extendedIngredients": [
              {
                  "id": 10123,
                  "aisle": "Meat",
                  "image": "raw-bacon.png",
                  "consistency": "SOLID",
                  "name": "bacon",
                  "nameClean": "applewood smoked bacon",
                  "original": "200 grams bacon",
                  "originalName": "bacon",
                  "amount": 200.0,
                  "unit": "grams",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 7.055,
                          "unitShort": "oz",
                          "unitLong": "ounces"
                      },
                      "metric": {
                          "amount": 200.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 1041009,
                  "aisle": "Cheese",
                  "image": "cheddar-cheese.png",
                  "consistency": "SOLID",
                  "name": "cheese",
                  "nameClean": "cheese",
                  "original": "grated cheese",
                  "originalName": "grated cheese",
                  "amount": 4.0,
                  "unit": "servings",
                  "meta": [
                      "grated"
                  ],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": 6147,
                  "aisle": "Canned and Jarred",
                  "image": "cream-of-mushroom-soup.png",
                  "consistency": "LIQUID",
                  "name": "condensed cream of mushroom",
                  "nameClean": "condensed cream of mushroom soup",
                  "original": "1 small can condensed cream of mushroom",
                  "originalName": "condensed cream of mushroom",
                  "amount": 1.0,
                  "unit": "small can",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "small can",
                          "unitLong": "small can"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "small can",
                          "unitLong": "small can"
                      }
                  }
              },
              {
                  "id": 2003,
                  "aisle": "Spices and Seasonings",
                  "image": "basil.jpg",
                  "consistency": "SOLID",
                  "name": "basil",
                  "nameClean": "dried basil",
                  "original": "dried basil",
                  "originalName": "dried basil",
                  "amount": 4.0,
                  "unit": "servings",
                  "meta": [
                      "dried"
                  ],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": 10020409,
                  "aisle": "Pasta and Rice",
                  "image": "egg-noodles.jpg",
                  "consistency": "SOLID",
                  "name": "fettuccine",
                  "nameClean": "fettuccine",
                  "original": "10 ounces fettuccine",
                  "originalName": "fettuccine",
                  "amount": 10.0,
                  "unit": "ounces",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 10.0,
                          "unitShort": "oz",
                          "unitLong": "ounces"
                      },
                      "metric": {
                          "amount": 283.495,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 1002030,
                  "aisle": "Spices and Seasonings",
                  "image": "pepper.jpg",
                  "consistency": "SOLID",
                  "name": "ground pepper",
                  "nameClean": "black pepper",
                  "original": "ground black pepper",
                  "originalName": "ground black pepper",
                  "amount": 4.0,
                  "unit": "servings",
                  "meta": [
                      "black"
                  ],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": 11260,
                  "aisle": "Produce",
                  "image": "mushrooms-white.jpg",
                  "consistency": "SOLID",
                  "name": "mushroom",
                  "nameClean": "fresh mushrooms",
                  "original": "1 small can sliced mushroom",
                  "originalName": "sliced mushroom",
                  "amount": 1.0,
                  "unit": "small can",
                  "meta": [
                      "sliced"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "small can",
                          "unitLong": "small can"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "small can",
                          "unitLong": "small can"
                      }
                  }
              },
              {
                  "id": 11260,
                  "aisle": "Produce",
                  "image": "mushrooms.png",
                  "consistency": "SOLID",
                  "name": "mushroom",
                  "nameClean": "fresh mushrooms",
                  "original": "1 small can sliced mushroom",
                  "originalName": "sliced mushroom",
                  "amount": 1.0,
                  "unit": "small can",
                  "meta": [
                      "sliced"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "small can",
                          "unitLong": "small can"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "small can",
                          "unitLong": "small can"
                      }
                  }
              },
              {
                  "id": 2027,
                  "aisle": "Spices and Seasonings",
                  "image": "oregano.jpg",
                  "consistency": "SOLID",
                  "name": "oregano powder",
                  "nameClean": "oregano",
                  "original": "dried oregano powder",
                  "originalName": "dried oregano powder",
                  "amount": 4.0,
                  "unit": "servings",
                  "meta": [
                      "dried"
                  ],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": 11304,
                  "aisle": "Produce",
                  "image": "peas.jpg",
                  "consistency": "SOLID",
                  "name": "peas",
                  "nameClean": "petite peas",
                  "original": "2/3 cup frozen green peas",
                  "originalName": "frozen green peas",
                  "amount": 0.6666667,
                  "unit": "cup",
                  "meta": [
                      "green",
                      "frozen"
                  ],
                  "measures": {
                      "us": {
                          "amount": 0.6666667,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 96.667,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              }
          ],
          "id": 642719,
          "title": "Fettuccine With Bacon Mushroom and Peas",
          "readyInMinutes": 25,
          "servings": 4,
          "sourceUrl": "http://www.foodista.com/recipe/ZW3W47GQ/fettuccine-with-bacon-mushroom-and-peas",
          "image": "https://spoonacular.com/recipeImages/642719-556x370.jpg",
          "imageType": "jpg",
          "summary": "Fettuccine With Bacon Mushroom and Peas might be a good recipe to expand your main course recipe box. This recipe serves 4. One serving contains <b>674 calories</b>, <b>28g of protein</b>, and <b>35g of fat</b>. For <b>$1.68 per serving</b>, this recipe <b>covers 24%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up peas, basil, condensed cream of mushroom, and a few other things to make it today. 2 people found this recipe to be delicious and satisfying. From preparation to the plate, this recipe takes about <b>25 minutes</b>. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 58%</b>. This score is solid. <a href=\"https://spoonacular.com/recipes/fettuccine-with-smashed-peas-642722\">Fettuccine With Smashed Peas</a>, <a href=\"https://spoonacular.com/recipes/fettuccine-with-peas-and-mint-18264\">Fettuccine With Peas And Mint</a>, and <a href=\"https://spoonacular.com/recipes/fettuccine-with-asparagus-and-peas-429660\">Fettuccine with Asparagus and Peas</a> are very similar to this recipe.",
          "cuisines": [],
          "dishTypes": [
              "side dish",
              "lunch",
              "main course",
              "main dish",
              "dinner"
          ],
          "diets": [],
          "occasions": [],
          "instructions": "<ol><li>Bring a pot of water to boil over high heat, add salt and fettuccine, cook for about 9 minutes.</li><li>Meanwhile, brown bacon in a pan over medium high heat. Drain on paper towels and set aside.</li><li>Pour the oil out of the pan, saute mushroom for about a minute then pour a can of cream of mushroom, add a can of water. Season with ground black pepper and oregano and/or basil if using, bring to boil; add green peas and a little grated cheese.</li><li>Taste it first before adding the cheese since the cream of mushroom is already salty. Add the cooked fettuccine, mix then crumble the bacon and add it to the pasta.</li><li>Serve and enjoy! </li></ol>",
          "analyzedInstructions": [
              {
                  "name": "",
                  "steps": [
                      {
                          "number": 1,
                          "step": "Bring a pot of water to boil over high heat, add salt and fettuccine, cook for about 9 minutes.Meanwhile, brown bacon in a pan over medium high heat.",
                          "ingredients": [
                              {
                                  "id": 10020409,
                                  "name": "fettuccine",
                                  "localizedName": "fettuccine",
                                  "image": "egg-noodles.jpg"
                              },
                              {
                                  "id": 10123,
                                  "name": "bacon",
                                  "localizedName": "bacon",
                                  "image": "raw-bacon.png"
                              },
                              {
                                  "id": 14412,
                                  "name": "water",
                                  "localizedName": "water",
                                  "image": "water.png"
                              },
                              {
                                  "id": 2047,
                                  "name": "salt",
                                  "localizedName": "salt",
                                  "image": "salt.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404645,
                                  "name": "frying pan",
                                  "localizedName": "frying pan",
                                  "image": "pan.png"
                              },
                              {
                                  "id": 404752,
                                  "name": "pot",
                                  "localizedName": "pot",
                                  "image": "stock-pot.jpg"
                              }
                          ],
                          "length": {
                              "number": 9,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 2,
                          "step": "Drain on paper towels and set aside.",
                          "ingredients": [],
                          "equipment": [
                              {
                                  "id": 405895,
                                  "name": "paper towels",
                                  "localizedName": "paper towels",
                                  "image": "paper-towels.jpg"
                              }
                          ]
                      },
                      {
                          "number": 3,
                          "step": "Pour the oil out of the pan, saute mushroom for about a minute then pour a can of cream of mushroom, add a can of water. Season with ground black pepper and oregano and/or basil if using, bring to boil; add green peas and a little grated cheese.Taste it first before adding the cheese since the cream of mushroom is already salty.",
                          "ingredients": [
                              {
                                  "id": 1002030,
                                  "name": "ground black pepper",
                                  "localizedName": "ground black pepper",
                                  "image": "pepper.jpg"
                              },
                              {
                                  "id": 11304,
                                  "name": "green peas",
                                  "localizedName": "green peas",
                                  "image": "peas.jpg"
                              },
                              {
                                  "id": 11260,
                                  "name": "mushrooms",
                                  "localizedName": "mushrooms",
                                  "image": "mushrooms.png"
                              },
                              {
                                  "id": 2027,
                                  "name": "oregano",
                                  "localizedName": "oregano",
                                  "image": "oregano.jpg"
                              },
                              {
                                  "id": 1041009,
                                  "name": "cheese",
                                  "localizedName": "cheese",
                                  "image": "cheddar-cheese.png"
                              },
                              {
                                  "id": 2044,
                                  "name": "basil",
                                  "localizedName": "basil",
                                  "image": "basil.jpg"
                              },
                              {
                                  "id": 1053,
                                  "name": "cream",
                                  "localizedName": "cream",
                                  "image": "fluid-cream.jpg"
                              },
                              {
                                  "id": 14412,
                                  "name": "water",
                                  "localizedName": "water",
                                  "image": "water.png"
                              },
                              {
                                  "id": 4582,
                                  "name": "cooking oil",
                                  "localizedName": "cooking oil",
                                  "image": "vegetable-oil.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404645,
                                  "name": "frying pan",
                                  "localizedName": "frying pan",
                                  "image": "pan.png"
                              }
                          ]
                      },
                      {
                          "number": 4,
                          "step": "Add the cooked fettuccine, mix then crumble the bacon and add it to the pasta.",
                          "ingredients": [
                              {
                                  "id": 10020410,
                                  "name": "cooked fettuccine",
                                  "localizedName": "cooked fettuccine",
                                  "image": "egg-noodles.jpg"
                              },
                              {
                                  "id": 10123,
                                  "name": "bacon",
                                  "localizedName": "bacon",
                                  "image": "raw-bacon.png"
                              },
                              {
                                  "id": 20420,
                                  "name": "pasta",
                                  "localizedName": "pasta",
                                  "image": "fusilli.jpg"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 5,
                          "step": "Serve and enjoy!",
                          "ingredients": [],
                          "equipment": []
                      }
                  ]
              }
          ],
          "originalId": null,
          "spoonacularScore": 61.92351531982422,
          "spoonacularSourceUrl": "https://spoonacular.com/fettuccine-with-bacon-mushroom-and-peas-642719"
      },
      {
          "vegetarian": false,
          "vegan": false,
          "glutenFree": false,
          "dairyFree": false,
          "veryHealthy": false,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 17,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 3,
          "healthScore": 15,
          "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
          "license": "CC BY 3.0",
          "sourceName": "Foodista",
          "pricePerServing": 274.37,
          "extendedIngredients": [
              {
                  "id": 1001,
                  "aisle": "Milk, Eggs, Other Dairy",
                  "image": "butter-sliced.jpg",
                  "consistency": "SOLID",
                  "name": "butter",
                  "nameClean": "butter",
                  "original": "Butter - 2 tbsp, softened",
                  "originalName": "Butter , softened",
                  "amount": 2.0,
                  "unit": "tbsp",
                  "meta": [
                      "softened"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              },
              {
                  "id": 1123,
                  "aisle": "Milk, Eggs, Other Dairy",
                  "image": "egg.png",
                  "consistency": "SOLID",
                  "name": "eggs",
                  "nameClean": "egg",
                  "original": "6 eggs",
                  "originalName": "eggs",
                  "amount": 6.0,
                  "unit": "",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 6.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 6.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 20081,
                  "aisle": "Baking",
                  "image": "flour.png",
                  "consistency": "SOLID",
                  "name": "flour",
                  "nameClean": "wheat flour",
                  "original": "1 cup flour",
                  "originalName": "flour",
                  "amount": 1.0,
                  "unit": "cup",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "cup",
                          "unitLong": "cup"
                      },
                      "metric": {
                          "amount": 125.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 19297,
                  "aisle": "Nut butters, Jams, and Honey",
                  "image": "grape-jelly.jpg",
                  "consistency": "SOLID",
                  "name": "jam",
                  "nameClean": "jam",
                  "original": "Jam",
                  "originalName": "Jam",
                  "amount": 4.0,
                  "unit": "servings",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": 19297,
                  "aisle": "Nut butters, Jams, and Honey",
                  "image": "strawberry-jam.png",
                  "consistency": "SOLID",
                  "name": "jam",
                  "nameClean": "jam",
                  "original": "Jam",
                  "originalName": "Jam",
                  "amount": 4.0,
                  "unit": "servings",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": 19911,
                  "aisle": "Cereal",
                  "image": "maple-syrup.png",
                  "consistency": "LIQUID",
                  "name": "maple syrup",
                  "nameClean": "maple syrup",
                  "original": "Maple syrup",
                  "originalName": "Maple syrup",
                  "amount": 4.0,
                  "unit": "servings",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": 1077,
                  "aisle": "Milk, Eggs, Other Dairy",
                  "image": "milk.png",
                  "consistency": "LIQUID",
                  "name": "milk",
                  "nameClean": "milk",
                  "original": "1 cup milk",
                  "originalName": "milk",
                  "amount": 1.0,
                  "unit": "cup",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "cup",
                          "unitLong": "cup"
                      },
                      "metric": {
                          "amount": 244.0,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 9200,
                  "aisle": "Produce",
                  "image": "orange.png",
                  "consistency": "SOLID",
                  "name": "cranberry-orange relish",
                  "nameClean": "orange",
                  "original": "Or cranberry-orange relish",
                  "originalName": "Or cranberry-orange relish",
                  "amount": 4.0,
                  "unit": "servings",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": 19336,
                  "aisle": "Baking",
                  "image": "powdered-sugar.jpg",
                  "consistency": "SOLID",
                  "name": "powdered sugar",
                  "nameClean": "powdered sugar",
                  "original": "Powdered sugar",
                  "originalName": "Powdered sugar",
                  "amount": 4.0,
                  "unit": "servings",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": 2047,
                  "aisle": "Spices and Seasonings",
                  "image": "salt.jpg",
                  "consistency": "SOLID",
                  "name": "salt",
                  "nameClean": "table salt",
                  "original": "Dash of salt",
                  "originalName": "salt",
                  "amount": 1.0,
                  "unit": "Dash",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "Dash",
                          "unitLong": "Dash"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "Dash",
                          "unitLong": "Dash"
                      }
                  }
              },
              {
                  "id": 9316,
                  "aisle": "Produce",
                  "image": "strawberries.png",
                  "consistency": "SOLID",
                  "name": "strawberries",
                  "nameClean": "strawberries",
                  "original": "Fresh sliced strawberries",
                  "originalName": "Fresh sliced strawberries",
                  "amount": 4.0,
                  "unit": "servings",
                  "meta": [
                      "fresh",
                      "sliced"
                  ],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              }
          ],
          "id": 633830,
          "title": "Baked Swedish Pancake",
          "readyInMinutes": 45,
          "servings": 4,
          "sourceUrl": "http://www.foodista.com/recipe/66J4MJKZ/baked-swedish-pancake",
          "image": "https://spoonacular.com/recipeImages/633830-556x370.jpg",
          "imageType": "jpg",
          "summary": "Baked Swedish Pancake is a Scandinavian recipe that serves 4. One portion of this dish contains approximately <b>15g of protein</b>, <b>15g of fat</b>, and a total of <b>525 calories</b>. For <b>$2.74 per serving</b>, this recipe <b>covers 25%</b> of your daily requirements of vitamins and minerals. It works well as an affordable breakfast. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. 3 people found this recipe to be yummy and satisfying. Head to the store and pick up milk, maple syrup, flour, and a few other things to make it today. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 59%</b>. This score is pretty good. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/swedish-baked-potatoes-hasselbackspotatis-120544\">Swedish Baked Potatoes (Hasselbackspotatis)</a>, <a href=\"https://spoonacular.com/recipes/baked-apple-pancake-821365\">Baked Apple Pancake</a>, and <a href=\"https://spoonacular.com/recipes/baked-pancake-squares-427739\">Baked Pancake Squares</a>.",
          "cuisines": [
              "Nordic",
              "Scandinavian",
              "European"
          ],
          "dishTypes": [
              "morning meal",
              "brunch",
              "breakfast"
          ],
          "diets": [],
          "occasions": [],
          "instructions": "<ol><li>Heat oven to 400 degrees and place butter in 9 x 13 inch casserole to melt. Mix other ingredients into a batter and pour into hot pan. Bake 20 minutes. It will puff up and edges will curl in and brown when done. Cut in squares and serve with a variety of toppings. Makes 10 slices per pan. Serves 6 to 8.</li></ol>",
          "analyzedInstructions": [
              {
                  "name": "",
                  "steps": [
                      {
                          "number": 1,
                          "step": "Heat oven to 400 degrees and place butter in 9 x 13 inch casserole to melt.",
                          "ingredients": [
                              {
                                  "id": 1001,
                                  "name": "butter",
                                  "localizedName": "butter",
                                  "image": "butter-sliced.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404784,
                                  "name": "oven",
                                  "localizedName": "oven",
                                  "image": "oven.jpg"
                              }
                          ]
                      },
                      {
                          "number": 2,
                          "step": "Mix other ingredients into a batter and pour into hot pan.",
                          "ingredients": [],
                          "equipment": [
                              {
                                  "id": 404645,
                                  "name": "frying pan",
                                  "localizedName": "frying pan",
                                  "image": "pan.png"
                              }
                          ]
                      },
                      {
                          "number": 3,
                          "step": "Bake 20 minutes. It will puff up and edges will curl in and brown when done.",
                          "ingredients": [],
                          "equipment": [
                              {
                                  "id": 404784,
                                  "name": "oven",
                                  "localizedName": "oven",
                                  "image": "oven.jpg"
                              }
                          ],
                          "length": {
                              "number": 20,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 4,
                          "step": "Cut in squares and serve with a variety of toppings. Makes 10 slices per pan.",
                          "ingredients": [],
                          "equipment": [
                              {
                                  "id": 404645,
                                  "name": "frying pan",
                                  "localizedName": "frying pan",
                                  "image": "pan.png"
                              }
                          ]
                      },
                      {
                          "number": 5,
                          "step": "Serves 6 to 8.",
                          "ingredients": [],
                          "equipment": []
                      }
                  ]
              }
          ],
          "originalId": null,
          "spoonacularScore": 45.80829620361328,
          "spoonacularSourceUrl": "https://spoonacular.com/baked-swedish-pancake-633830"
      },
      {
          "vegetarian": true,
          "vegan": true,
          "glutenFree": true,
          "dairyFree": true,
          "veryHealthy": false,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 14,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 2,
          "healthScore": 20,
          "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
          "license": "CC BY 3.0",
          "sourceName": "Foodista",
          "pricePerServing": 68.21,
          "extendedIngredients": [
              {
                  "id": 20040,
                  "aisle": "Pasta and Rice",
                  "image": "uncooked-brown-rice.png",
                  "consistency": "SOLID",
                  "name": "brown basmati rice",
                  "nameClean": "brown rice",
                  "original": "175 grams of cooked brown basmati rice",
                  "originalName": "cooked brown basmati rice",
                  "amount": 175.0,
                  "unit": "grams",
                  "meta": [
                      "cooked"
                  ],
                  "measures": {
                      "us": {
                          "amount": 6.173,
                          "unitShort": "oz",
                          "unitLong": "ounces"
                      },
                      "metric": {
                          "amount": 175.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 11124,
                  "aisle": "Produce",
                  "image": "sliced-carrot.png",
                  "consistency": "SOLID",
                  "name": "carrot",
                  "nameClean": "carrot",
                  "original": "1 carrot,coarsely grated",
                  "originalName": "carrot,coarsely grated",
                  "amount": 1.0,
                  "unit": "",
                  "meta": [
                      "grated"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 10111143,
                  "aisle": "Produce",
                  "image": "celery.jpg",
                  "consistency": "SOLID",
                  "name": "celery stalks",
                  "nameClean": "celery sticks",
                  "original": "2 celery stalks, sliced",
                  "originalName": "celery stalks, sliced",
                  "amount": 2.0,
                  "unit": "",
                  "meta": [
                      "sliced"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 2009,
                  "aisle": "Spices and Seasonings",
                  "image": "chili-powder.jpg",
                  "consistency": "SOLID",
                  "name": "chilly",
                  "nameClean": "chili powder",
                  "original": "1 small fresh green chilly,deseeded and finely chopped",
                  "originalName": "fresh green chilly,deseeded and finely chopped",
                  "amount": 1.0,
                  "unit": "small",
                  "meta": [
                      "fresh",
                      "green",
                      "deseeded",
                      "finely chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "small",
                          "unitLong": "small"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "small",
                          "unitLong": "small"
                      }
                  }
              },
              {
                  "id": 10116070,
                  "aisle": "Canned and Jarred",
                  "image": "red-lentils.png",
                  "consistency": "SOLID",
                  "name": "lentils",
                  "nameClean": "cooked red lentils",
                  "original": "75 grams of cooked red lentils",
                  "originalName": "cooked red lentils",
                  "amount": 75.0,
                  "unit": "grams",
                  "meta": [
                      "red",
                      "cooked"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.646,
                          "unitShort": "oz",
                          "unitLong": "ounces"
                      },
                      "metric": {
                          "amount": 75.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 11282,
                  "aisle": "Produce",
                  "image": "brown-onion.png",
                  "consistency": "SOLID",
                  "name": "onion",
                  "nameClean": "onion",
                  "original": "1 onion, chopped",
                  "originalName": "onion, chopped",
                  "amount": 1.0,
                  "unit": "",
                  "meta": [
                      "chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 9206,
                  "aisle": "Beverages",
                  "image": "orange-juice.jpg",
                  "consistency": "LIQUID",
                  "name": "orange juice",
                  "nameClean": "orange juice",
                  "original": "2 tablespoons fresh orange juice",
                  "originalName": "fresh orange juice",
                  "amount": 2.0,
                  "unit": "tablespoons",
                  "meta": [
                      "fresh"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              },
              {
                  "id": 1102047,
                  "aisle": "Spices and Seasonings",
                  "image": "salt-and-pepper.jpg",
                  "consistency": "SOLID",
                  "name": "salt and pepper",
                  "nameClean": "salt and pepper",
                  "original": "Salt and pepper as needed",
                  "originalName": "Salt and pepper as needed",
                  "amount": 3.0,
                  "unit": "servings",
                  "meta": [
                      "as needed"
                  ],
                  "measures": {
                      "us": {
                          "amount": 3.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 3.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": 11291,
                  "aisle": "Produce",
                  "image": "spring-onions.jpg",
                  "consistency": "SOLID",
                  "name": "spring onion including the part",
                  "nameClean": "spring onions",
                  "original": "1 spring onion finely chopped including the green part",
                  "originalName": "spring onion finely chopped including the green part",
                  "amount": 1.0,
                  "unit": "",
                  "meta": [
                      "green",
                      "finely chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 4669,
                  "aisle": "Oil, Vinegar, Salad Dressing",
                  "image": "vegetable-oil.jpg",
                  "consistency": "SOLID",
                  "name": "vegetable oil",
                  "nameClean": "vegetable oil",
                  "original": "4 tablespoons vegetable oil",
                  "originalName": "vegetable oil",
                  "amount": 4.0,
                  "unit": "tablespoons",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              },
              {
                  "id": 6615,
                  "aisle": "Canned and Jarred",
                  "image": "chicken-broth.png",
                  "consistency": "LIQUID",
                  "name": "vegetable stock",
                  "nameClean": "vegetable stock",
                  "original": "80 ml vegetable stock (if you have veg cubes,just drop it water to make stock)",
                  "originalName": "vegetable stock (if you have veg cubes,just drop it water to make stock)",
                  "amount": 80.0,
                  "unit": "ml",
                  "meta": [
                      "(if you have veg cubes,just drop it water to make stock)"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.687,
                          "unitShort": "fl. oz",
                          "unitLong": "fl. ozs"
                      },
                      "metric": {
                          "amount": 80.0,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 12061,
                  "aisle": "Nuts",
                  "image": "almonds.jpg",
                  "consistency": "SOLID",
                  "name": "almonds",
                  "nameClean": "almonds",
                  "original": "20 grams of whole almonds,sliced lengthways",
                  "originalName": "whole almonds,sliced lengthways",
                  "amount": 20.0,
                  "unit": "grams",
                  "meta": [
                      "whole",
                      "sliced"
                  ],
                  "measures": {
                      "us": {
                          "amount": 0.705,
                          "unitShort": "oz",
                          "unitLong": "ounces"
                      },
                      "metric": {
                          "amount": 20.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": -1,
                  "aisle": "?",
                  "image": null,
                  "consistency": "SOLID",
                  "name": "to garnish",
                  "nameClean": null,
                  "original": "Fresh leaves to garnish",
                  "originalName": "Fresh to garnish",
                  "amount": 1.0,
                  "unit": "leaves",
                  "meta": [
                      "fresh"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "leaf",
                          "unitLong": "leave"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "leaf",
                          "unitLong": "leave"
                      }
                  }
              }
          ],
          "id": 636295,
          "title": "Brown Rice Vegetable Pulao",
          "readyInMinutes": 45,
          "servings": 3,
          "sourceUrl": "http://www.foodista.com/recipe/YT7RSPZX/brown-rice-vegetable-pulao",
          "image": "https://spoonacular.com/recipeImages/636295-556x370.jpg",
          "imageType": "jpg",
          "summary": "You can never have too many hor d'oeuvre recipes, so give Brown Rice Vegetable Pulao a try. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>470 calories</b>, <b>9g of protein</b>, and <b>23g of fat</b> per serving. This recipe serves 3 and costs 68 cents per serving. This recipe is liked by 2 foodies and cooks. If you have spring onion including the part, lentils, chilly, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. With a spoonacular <b>score of 64%</b>, this dish is solid. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/brown-rice-vegetable-pulao-1369479\">Brown Rice Vegetable Pulao</a>, <a href=\"https://spoonacular.com/recipes/vrat-ke-chawal-ka-pulao-or-samvat-pulao-sama-rice-pulao-1212383\">vrat ke chawal ka pulao or samvat pulao | sama rice pulao</a>, and <a href=\"https://spoonacular.com/recipes/vrat-ke-chawal-ka-pulao-or-samvat-pulao-sama-rice-pulao-488167\">vrat ke chawal ka pulao or samvat pulao | sama rice pulao</a>.",
          "cuisines": [],
          "dishTypes": [
              "side dish",
              "antipasti",
              "starter",
              "snack",
              "appetizer",
              "antipasto",
              "hor d'oeuvre"
          ],
          "diets": [
              "gluten free",
              "dairy free",
              "lacto ovo vegetarian",
              "vegan"
          ],
          "occasions": [],
          "instructions": "<ol><li>Heat 2 tbsp of oil in a frying pan over medium heat. Add the chopped onion and saute well till softened.</li><li>Add the celery, carrot, chilli, spring onions and almonds. Stir-fry for 2 minutes or until the vegetables are done. Transfer to a bowl and set aside.</li><li>Add the remaining oil to the pan. Stir in the rice and lentils. Cook over medium heat, stirring for 2 minutes.</li><li>Reduce the heat and stir in the veg stock and orange juice. Season with salt and pepper.</li><li>Mix the already cooked vegetables to the pan. Toss with the rice for a few minutes until heated through.</li><li>Transfer to a warmed dish, garnish with leaves and serve.</li></ol>",
          "analyzedInstructions": [
              {
                  "name": "",
                  "steps": [
                      {
                          "number": 1,
                          "step": "Heat 2 tbsp of oil in a frying pan over medium heat.",
                          "ingredients": [
                              {
                                  "id": 4582,
                                  "name": "cooking oil",
                                  "localizedName": "cooking oil",
                                  "image": "vegetable-oil.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404645,
                                  "name": "frying pan",
                                  "localizedName": "frying pan",
                                  "image": "pan.png"
                              }
                          ]
                      },
                      {
                          "number": 2,
                          "step": "Add the chopped onion and saute well till softened.",
                          "ingredients": [
                              {
                                  "id": 11282,
                                  "name": "onion",
                                  "localizedName": "onion",
                                  "image": "brown-onion.png"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 3,
                          "step": "Add the celery, carrot, chilli, spring onions and almonds. Stir-fry for 2 minutes or until the vegetables are done.",
                          "ingredients": [
                              {
                                  "id": 11291,
                                  "name": "spring onions",
                                  "localizedName": "spring onions",
                                  "image": "spring-onions.jpg"
                              },
                              {
                                  "id": 11583,
                                  "name": "vegetable",
                                  "localizedName": "vegetable",
                                  "image": "mixed-vegetables.png"
                              },
                              {
                                  "id": 12061,
                                  "name": "almonds",
                                  "localizedName": "almonds",
                                  "image": "almonds.jpg"
                              },
                              {
                                  "id": 11124,
                                  "name": "carrot",
                                  "localizedName": "carrot",
                                  "image": "sliced-carrot.png"
                              },
                              {
                                  "id": 11143,
                                  "name": "celery",
                                  "localizedName": "celery",
                                  "image": "celery.jpg"
                              },
                              {
                                  "id": 11819,
                                  "name": "chili pepper",
                                  "localizedName": "chili pepper",
                                  "image": "red-chili.jpg"
                              }
                          ],
                          "equipment": [],
                          "length": {
                              "number": 2,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 4,
                          "step": "Transfer to a bowl and set aside.",
                          "ingredients": [],
                          "equipment": [
                              {
                                  "id": 404783,
                                  "name": "bowl",
                                  "localizedName": "bowl",
                                  "image": "bowl.jpg"
                              }
                          ]
                      },
                      {
                          "number": 5,
                          "step": "Add the remaining oil to the pan. Stir in the rice and lentils. Cook over medium heat, stirring for 2 minutes.Reduce the heat and stir in the veg stock and orange juice. Season with salt and pepper.",
                          "ingredients": [
                              {
                                  "id": 1102047,
                                  "name": "salt and pepper",
                                  "localizedName": "salt and pepper",
                                  "image": "salt-and-pepper.jpg"
                              },
                              {
                                  "id": 9206,
                                  "name": "orange juice",
                                  "localizedName": "orange juice",
                                  "image": "orange-juice.jpg"
                              },
                              {
                                  "id": 10316069,
                                  "name": "lentils",
                                  "localizedName": "lentils",
                                  "image": "lentils-brown.jpg"
                              },
                              {
                                  "id": 1006615,
                                  "name": "stock",
                                  "localizedName": "stock",
                                  "image": "chicken-broth.png"
                              },
                              {
                                  "id": 20444,
                                  "name": "rice",
                                  "localizedName": "rice",
                                  "image": "uncooked-white-rice.png"
                              },
                              {
                                  "id": 4582,
                                  "name": "cooking oil",
                                  "localizedName": "cooking oil",
                                  "image": "vegetable-oil.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404645,
                                  "name": "frying pan",
                                  "localizedName": "frying pan",
                                  "image": "pan.png"
                              }
                          ],
                          "length": {
                              "number": 2,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 6,
                          "step": "Mix the already cooked vegetables to the pan. Toss with the rice for a few minutes until heated through.",
                          "ingredients": [
                              {
                                  "id": 11583,
                                  "name": "vegetable",
                                  "localizedName": "vegetable",
                                  "image": "mixed-vegetables.png"
                              },
                              {
                                  "id": 20444,
                                  "name": "rice",
                                  "localizedName": "rice",
                                  "image": "uncooked-white-rice.png"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404645,
                                  "name": "frying pan",
                                  "localizedName": "frying pan",
                                  "image": "pan.png"
                              }
                          ]
                      },
                      {
                          "number": 7,
                          "step": "Transfer to a warmed dish, garnish with leaves and serve.",
                          "ingredients": [],
                          "equipment": []
                      }
                  ]
              }
          ],
          "originalId": null,
          "spoonacularScore": 54.94679641723633,
          "spoonacularSourceUrl": "https://spoonacular.com/brown-rice-vegetable-pulao-636295"
      },
      {
          "vegetarian": false,
          "vegan": false,
          "glutenFree": true,
          "dairyFree": false,
          "veryHealthy": false,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 5,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 28,
          "healthScore": 5,
          "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
          "license": "CC BY 3.0",
          "sourceName": "Foodista",
          "pricePerServing": 56.24,
          "extendedIngredients": [
              {
                  "id": 11959,
                  "aisle": "Produce",
                  "image": "arugula-or-rocket-salad.jpg",
                  "consistency": "SOLID",
                  "name": "arugula",
                  "nameClean": "arugula",
                  "original": "2 big handfuls of arugula, cleaned",
                  "originalName": "arugula, cleaned",
                  "amount": 2.0,
                  "unit": "handfuls",
                  "meta": [
                      "cleaned"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "handfuls",
                          "unitLong": "handfuls"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "handfuls",
                          "unitLong": "handfuls"
                      }
                  }
              },
              {
                  "id": 11215,
                  "aisle": "Produce",
                  "image": "garlic.png",
                  "consistency": "SOLID",
                  "name": "garlic",
                  "nameClean": "garlic",
                  "original": "1-2 cloves garlic",
                  "originalName": "garlic",
                  "amount": 1.0,
                  "unit": "cloves",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "cloves",
                          "unitLong": "clove"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "cloves",
                          "unitLong": "clove"
                      }
                  }
              },
              {
                  "id": 12155,
                  "aisle": "Baking",
                  "image": "walnuts.jpg",
                  "consistency": "SOLID",
                  "name": "walnuts",
                  "nameClean": "walnuts",
                  "original": "small handful of walnuts, crushed",
                  "originalName": "walnuts, crushed",
                  "amount": 1.0,
                  "unit": "small handful",
                  "meta": [
                      "crushed"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "small handful",
                          "unitLong": "small handful"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "small handful",
                          "unitLong": "small handful"
                      }
                  }
              },
              {
                  "id": 1034053,
                  "aisle": "Oil, Vinegar, Salad Dressing",
                  "image": "olive-oil.jpg",
                  "consistency": "LIQUID",
                  "name": "extra virgin olive oil",
                  "nameClean": "extra virgin olive oil",
                  "original": "extra virgin olive oil, as needed",
                  "originalName": "extra virgin olive oil, as needed",
                  "amount": 4.0,
                  "unit": "servings",
                  "meta": [
                      "as needed"
                  ],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": 9152,
                  "aisle": "Produce",
                  "image": "lemon-juice.jpg",
                  "consistency": "LIQUID",
                  "name": "juice of lemon",
                  "nameClean": "lemon juice",
                  "original": "lemon juice of half - 1 full lemon",
                  "originalName": "lemon juice of half full lemon",
                  "amount": 1.0,
                  "unit": "",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 1033,
                  "aisle": "Cheese",
                  "image": "parmesan.jpg",
                  "consistency": "SOLID",
                  "name": "parmesan cheese",
                  "nameClean": "parmesan",
                  "original": "small handful parmesan cheese, grated",
                  "originalName": "parmesan cheese, grated",
                  "amount": 1.0,
                  "unit": "small handful",
                  "meta": [
                      "grated"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "small handful",
                          "unitLong": "small handful"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "small handful",
                          "unitLong": "small handful"
                      }
                  }
              },
              {
                  "id": 1102047,
                  "aisle": "Spices and Seasonings",
                  "image": "salt-and-pepper.jpg",
                  "consistency": "SOLID",
                  "name": "salt & pepper",
                  "nameClean": "salt and pepper",
                  "original": "salt & pepper to taste",
                  "originalName": "salt & pepper to taste",
                  "amount": 4.0,
                  "unit": "servings",
                  "meta": [
                      "to taste"
                  ],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              }
          ],
          "id": 632790,
          "title": "Arugula Walnut Pesto",
          "readyInMinutes": 45,
          "servings": 4,
          "sourceUrl": "https://www.foodista.com/recipe/LC478RB6/arugula-walnut-pesto",
          "image": "https://spoonacular.com/recipeImages/632790-556x370.jpg",
          "imageType": "jpg",
          "summary": "Arugula Walnut Pesto might be just the condiment you are searching for. One serving contains <b>179 calories</b>, <b>2g of protein</b>, and <b>19g of fat</b>. For <b>56 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. 28 people were impressed by this recipe. Head to the store and pick up juice of lemon, garlic, walnuts, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It is a good option if you're following a <b>gluten free and primal</b> diet. Overall, this recipe earns a <b>pretty good spoonacular score of 60%</b>. <a href=\"https://spoonacular.com/recipes/arugula-walnut-pesto-568021\">Arugula Walnut Pesto</a>, <a href=\"https://spoonacular.com/recipes/arugula-walnut-pesto-8313\">Arugula Walnut Pesto</a>, and <a href=\"https://spoonacular.com/recipes/arugula-walnut-pesto-489854\">Arugula Walnut Pesto</a> are very similar to this recipe.",
          "cuisines": [],
          "dishTypes": [
              "condiment",
              "dip",
              "sauce",
              "spread"
          ],
          "diets": [
              "gluten free",
              "primal"
          ],
          "occasions": [],
          "instructions": "With this recipe you play with the amount of ingredients based on your likes & the strength of the garlic, arugula, etc.\nBest to use a mortar & pestle but if you dont have one the food processor works just fine.\nIn the mortal & pestle or the processor start off with your arugula and a drizzle of oil to get it working. Once pulverized add in 1 clove of garlic & continue to grind. Now add in your nuts, lemon juice and a bit of salt & pepper & give it one more grind. At this point abandon the mortal & pestle or the machine & dump the mixture into a bowl.\nAdd a small handful of cheese and while continuously mixing add in the olive oil until you achieve your desired consistency. For crostini I would leave as a paste, for a pasta sauce keep it a bit looser - this is all based on the amount of olive oil you use.\nNow recheck your seasonings - more garlic? A little light on the acid? Add a squeeze of lemon. Is it flat? A pinch of salt will wake it up. Let sit for an hour or so to let the flavors incorporate. Store in the fridge. It will last a few days before the arugula will turn.\nServe tossed over fresh pasta or rubbed over toasty bread with a ribbon of parmesan, a delicious topping for pizza or a beautiful frittata with a dollop of arugula pesto! There are a million ways to use this - enjoy!",
          "analyzedInstructions": [
              {
                  "name": "",
                  "steps": [
                      {
                          "number": 1,
                          "step": "With this recipe you play with the amount of ingredients based on your likes & the strength of the garlic, arugula, etc.",
                          "ingredients": [
                              {
                                  "id": 11959,
                                  "name": "arugula",
                                  "localizedName": "arugula",
                                  "image": "arugula-or-rocket-salad.jpg"
                              },
                              {
                                  "id": 11215,
                                  "name": "garlic",
                                  "localizedName": "garlic",
                                  "image": "garlic.png"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 2,
                          "step": "Best to use a mortar & pestle but if you dont have one the food processor works just fine.",
                          "ingredients": [],
                          "equipment": [
                              {
                                  "id": 404771,
                                  "name": "food processor",
                                  "localizedName": "food processor",
                                  "image": "food-processor.png"
                              },
                              {
                                  "id": 404751,
                                  "name": "mortar and pestle",
                                  "localizedName": "mortar and pestle",
                                  "image": "mortar-and-pestle.jpg"
                              }
                          ]
                      },
                      {
                          "number": 3,
                          "step": "In the mortal & pestle or the processor start off with your arugula and a drizzle of oil to get it working. Once pulverized add in 1 clove of garlic & continue to grind. Now add in your nuts, lemon juice and a bit of salt & pepper & give it one more grind. At this point abandon the mortal & pestle or the machine & dump the mixture into a bowl.",
                          "ingredients": [
                              {
                                  "id": 1102047,
                                  "name": "salt and pepper",
                                  "localizedName": "salt and pepper",
                                  "image": "salt-and-pepper.jpg"
                              },
                              {
                                  "id": 9152,
                                  "name": "lemon juice",
                                  "localizedName": "lemon juice",
                                  "image": "lemon-juice.jpg"
                              },
                              {
                                  "id": 11959,
                                  "name": "arugula",
                                  "localizedName": "arugula",
                                  "image": "arugula-or-rocket-salad.jpg"
                              },
                              {
                                  "id": 11215,
                                  "name": "garlic",
                                  "localizedName": "garlic",
                                  "image": "garlic.png"
                              },
                              {
                                  "id": 1002011,
                                  "name": "clove",
                                  "localizedName": "clove",
                                  "image": "cloves.jpg"
                              },
                              {
                                  "id": 12135,
                                  "name": "nuts",
                                  "localizedName": "nuts",
                                  "image": "nuts-mixed.jpg"
                              },
                              {
                                  "id": 4582,
                                  "name": "cooking oil",
                                  "localizedName": "cooking oil",
                                  "image": "vegetable-oil.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404751,
                                  "name": "mortar and pestle",
                                  "localizedName": "mortar and pestle",
                                  "image": "mortar-and-pestle.jpg"
                              },
                              {
                                  "id": 404783,
                                  "name": "bowl",
                                  "localizedName": "bowl",
                                  "image": "bowl.jpg"
                              }
                          ]
                      },
                      {
                          "number": 4,
                          "step": "Add a small handful of cheese and while continuously mixing add in the olive oil until you achieve your desired consistency. For crostini I would leave as a paste, for a pasta sauce keep it a bit looser - this is all based on the amount of olive oil you use.",
                          "ingredients": [
                              {
                                  "id": 10011549,
                                  "name": "pasta sauce",
                                  "localizedName": "pasta sauce",
                                  "image": "tomato-sauce-or-pasta-sauce.jpg"
                              },
                              {
                                  "id": 4053,
                                  "name": "olive oil",
                                  "localizedName": "olive oil",
                                  "image": "olive-oil.jpg"
                              },
                              {
                                  "id": 10018033,
                                  "name": "crostini",
                                  "localizedName": "crostini",
                                  "image": "sliced-baguette-or-crostini.jpg"
                              },
                              {
                                  "id": 1041009,
                                  "name": "cheese",
                                  "localizedName": "cheese",
                                  "image": "cheddar-cheese.png"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 5,
                          "step": "Now recheck your seasonings - more garlic? A little light on the acid?",
                          "ingredients": [
                              {
                                  "id": 1042027,
                                  "name": "seasoning",
                                  "localizedName": "seasoning",
                                  "image": "seasoning.png"
                              },
                              {
                                  "id": 11215,
                                  "name": "garlic",
                                  "localizedName": "garlic",
                                  "image": "garlic.png"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 6,
                          "step": "Add a squeeze of lemon. Is it flat? A pinch of salt will wake it up.",
                          "ingredients": [
                              {
                                  "id": 9150,
                                  "name": "lemon",
                                  "localizedName": "lemon",
                                  "image": "lemon.png"
                              },
                              {
                                  "id": 2047,
                                  "name": "salt",
                                  "localizedName": "salt",
                                  "image": "salt.jpg"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 7,
                          "step": "Let sit for an hour or so to let the flavors incorporate. Store in the fridge. It will last a few days before the arugula will turn.",
                          "ingredients": [
                              {
                                  "id": 11959,
                                  "name": "arugula",
                                  "localizedName": "arugula",
                                  "image": "arugula-or-rocket-salad.jpg"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 8,
                          "step": "Serve tossed over fresh pasta or rubbed over toasty bread with a ribbon of parmesan, a delicious topping for pizza or a beautiful frittata with a dollop of arugula pesto! There are a million ways to use this - enjoy!",
                          "ingredients": [
                              {
                                  "id": 20093,
                                  "name": "fresh pasta",
                                  "localizedName": "fresh pasta",
                                  "image": "fusilli.jpg"
                              },
                              {
                                  "id": 1033,
                                  "name": "parmesan",
                                  "localizedName": "parmesan",
                                  "image": "parmesan.jpg"
                              },
                              {
                                  "id": 11959,
                                  "name": "arugula",
                                  "localizedName": "arugula",
                                  "image": "arugula-or-rocket-salad.jpg"
                              },
                              {
                                  "id": 18064,
                                  "name": "bread",
                                  "localizedName": "bread",
                                  "image": "white-bread.jpg"
                              },
                              {
                                  "id": 93698,
                                  "name": "pesto",
                                  "localizedName": "pesto",
                                  "image": "basil-pesto.png"
                              }
                          ],
                          "equipment": []
                      }
                  ]
              }
          ],
          "originalId": null,
          "spoonacularScore": 51.150142669677734,
          "spoonacularSourceUrl": "https://spoonacular.com/arugula-walnut-pesto-632790"
      },
      {
          "vegetarian": false,
          "vegan": false,
          "glutenFree": true,
          "dairyFree": true,
          "veryHealthy": false,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 31,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 3,
          "healthScore": 21,
          "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
          "license": "CC BY 3.0",
          "sourceName": "Foodista",
          "pricePerServing": 362.9,
          "extendedIngredients": [
              {
                  "id": 1015062,
                  "aisle": "Meat",
                  "image": "chicken-tenders-or-fingers.png",
                  "consistency": "SOLID",
                  "name": "chicken tenderloins",
                  "nameClean": "chicken tenders",
                  "original": "1 1/2 pounds Boneless, Skinless Chicken Tenderloins",
                  "originalName": "Boneless, Skinless Chicken Tenderloins",
                  "amount": 1.5,
                  "unit": "pounds",
                  "meta": [
                      "boneless",
                      "skinless"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.5,
                          "unitShort": "lb",
                          "unitLong": "pounds"
                      },
                      "metric": {
                          "amount": 680.389,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 1123,
                  "aisle": "Milk, Eggs, Other Dairy",
                  "image": "egg.png",
                  "consistency": "SOLID",
                  "name": "egg",
                  "nameClean": "egg",
                  "original": "1 whole Egg",
                  "originalName": "whole Egg",
                  "amount": 1.0,
                  "unit": "",
                  "meta": [
                      "whole"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 2047,
                  "aisle": "Spices and Seasonings",
                  "image": "salt.jpg",
                  "consistency": "SOLID",
                  "name": "salt",
                  "nameClean": "table salt",
                  "original": "1/2 teaspoon Salt",
                  "originalName": "Salt",
                  "amount": 0.5,
                  "unit": "teaspoon",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 0.5,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      },
                      "metric": {
                          "amount": 0.5,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      }
                  }
              },
              {
                  "id": 14412,
                  "aisle": "Beverages",
                  "image": "water.png",
                  "consistency": "LIQUID",
                  "name": "water",
                  "nameClean": "water",
                  "original": "1 teaspoon Water",
                  "originalName": "Water",
                  "amount": 1.0,
                  "unit": "teaspoon",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      }
                  }
              },
              {
                  "id": 12109,
                  "aisle": "Baking",
                  "image": "coconut-flakes.png",
                  "consistency": "SOLID",
                  "name": "coconut flakes",
                  "nameClean": "sweetened coconut flakes",
                  "original": "2 cups Sweetened Coconut Flakes",
                  "originalName": "Sweetened Coconut Flakes",
                  "amount": 2.0,
                  "unit": "cups",
                  "meta": [
                      "sweetened"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 170.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 12109,
                  "aisle": "Baking",
                  "image": "shredded-coconut.jpg",
                  "consistency": "SOLID",
                  "name": "coconut flakes",
                  "nameClean": "sweetened coconut flakes",
                  "original": "2 cups Sweetened Coconut Flakes",
                  "originalName": "Sweetened Coconut Flakes",
                  "amount": 2.0,
                  "unit": "cups",
                  "meta": [
                      "sweetened"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 170.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 10011282,
                  "aisle": "Produce",
                  "image": "red-onion.png",
                  "consistency": "SOLID",
                  "name": "onion",
                  "nameClean": "red onion",
                  "original": "1 whole Red Onion, Chopped",
                  "originalName": "whole Red Onion, Chopped",
                  "amount": 1.0,
                  "unit": "",
                  "meta": [
                      "whole",
                      "red",
                      "chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 12087,
                  "aisle": "Nuts",
                  "image": "cashews.jpg",
                  "consistency": "SOLID",
                  "name": "cashews",
                  "nameClean": "cashews",
                  "original": "1 cup Cashews",
                  "originalName": "Cashews",
                  "amount": 1.0,
                  "unit": "cup",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "cup",
                          "unitLong": "cup"
                      },
                      "metric": {
                          "amount": 129.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 11252,
                  "aisle": "Produce",
                  "image": "iceberg-lettuce.jpg",
                  "consistency": "SOLID",
                  "name": "weight lettuce",
                  "nameClean": "lettuce",
                  "original": "5 ounces weight Lettuce Chopped",
                  "originalName": "weight Lettuce Chopped",
                  "amount": 5.0,
                  "unit": "ounces",
                  "meta": [
                      "chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 5.0,
                          "unitShort": "oz",
                          "unitLong": "ounces"
                      },
                      "metric": {
                          "amount": 141.748,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 10711529,
                  "aisle": "Produce",
                  "image": "tomato.png",
                  "consistency": "SOLID",
                  "name": "tomatoes",
                  "nameClean": "whole tomato",
                  "original": "2 whole Tomatoes, Chopped",
                  "originalName": "whole Tomatoes, Chopped",
                  "amount": 2.0,
                  "unit": "",
                  "meta": [
                      "whole",
                      "chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 1034053,
                  "aisle": "Oil, Vinegar, Salad Dressing",
                  "image": "olive-oil.jpg",
                  "consistency": "LIQUID",
                  "name": "extra virgin olive oil",
                  "nameClean": "extra virgin olive oil",
                  "original": "2 tablespoons Extra Virgin Olive Oil",
                  "originalName": "Extra Virgin Olive Oil",
                  "amount": 2.0,
                  "unit": "tablespoons",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              },
              {
                  "id": 98975,
                  "aisle": "Condiments",
                  "image": "mayonnaise.png",
                  "consistency": "LIQUID",
                  "name": "veganaise",
                  "nameClean": "vegan mayonnaise",
                  "original": "3/4 cup Veganaise (vegan Mayo)",
                  "originalName": "Veganaise (vegan Mayo)",
                  "amount": 0.75,
                  "unit": "cup",
                  "meta": [
                      "(vegan Mayo)"
                  ],
                  "measures": {
                      "us": {
                          "amount": 0.75,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 168.0,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 19912,
                  "aisle": "Ethnic Foods",
                  "image": "agave.png",
                  "consistency": "LIQUID",
                  "name": "agave nectar",
                  "nameClean": "agave",
                  "original": "3/4 cup Agave Nectar (or Honey)",
                  "originalName": "Agave Nectar (or Honey)",
                  "amount": 0.75,
                  "unit": "cup",
                  "meta": [
                      "(or Honey)"
                  ],
                  "measures": {
                      "us": {
                          "amount": 0.75,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 165.0,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 1042046,
                  "aisle": "Condiments",
                  "image": "regular-mustard.jpg",
                  "consistency": "LIQUID",
                  "name": "mustard",
                  "nameClean": "yellow mustard",
                  "original": "2 tablespoons Prepared Yellow Mustard",
                  "originalName": "Prepared Yellow Mustard",
                  "amount": 2.0,
                  "unit": "tablespoons",
                  "meta": [
                      "yellow",
                      "prepared"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              },
              {
                  "id": 2033,
                  "aisle": "Spices and Seasonings",
                  "image": "poppyseed.png",
                  "consistency": "SOLID",
                  "name": "poppy seeds",
                  "nameClean": "poppy seeds",
                  "original": "1 tablespoon Poppy Seeds",
                  "originalName": "Poppy Seeds",
                  "amount": 1.0,
                  "unit": "tablespoon",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "Tbsp",
                          "unitLong": "Tbsp"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "Tbsp",
                          "unitLong": "Tbsp"
                      }
                  }
              },
              {
                  "id": 6971,
                  "aisle": "Condiments",
                  "image": "dark-sauce.jpg",
                  "consistency": "LIQUID",
                  "name": "worcestershire sauce",
                  "nameClean": "worcestershire sauce",
                  "original": "1 dash Worcestershire Sauce (optional)",
                  "originalName": "Worcestershire Sauce (optional)",
                  "amount": 1.0,
                  "unit": "dash",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "dash",
                          "unitLong": "dash"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "dash",
                          "unitLong": "dash"
                      }
                  }
              }
          ],
          "id": 644813,
          "title": "Gluten Free Coconut Chicken Salad",
          "readyInMinutes": 45,
          "servings": 5,
          "sourceUrl": "https://www.foodista.com/recipe/Y27WDZ62/gluten-free-coconut-chicken-salad",
          "image": "https://spoonacular.com/recipeImages/644813-556x370.jpg",
          "imageType": "jpg",
          "summary": "If you want to add more <b>gluten free and dairy free</b> recipes to your recipe box, Gluten Free Coconut Chicken Salad might be a recipe you should try. This recipe makes 5 servings with <b>868 calories</b>, <b>37g of protein</b>, and <b>54g of fat</b> each. For <b>$3.63 per serving</b>, this recipe <b>covers 30%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up water, cashews, veganaise, and a few other things to make it today. It works best as a main course, and is done in approximately <b>45 minutes</b>. 3 people were glad they tried this recipe. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 61%</b>. This score is pretty good. Similar recipes are <a href=\"https://spoonacular.com/recipes/gluten-free-dairy-free-sugar-free-chinese-chicken-salad-644826\">Gluten Free Dairy Free Sugar Free Chinese Chicken Salad</a>, <a href=\"https://spoonacular.com/recipes/gluten-free-dairy-free-sugar-free-chinese-chicken-salad-1364955\">Gluten Free Dairy Free Sugar Free Chinese Chicken Salad</a>, and <a href=\"https://spoonacular.com/recipes/sugar-free-crustless-coconut-custard-pie-dairy-free-gluten-free-low-carb-556891\">Sugar Free Crustless Coconut Custard Pie {Dairy Free, Gluten Free & Low Carb}</a>.",
          "cuisines": [],
          "dishTypes": [
              "lunch",
              "main course",
              "main dish",
              "dinner"
          ],
          "diets": [
              "gluten free",
              "dairy free"
          ],
          "occasions": [],
          "instructions": "Preheat the oven to 350 degrees.\nDefrost the chicken tenderloins if necessary.\nIn a shallow dish, beat the egg and add in the water and salt.\nIn another shallow bowl, pour in the sweetened coconut.\nDip the chicken in the egg, then in the coconut. Press to coat and set aside.\nIn a large, ovenproof skillet, heat the oil over medium-high heat.\nAdd the chicken and cook, turning once, until golden, about 3 minutes. (Do not overcrowd your panI had to make my chicken in 2 batches)\nTransfer the skillet to the oven and bake until cooked through, about 12 minutes.\nServe the chicken on top of a salad with tomatoes, cashews, onion, and whatever else your heart desires.\nFor the dressingjust whisk all the ingredients in a medium-sized dish. Then, drizzle the sweet honey mustard dressing on top and gobble up!",
          "analyzedInstructions": [
              {
                  "name": "",
                  "steps": [
                      {
                          "number": 1,
                          "step": "Preheat the oven to 350 degrees.",
                          "ingredients": [],
                          "equipment": [
                              {
                                  "id": 404784,
                                  "name": "oven",
                                  "localizedName": "oven",
                                  "image": "oven.jpg"
                              }
                          ]
                      },
                      {
                          "number": 2,
                          "step": "Defrost the chicken tenderloins if necessary.",
                          "ingredients": [
                              {
                                  "id": 1015062,
                                  "name": "chicken tenderloins",
                                  "localizedName": "chicken tenderloins",
                                  "image": "chicken-tenders-or-fingers.png"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 3,
                          "step": "In a shallow dish, beat the egg and add in the water and salt.",
                          "ingredients": [
                              {
                                  "id": 14412,
                                  "name": "water",
                                  "localizedName": "water",
                                  "image": "water.png"
                              },
                              {
                                  "id": 2047,
                                  "name": "salt",
                                  "localizedName": "salt",
                                  "image": "salt.jpg"
                              },
                              {
                                  "id": 1123,
                                  "name": "egg",
                                  "localizedName": "egg",
                                  "image": "egg.png"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 4,
                          "step": "In another shallow bowl, pour in the sweetened coconut.",
                          "ingredients": [
                              {
                                  "id": 12109,
                                  "name": "sweetened coconut",
                                  "localizedName": "sweetened coconut",
                                  "image": "shredded-coconut.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404783,
                                  "name": "bowl",
                                  "localizedName": "bowl",
                                  "image": "bowl.jpg"
                              }
                          ]
                      },
                      {
                          "number": 5,
                          "step": "Dip the chicken in the egg, then in the coconut. Press to coat and set aside.",
                          "ingredients": [
                              {
                                  "id": 0,
                                  "name": "chicken",
                                  "localizedName": "chicken",
                                  "image": "whole-chicken.jpg"
                              },
                              {
                                  "id": 12104,
                                  "name": "coconut",
                                  "localizedName": "coconut",
                                  "image": "coconut.jpg"
                              },
                              {
                                  "id": 0,
                                  "name": "dip",
                                  "localizedName": "dip",
                                  "image": ""
                              },
                              {
                                  "id": 1123,
                                  "name": "egg",
                                  "localizedName": "egg",
                                  "image": "egg.png"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 6,
                          "step": "In a large, ovenproof skillet, heat the oil over medium-high heat.",
                          "ingredients": [
                              {
                                  "id": 4582,
                                  "name": "cooking oil",
                                  "localizedName": "cooking oil",
                                  "image": "vegetable-oil.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404645,
                                  "name": "frying pan",
                                  "localizedName": "frying pan",
                                  "image": "pan.png"
                              }
                          ]
                      },
                      {
                          "number": 7,
                          "step": "Add the chicken and cook, turning once, until golden, about 3 minutes. (Do not overcrowd your panI had to make my chicken in 2 batches)",
                          "ingredients": [
                              {
                                  "id": 0,
                                  "name": "chicken",
                                  "localizedName": "chicken",
                                  "image": "whole-chicken.jpg"
                              }
                          ],
                          "equipment": [],
                          "length": {
                              "number": 3,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 8,
                          "step": "Transfer the skillet to the oven and bake until cooked through, about 12 minutes.",
                          "ingredients": [],
                          "equipment": [
                              {
                                  "id": 404784,
                                  "name": "oven",
                                  "localizedName": "oven",
                                  "image": "oven.jpg"
                              },
                              {
                                  "id": 404645,
                                  "name": "frying pan",
                                  "localizedName": "frying pan",
                                  "image": "pan.png"
                              }
                          ],
                          "length": {
                              "number": 12,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 9,
                          "step": "Serve the chicken on top of a salad with tomatoes, cashews, onion, and whatever else your heart desires.",
                          "ingredients": [
                              {
                                  "id": 11529,
                                  "name": "tomato",
                                  "localizedName": "tomato",
                                  "image": "tomato.png"
                              },
                              {
                                  "id": 12087,
                                  "name": "cashews",
                                  "localizedName": "cashews",
                                  "image": "cashews.jpg"
                              },
                              {
                                  "id": 0,
                                  "name": "chicken",
                                  "localizedName": "chicken",
                                  "image": "whole-chicken.jpg"
                              },
                              {
                                  "id": 11282,
                                  "name": "onion",
                                  "localizedName": "onion",
                                  "image": "brown-onion.png"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 10,
                          "step": "For the dressingjust whisk all the ingredients in a medium-sized dish. Then, drizzle the sweet honey mustard dressing on top and gobble up!",
                          "ingredients": [
                              {
                                  "id": 99227,
                                  "name": "honey mustard",
                                  "localizedName": "honey mustard",
                                  "image": "regular-mustard.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404661,
                                  "name": "whisk",
                                  "localizedName": "whisk",
                                  "image": "whisk.png"
                              }
                          ]
                      }
                  ]
              }
          ],
          "originalId": null,
          "spoonacularScore": 69.80339050292969,
          "spoonacularSourceUrl": "https://spoonacular.com/gluten-free-coconut-chicken-salad-644813"
      },
      {
          "vegetarian": false,
          "vegan": false,
          "glutenFree": true,
          "dairyFree": false,
          "veryHealthy": true,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 9,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 2,
          "healthScore": 76,
          "creditsText": "foodista.com",
          "sourceName": "foodista.com",
          "pricePerServing": 583.79,
          "extendedIngredients": [
              {
                  "id": 2069,
                  "aisle": "Oil, Vinegar, Salad Dressing",
                  "image": "balsamic-vinegar.jpg",
                  "consistency": "LIQUID",
                  "name": "balsamic vinegar",
                  "nameClean": "balsamic vinegar",
                  "original": "2 tablespoons balsamic vinegar",
                  "originalName": "balsamic vinegar",
                  "amount": 2.0,
                  "unit": "tablespoons",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              },
              {
                  "id": 99255,
                  "aisle": "Cheese",
                  "image": "feta.png",
                  "consistency": "SOLID",
                  "name": "feta",
                  "nameClean": "reduced fat feta cheese",
                  "original": "1/2 cup low fat feta, crumbled",
                  "originalName": "low fat feta, crumbled",
                  "amount": 0.5,
                  "unit": "cup",
                  "meta": [
                      "low fat",
                      "crumbled"
                  ],
                  "measures": {
                      "us": {
                          "amount": 0.5,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 75.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 23657,
                  "aisle": "Meat",
                  "image": "flank-steak.jpg",
                  "consistency": "SOLID",
                  "name": "flank steak",
                  "nameClean": "flank steak",
                  "original": "8 ounces flank steak",
                  "originalName": "flank steak",
                  "amount": 8.0,
                  "unit": "ounces",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 8.0,
                          "unitShort": "oz",
                          "unitLong": "ounces"
                      },
                      "metric": {
                          "amount": 226.796,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 11215,
                  "aisle": "Produce",
                  "image": "garlic.png",
                  "consistency": "SOLID",
                  "name": "garlic",
                  "nameClean": "garlic",
                  "original": "1 clove garlic, finely minced",
                  "originalName": "garlic, finely minced",
                  "amount": 1.0,
                  "unit": "clove",
                  "meta": [
                      "finely minced"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "clove",
                          "unitLong": "clove"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "clove",
                          "unitLong": "clove"
                      }
                  }
              },
              {
                  "id": 1022034,
                  "aisle": "Spices and Seasonings",
                  "image": "seasoning.png",
                  "consistency": "SOLID",
                  "name": "grill seasoning",
                  "nameClean": "montreal steak seasoning",
                  "original": "Your favorite grill seasoning",
                  "originalName": "Your favorite grill seasoning",
                  "amount": 2.0,
                  "unit": "servings",
                  "meta": [
                      "your favorite"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": 9152,
                  "aisle": "Produce",
                  "image": "lemon-juice.jpg",
                  "consistency": "LIQUID",
                  "name": "lemon juice",
                  "nameClean": "lemon juice",
                  "original": "1 teaspoon lemon juice, fresh squeezed",
                  "originalName": "lemon juice, fresh squeezed",
                  "amount": 1.0,
                  "unit": "teaspoon",
                  "meta": [
                      "fresh"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      }
                  }
              },
              {
                  "id": 9156,
                  "aisle": "Produce",
                  "image": "zest-lemon.jpg",
                  "consistency": "SOLID",
                  "name": "lemon zest",
                  "nameClean": "lemon peel",
                  "original": "1/2 teaspoon lemon zest",
                  "originalName": "lemon zest",
                  "amount": 0.5,
                  "unit": "teaspoon",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 0.5,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      },
                      "metric": {
                          "amount": 0.5,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      }
                  }
              },
              {
                  "id": 21052,
                  "aisle": "Produce",
                  "image": "mixed-greens-or-mesclun.jpg",
                  "consistency": "SOLID",
                  "name": "salad greens",
                  "nameClean": "mesclun",
                  "original": "4 cups mixed salad greens",
                  "originalName": "mixed salad greens",
                  "amount": 4.0,
                  "unit": "cups",
                  "meta": [
                      "mixed"
                  ],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 160.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 11260,
                  "aisle": "Produce",
                  "image": "mushrooms-white.jpg",
                  "consistency": "SOLID",
                  "name": "mushroom",
                  "nameClean": "fresh mushrooms",
                  "original": "1 cup mushroom , sliced",
                  "originalName": "mushroom , sliced",
                  "amount": 1.0,
                  "unit": "cup",
                  "meta": [
                      "sliced"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "cup",
                          "unitLong": "cup"
                      },
                      "metric": {
                          "amount": 96.0,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 11260,
                  "aisle": "Produce",
                  "image": "mushrooms.png",
                  "consistency": "SOLID",
                  "name": "mushroom",
                  "nameClean": "fresh mushrooms",
                  "original": "1 cup mushroom , sliced",
                  "originalName": "mushroom , sliced",
                  "amount": 1.0,
                  "unit": "cup",
                  "meta": [
                      "sliced"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "cup",
                          "unitLong": "cup"
                      },
                      "metric": {
                          "amount": 96.0,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 4053,
                  "aisle": "Oil, Vinegar, Salad Dressing",
                  "image": "olive-oil.jpg",
                  "consistency": "SOLID",
                  "name": "olive oil",
                  "nameClean": "olive oil",
                  "original": "1/2 tablespoon olive oil",
                  "originalName": "olive oil",
                  "amount": 0.5,
                  "unit": "tablespoon",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 0.5,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 0.5,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              },
              {
                  "id": 9195,
                  "aisle": "Canned and Jarred",
                  "image": "olives-mixed.jpg",
                  "consistency": "SOLID",
                  "name": "olives",
                  "nameClean": "olives",
                  "original": "10 mediums olives, sliced",
                  "originalName": "s olives, sliced",
                  "amount": 10.0,
                  "unit": "medium",
                  "meta": [
                      "sliced"
                  ],
                  "measures": {
                      "us": {
                          "amount": 10.0,
                          "unitShort": "medium",
                          "unitLong": "mediums"
                      },
                      "metric": {
                          "amount": 10.0,
                          "unitShort": "medium",
                          "unitLong": "mediums"
                      }
                  }
              },
              {
                  "id": 2027,
                  "aisle": "Spices and Seasonings",
                  "image": "oregano.jpg",
                  "consistency": "SOLID",
                  "name": "oregano",
                  "nameClean": "oregano",
                  "original": "2 tablespoons fresh oregano, minced",
                  "originalName": "fresh oregano, minced",
                  "amount": 2.0,
                  "unit": "tablespoons",
                  "meta": [
                      "fresh",
                      "minced"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              },
              {
                  "id": 10211821,
                  "aisle": "Produce",
                  "image": "yellow-bell-pepper.jpg",
                  "consistency": "SOLID",
                  "name": "bell pepper",
                  "nameClean": "bell pepper",
                  "original": "pepper",
                  "originalName": "pepper",
                  "amount": 2.0,
                  "unit": "servings",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": 10211821,
                  "aisle": "Produce",
                  "image": "bell-pepper-orange.png",
                  "consistency": "SOLID",
                  "name": "bell pepper",
                  "nameClean": "bell pepper",
                  "original": "pepper",
                  "originalName": "pepper",
                  "amount": 2.0,
                  "unit": "servings",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": 10011282,
                  "aisle": "Produce",
                  "image": "red-onion.png",
                  "consistency": "SOLID",
                  "name": "onion",
                  "nameClean": "red onion",
                  "original": "1/4 cup red onion, thinly sliced",
                  "originalName": "red onion, thinly sliced",
                  "amount": 0.25,
                  "unit": "cup",
                  "meta": [
                      "red",
                      "thinly sliced"
                  ],
                  "measures": {
                      "us": {
                          "amount": 0.25,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 40.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 1032009,
                  "aisle": "Spices and Seasonings",
                  "image": "red-pepper-flakes.jpg",
                  "consistency": "SOLID",
                  "name": "pepper flakes",
                  "nameClean": "red pepper flakes",
                  "original": "pinch red pepper flakes",
                  "originalName": "pinch red pepper flakes",
                  "amount": 1.0,
                  "unit": "pinch",
                  "meta": [
                      "red"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "pinch",
                          "unitLong": "pinch"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "pinch",
                          "unitLong": "pinch"
                      }
                  }
              },
              {
                  "id": 10211529,
                  "aisle": "Produce",
                  "image": "roma-tomatoes.png",
                  "consistency": "SOLID",
                  "name": "roma tomato",
                  "nameClean": "italian tomato",
                  "original": "2 large roma tomato, diced",
                  "originalName": "roma tomato, diced",
                  "amount": 2.0,
                  "unit": "large",
                  "meta": [
                      "diced"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "large",
                          "unitLong": "larges"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "large",
                          "unitLong": "larges"
                      }
                  }
              },
              {
                  "id": 2047,
                  "aisle": "Spices and Seasonings",
                  "image": "salt.jpg",
                  "consistency": "SOLID",
                  "name": "salt",
                  "nameClean": "table salt",
                  "original": "salt",
                  "originalName": "salt",
                  "amount": 2.0,
                  "unit": "servings",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              }
          ],
          "id": 643059,
          "title": "Flank Steak With Garlicky Mediterranean Salad",
          "readyInMinutes": 15,
          "servings": 2,
          "sourceUrl": "http://www.foodista.com/recipe/DRSBMGKW/flank-steak-with-garlicky-mediterranean-salad",
          "image": "https://spoonacular.com/recipeImages/643059-556x370.jpg",
          "imageType": "jpg",
          "summary": "Flank Steak With Garlicky Mediterranean Salad requires roughly <b>15 minutes</b> from start to finish. This main course has <b>394 calories</b>, <b>37g of protein</b>, and <b>18g of fat</b> per serving. This gluten free and primal recipe serves 2 and costs <b>$5.84 per serving</b>. This recipe from Foodista requires roma tomato, onion, olives, and olive oil. This recipe is liked by 2 foodies and cooks. <b>valentin day</b> will be even more special with this recipe. All things considered, we decided this recipe <b>deserves a spoonacular score of 88%</b>. This score is amazing. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/flank-steak-with-garlicky-mediterranean-salad-1384131\">Flank Steak With Garlicky Mediterranean Salad</a>, <a href=\"https://spoonacular.com/recipes/flank-steak-salad-410417\">Flank Steak Salad</a>, and <a href=\"https://spoonacular.com/recipes/flank-steak-spinach-salad-411683\">Flank Steak Spinach Salad</a>.",
          "cuisines": [],
          "dishTypes": [
              "lunch",
              "main course",
              "main dish",
              "dinner"
          ],
          "diets": [
              "gluten free",
              "primal"
          ],
          "occasions": [
              "valentine's day",
              "father's day"
          ],
          "instructions": "<ol><li>Combine olive oil, balsamic vinegar, lemon zest, lemon juice, oregano, garlic and red pepper in a small bowl.</li><li>Add lettuce, feta, mushrooms, onion, tomato and olives in a salad bowl.</li><li>Toss salad with dressing.</li><li>Season flank steak with your favorite grill seasoning. I love Martha Stewarts recipe. </li><li>Heat grill pan over medium heat. Spray with cooking spray. Add steak and cook 4  8 minutes per side, depending on how thick and your desired doneness. Let rest for 5 minutes or more before slicing.</li><li>Serve with steak.</li></ol>",
          "analyzedInstructions": [
              {
                  "name": "",
                  "steps": [
                      {
                          "number": 1,
                          "step": "Combine olive oil, balsamic vinegar, lemon zest, lemon juice, oregano, garlic and red pepper in a small bowl.",
                          "ingredients": [
                              {
                                  "id": 2069,
                                  "name": "balsamic vinegar",
                                  "localizedName": "balsamic vinegar",
                                  "image": "balsamic-vinegar.jpg"
                              },
                              {
                                  "id": 9152,
                                  "name": "lemon juice",
                                  "localizedName": "lemon juice",
                                  "image": "lemon-juice.jpg"
                              },
                              {
                                  "id": 9156,
                                  "name": "lemon zest",
                                  "localizedName": "lemon zest",
                                  "image": "zest-lemon.jpg"
                              },
                              {
                                  "id": 11821,
                                  "name": "red pepper",
                                  "localizedName": "red pepper",
                                  "image": "red-pepper.jpg"
                              },
                              {
                                  "id": 4053,
                                  "name": "olive oil",
                                  "localizedName": "olive oil",
                                  "image": "olive-oil.jpg"
                              },
                              {
                                  "id": 2027,
                                  "name": "oregano",
                                  "localizedName": "oregano",
                                  "image": "oregano.jpg"
                              },
                              {
                                  "id": 11215,
                                  "name": "garlic",
                                  "localizedName": "garlic",
                                  "image": "garlic.png"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404783,
                                  "name": "bowl",
                                  "localizedName": "bowl",
                                  "image": "bowl.jpg"
                              }
                          ]
                      },
                      {
                          "number": 2,
                          "step": "Add lettuce, feta, mushrooms, onion, tomato and olives in a salad bowl.Toss salad with dressing.Season flank steak with your favorite grill seasoning. I love Martha Stewarts recipe.",
                          "ingredients": [
                              {
                                  "id": 1022034,
                                  "name": "grill seasoning",
                                  "localizedName": "grill seasoning",
                                  "image": "seasoning.png"
                              },
                              {
                                  "id": 23657,
                                  "name": "flank steak",
                                  "localizedName": "flank steak",
                                  "image": "flank-steak.jpg"
                              },
                              {
                                  "id": 11260,
                                  "name": "mushrooms",
                                  "localizedName": "mushrooms",
                                  "image": "mushrooms.png"
                              },
                              {
                                  "id": 11252,
                                  "name": "lettuce",
                                  "localizedName": "lettuce",
                                  "image": "iceberg-lettuce.jpg"
                              },
                              {
                                  "id": 9195,
                                  "name": "olives",
                                  "localizedName": "olives",
                                  "image": "olives-mixed.jpg"
                              },
                              {
                                  "id": 11529,
                                  "name": "tomato",
                                  "localizedName": "tomato",
                                  "image": "tomato.png"
                              },
                              {
                                  "id": 11282,
                                  "name": "onion",
                                  "localizedName": "onion",
                                  "image": "brown-onion.png"
                              },
                              {
                                  "id": 1019,
                                  "name": "feta cheese",
                                  "localizedName": "feta cheese",
                                  "image": "feta.png"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404706,
                                  "name": "grill",
                                  "localizedName": "grill",
                                  "image": "grill.jpg"
                              },
                              {
                                  "id": 404783,
                                  "name": "bowl",
                                  "localizedName": "bowl",
                                  "image": "bowl.jpg"
                              }
                          ]
                      },
                      {
                          "number": 3,
                          "step": "Heat grill pan over medium heat. Spray with cooking spray.",
                          "ingredients": [
                              {
                                  "id": 4679,
                                  "name": "cooking spray",
                                  "localizedName": "cooking spray",
                                  "image": "cooking-spray.png"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404648,
                                  "name": "grill pan",
                                  "localizedName": "grill pan",
                                  "image": "grill-pan.jpg"
                              }
                          ]
                      },
                      {
                          "number": 4,
                          "step": "Add steak and cook 4  8 minutes per side, depending on how thick and your desired doneness.",
                          "ingredients": [
                              {
                                  "id": 23232,
                                  "name": "steak",
                                  "localizedName": "steak",
                                  "image": "ribeye-raw.jpg"
                              }
                          ],
                          "equipment": [],
                          "length": {
                              "number": 8,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 5,
                          "step": "Let rest for 5 minutes or more before slicing.",
                          "ingredients": [],
                          "equipment": [],
                          "length": {
                              "number": 5,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 6,
                          "step": "Serve with steak.",
                          "ingredients": [
                              {
                                  "id": 23232,
                                  "name": "steak",
                                  "localizedName": "steak",
                                  "image": "ribeye-raw.jpg"
                              }
                          ],
                          "equipment": []
                      }
                  ]
              }
          ],
          "originalId": null,
          "spoonacularScore": 90.83177185058594,
          "spoonacularSourceUrl": "https://spoonacular.com/flank-steak-with-garlicky-mediterranean-salad-643059"
      },
      {
          "vegetarian": true,
          "vegan": false,
          "glutenFree": true,
          "dairyFree": false,
          "veryHealthy": false,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 10,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 9,
          "healthScore": 6,
          "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
          "license": "CC BY 3.0",
          "sourceName": "Foodista",
          "pricePerServing": 166.83,
          "extendedIngredients": [
              {
                  "id": 1123,
                  "aisle": "Milk, Eggs, Other Dairy",
                  "image": "egg.png",
                  "consistency": "SOLID",
                  "name": "eggs",
                  "nameClean": "egg",
                  "original": "4 large eggs",
                  "originalName": "eggs",
                  "amount": 4.0,
                  "unit": "large",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "large",
                          "unitLong": "larges"
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "large",
                          "unitLong": "larges"
                      }
                  }
              },
              {
                  "id": 10719335,
                  "aisle": "Baking",
                  "image": "sugar-in-bowl.png",
                  "consistency": "SOLID",
                  "name": "granulated sugar",
                  "nameClean": "granulated sugar",
                  "original": "1/3 cup granulated sugar",
                  "originalName": "granulated sugar",
                  "amount": 0.33333334,
                  "unit": "cup",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 0.33333334,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 66.667,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 10719335,
                  "aisle": "Baking",
                  "image": "sugar-in-bowl.png",
                  "consistency": "SOLID",
                  "name": "granulated sugar",
                  "nameClean": "granulated sugar",
                  "original": "1/2 cup granulated sugar",
                  "originalName": "granulated sugar",
                  "amount": 0.5,
                  "unit": "cup",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 0.5,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 100.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 9316,
                  "aisle": "Produce",
                  "image": "strawberries.png",
                  "consistency": "SOLID",
                  "name": "strawberries",
                  "nameClean": "strawberries",
                  "original": "strawberries",
                  "originalName": "strawberries",
                  "amount": 6.0,
                  "unit": "servings",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 6.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 6.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": 1052050,
                  "aisle": "Baking",
                  "image": "vanilla.jpg",
                  "consistency": "SOLID",
                  "name": "vanilla",
                  "nameClean": "vanilla",
                  "original": "1 tsp vanilla",
                  "originalName": "vanilla",
                  "amount": 1.0,
                  "unit": "tsp",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      }
                  }
              },
              {
                  "id": 1011077,
                  "aisle": "Milk, Eggs, Other Dairy",
                  "image": "milk.png",
                  "consistency": "LIQUID",
                  "name": "milk",
                  "nameClean": "whole milk",
                  "original": "2 cups whole milk",
                  "originalName": "whole milk",
                  "amount": 2.0,
                  "unit": "cups",
                  "meta": [
                      "whole"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 488.0,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              }
          ],
          "id": 638717,
          "title": "Chinese Steamed Flan",
          "readyInMinutes": 45,
          "servings": 6,
          "sourceUrl": "http://www.foodista.com/recipe/GNDGXPZK/chinese-steamed-flan",
          "image": "https://spoonacular.com/recipeImages/638717-556x370.jpg",
          "imageType": "jpg",
          "summary": "Chinese Steamed Flan is a dessert that serves 6. Watching your figure? This gluten free and lacto ovo vegetarian recipe has <b>252 calories</b>, <b>8g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.67 per serving</b>, this recipe <b>covers 14%</b> of your daily requirements of vitamins and minerals. Only a few people made this recipe, and 9 would say it hit the spot. It is a <b>rather inexpensive</b> recipe for fans of Chinese food. It is brought to you by Foodista. Head to the store and pick up strawberries, granulated sugar, milk, and a few other things to make it today. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Overall, this recipe earns a <b>solid spoonacular score of 47%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/how-to-cook-leche-flan-steamed-crme-caramel-478107\">How to cook: Leche flan (steamed crème caramel)</a>, <a href=\"https://spoonacular.com/recipes/chinese-steamed-fish-40745\">Chinese Steamed Fish</a>, and <a href=\"https://spoonacular.com/recipes/ma-lai-go-chinese-steamed-cake-1075533\">Ma Lai Go Chinese Steamed Cake</a>.",
          "cuisines": [
              "Chinese",
              "Asian"
          ],
          "dishTypes": [
              "dessert"
          ],
          "diets": [
              "gluten free",
              "lacto ovo vegetarian"
          ],
          "occasions": [],
          "instructions": "<ol><li>For caramel:</li><li>Spread sugar evenly in the bottom of a heavy saucepan and place over medium-low heat. It may take several minutes before the sugar begins to melt. Without stirring, watch the sugar closely as it begins to liquefy at the edges.  It will slowly turn from a yellow to a golden and finally to a brown caramel sauce.</li><li>When the liquefied sugar is turning from golden to brown, immediately remove the saucepan from the heat. Watch carefully!  (If you miss this point, the sugar will quickly turn too dark and you will have to start all over again).  Immediately pour liquid caramel into 6 3-1/2 inch ramekins and swirl to cover bottom evenly. The caramel hardens rapidly, so work quickly.  Set aside.</li><li>For flan:</li><li>Place 2 inches of water on the bottom portion of steamer.  Cover and allow water to come to a boil.  In the meantime, heat milk and sugar in a saucepan until just warmed and sugar has dissolved.  Whisk eggs and vanilla in a large bowl until blended.  Slowly pour warmed milk into the eggs, beating until well combined.  Scoop off foam and discard.  Ladle into prepared ramekins and place into steamer.</li><li>Turn down heat  this is very important  to medium and steam for 15 minutes.  Remove and allow to cool.  Once cool, cover and refrigerate overnight.  When ready to serve, carefully run a knife around the inside each ramekin to loosen the flan. Place a plate on top of the flan and invert until flan pops out.  Serve with sliced strawberries.</li></ol>",
          "analyzedInstructions": [
              {
                  "name": "For caramel",
                  "steps": []
              },
              {
                  "name": "Spread sugar evenly in the bottom of a heavy saucepan and place over medium-low heat. It may take several minutes before the sugar begins to melt. Without stirring, watch the sugar closely as it begins to liquefy at the edges.  It will slowly turn from a yellow to a golden and finally to a brown caramel sauce.When the liquefied sugar is turning from golden to brown, immediately remove the saucepan from the heat. Watch carefully!  (If you miss this point, the sugar will quickly turn too dark and you will have to start all over again).  Immediately pour liquid caramel into 6 3-1/2 inch ramekins and swirl to cover bottom evenly. The caramel hardens rapidly, so work quickly.  Set aside.For flan",
                  "steps": [
                      {
                          "number": 1,
                          "step": "Place 2 inches of water on the bottom portion of steamer.  Cover and allow water to come to a boil.  In the meantime, heat milk and sugar in a saucepan until just warmed and sugar has dissolved.",
                          "ingredients": [
                              {
                                  "id": 19335,
                                  "name": "sugar",
                                  "localizedName": "sugar",
                                  "image": "sugar-in-bowl.png"
                              },
                              {
                                  "id": 14412,
                                  "name": "water",
                                  "localizedName": "water",
                                  "image": "water.png"
                              },
                              {
                                  "id": 1077,
                                  "name": "milk",
                                  "localizedName": "milk",
                                  "image": "milk.png"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404669,
                                  "name": "sauce pan",
                                  "localizedName": "sauce pan",
                                  "image": "sauce-pan.jpg"
                              }
                          ]
                      },
                      {
                          "number": 2,
                          "step": "Whisk eggs and vanilla in a large bowl until blended.  Slowly pour warmed milk into the eggs, beating until well combined.  Scoop off foam and discard.  Ladle into prepared ramekins and place into steamer.Turn down heat  this is very important  to medium and steam for 15 minutes.",
                          "ingredients": [
                              {
                                  "id": 1052050,
                                  "name": "vanilla",
                                  "localizedName": "vanilla",
                                  "image": "vanilla.jpg"
                              },
                              {
                                  "id": 1123,
                                  "name": "egg",
                                  "localizedName": "egg",
                                  "image": "egg.png"
                              },
                              {
                                  "id": 1077,
                                  "name": "milk",
                                  "localizedName": "milk",
                                  "image": "milk.png"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404781,
                                  "name": "ramekin",
                                  "localizedName": "ramekin",
                                  "image": "ramekin.jpg"
                              },
                              {
                                  "id": 404630,
                                  "name": "ladle",
                                  "localizedName": "ladle",
                                  "image": "ladle.jpg"
                              },
                              {
                                  "id": 404661,
                                  "name": "whisk",
                                  "localizedName": "whisk",
                                  "image": "whisk.png"
                              },
                              {
                                  "id": 404783,
                                  "name": "bowl",
                                  "localizedName": "bowl",
                                  "image": "bowl.jpg"
                              }
                          ],
                          "length": {
                              "number": 15,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 3,
                          "step": "Remove and allow to cool.  Once cool, cover and refrigerate overnight.  When ready to serve, carefully run a knife around the inside each ramekin to loosen the flan.",
                          "ingredients": [],
                          "equipment": [
                              {
                                  "id": 404781,
                                  "name": "ramekin",
                                  "localizedName": "ramekin",
                                  "image": "ramekin.jpg"
                              },
                              {
                                  "id": 404745,
                                  "name": "knife",
                                  "localizedName": "knife",
                                  "image": "chefs-knife.jpg"
                              }
                          ]
                      },
                      {
                          "number": 4,
                          "step": "Place a plate on top of the flan and invert until flan pops out.",
                          "ingredients": [],
                          "equipment": []
                      },
                      {
                          "number": 5,
                          "step": "Serve with sliced strawberries.",
                          "ingredients": [
                              {
                                  "id": 9316,
                                  "name": "strawberries",
                                  "localizedName": "strawberries",
                                  "image": "strawberries.png"
                              }
                          ],
                          "equipment": []
                      }
                  ]
              }
          ],
          "originalId": null,
          "spoonacularScore": 49.45552444458008,
          "spoonacularSourceUrl": "https://spoonacular.com/chinese-steamed-flan-638717"
      },
      {
          "vegetarian": false,
          "vegan": false,
          "glutenFree": false,
          "dairyFree": false,
          "veryHealthy": true,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 11,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 2,
          "healthScore": 90,
          "creditsText": "foodista.com",
          "sourceName": "foodista.com",
          "pricePerServing": 168.12,
          "extendedIngredients": [
              {
                  "id": 20081,
                  "aisle": "Baking",
                  "image": "flour.png",
                  "consistency": "SOLID",
                  "name": "flour",
                  "nameClean": "wheat flour",
                  "original": "2 tablespoons Flour",
                  "originalName": "Flour",
                  "amount": 2.0,
                  "unit": "tablespoons",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              },
              {
                  "id": 11291,
                  "aisle": "Produce",
                  "image": "spring-onions.jpg",
                  "consistency": "SOLID",
                  "name": "green onions",
                  "nameClean": "spring onions",
                  "original": "cup Green Onions, chopped",
                  "originalName": "Green Onions, chopped",
                  "amount": 1.0,
                  "unit": "cup",
                  "meta": [
                      "chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "cup",
                          "unitLong": "cup"
                      },
                      "metric": {
                          "amount": 100.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 1085,
                  "aisle": "Milk, Eggs, Other Dairy",
                  "image": "milk.jpg",
                  "consistency": "LIQUID",
                  "name": "non-fat milk",
                  "nameClean": "fat free milk",
                  "original": "1 1/4 cups Non-Fat Milk",
                  "originalName": "Non-Fat Milk",
                  "amount": 1.25,
                  "unit": "cups",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.25,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 306.25,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 4053,
                  "aisle": "Oil, Vinegar, Salad Dressing",
                  "image": "olive-oil.jpg",
                  "consistency": "SOLID",
                  "name": "olive oil",
                  "nameClean": "olive oil",
                  "original": "2 tablespoons Olive Oil",
                  "originalName": "Olive Oil",
                  "amount": 2.0,
                  "unit": "tablespoons",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              },
              {
                  "id": 11282,
                  "aisle": "Produce",
                  "image": "brown-onion.png",
                  "consistency": "SOLID",
                  "name": "onion",
                  "nameClean": "onion",
                  "original": "2 tablespoons Onion, minced",
                  "originalName": "Onion, minced",
                  "amount": 2.0,
                  "unit": "tablespoons",
                  "meta": [
                      "minced"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              },
              {
                  "id": 1033,
                  "aisle": "Cheese",
                  "image": "parmesan.jpg",
                  "consistency": "SOLID",
                  "name": "parmesan cheese",
                  "nameClean": "parmesan",
                  "original": "1/4 cup Parmesan Cheese, grated",
                  "originalName": "Parmesan Cheese, grated",
                  "amount": 0.25,
                  "unit": "cup",
                  "meta": [
                      "grated"
                  ],
                  "measures": {
                      "us": {
                          "amount": 0.25,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 25.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 10511297,
                  "aisle": "Produce",
                  "image": "parsley.jpg",
                  "consistency": "SOLID",
                  "name": "parsley",
                  "nameClean": "fresh parsley",
                  "original": "cup Fresh Parsley or Basil, chopped",
                  "originalName": "Fresh Parsley or Basil, chopped",
                  "amount": 1.0,
                  "unit": "cup",
                  "meta": [
                      "fresh",
                      "chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "cup",
                          "unitLong": "cup"
                      },
                      "metric": {
                          "amount": 60.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 20420,
                  "aisle": "Pasta and Rice",
                  "image": "fusilli.jpg",
                  "consistency": "SOLID",
                  "name": "tubular pasta",
                  "nameClean": "pasta",
                  "original": "8 ounces Tubular Pasta",
                  "originalName": "Tubular Pasta",
                  "amount": 8.0,
                  "unit": "ounces",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 8.0,
                          "unitShort": "oz",
                          "unitLong": "ounces"
                      },
                      "metric": {
                          "amount": 226.796,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 11304,
                  "aisle": "Produce",
                  "image": "peas.jpg",
                  "consistency": "SOLID",
                  "name": "peas",
                  "nameClean": "petite peas",
                  "original": "1 cup Frozen Peas, thawed",
                  "originalName": "Frozen Peas, thawed",
                  "amount": 1.0,
                  "unit": "cup",
                  "meta": [
                      "frozen",
                      "thawed"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "cup",
                          "unitLong": "cup"
                      },
                      "metric": {
                          "amount": 145.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 6168,
                  "aisle": "Condiments",
                  "image": "hot-sauce-or-tabasco.png",
                  "consistency": "LIQUID",
                  "name": "dsh pepper sauce",
                  "nameClean": "hot sauce",
                  "original": "1 dsh Hot Pepper Sauce",
                  "originalName": "dsh Hot Pepper Sauce",
                  "amount": 1.0,
                  "unit": "",
                  "meta": [
                      "hot"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 15121,
                  "aisle": "Canned and Jarred",
                  "image": "canned-tuna.png",
                  "consistency": "SOLID",
                  "name": "water-packed tuna",
                  "nameClean": "tuna packed in water",
                  "original": "6 1/2 ounces Can Water-Packed Tuna, drained",
                  "originalName": "Water-Packed Tuna, drained",
                  "amount": 6.5,
                  "unit": "ounces",
                  "meta": [
                      "drained"
                  ],
                  "measures": {
                      "us": {
                          "amount": 6.5,
                          "unitShort": "oz",
                          "unitLong": "ounces"
                      },
                      "metric": {
                          "amount": 184.272,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              }
          ],
          "id": 654959,
          "title": "Pasta With Tuna",
          "readyInMinutes": 45,
          "servings": 4,
          "sourceUrl": "http://www.foodista.com/recipe/K6QWSKQM/pasta-with-tuna",
          "image": "https://spoonacular.com/recipeImages/654959-556x370.jpg",
          "imageType": "jpg",
          "summary": "Pasta With Tunan is a <b>pescatarian</b> main course. This recipe serves 4. For <b>$1.68 per serving</b>, this recipe <b>covers 28%</b> of your daily requirements of vitamins and minerals. One serving contains <b>423 calories</b>, <b>24g of protein</b>, and <b>10g of fat</b>. 2 people have made this recipe and would make it again. This recipe from Foodista requires flour, parsley, non-fat milk, and parmesan cheese. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 92%</b>. This score is amazing. <a href=\"https://spoonacular.com/recipes/pasta-and-tuna-salad-ensalada-de-pasta-y-atn-226303\">Pastan and Tuna Salad (Ensalada de Pasta y Atún)</a>, <a href=\"https://spoonacular.com/recipes/tuna-pasta-565100\">Tuna Pasta</a>, and <a href=\"https://spoonacular.com/recipes/tuna-pasta-89136\">Tuna Pasta</a> are very similar to this recipe.",
          "cuisines": [],
          "dishTypes": [
              "side dish",
              "lunch",
              "main course",
              "main dish",
              "dinner"
          ],
          "diets": [
              "pescatarian"
          ],
          "occasions": [],
          "instructions": "<ol><li>Cook pasta in a large pot of boiling water until al dente. Drain and return to warm pot. Put olive oil in saucepan and add onion. Saute until transparent. Stir in flour and cook for a few seconds and then whisk in milk. Stir constantly until this thickens. Add peas, tuna (shredded into chunks,) parsley, green onions, cheese and hot pepper sauce. Pour over pasta and stir gently to mix. Serve at once.</li></ol>",
          "analyzedInstructions": [
              {
                  "name": "",
                  "steps": [
                      {
                          "number": 1,
                          "step": "Cook pasta in a large pot of boiling water until al dente.",
                          "ingredients": [
                              {
                                  "id": 20420,
                                  "name": "pasta",
                                  "localizedName": "pasta",
                                  "image": "fusilli.jpg"
                              },
                              {
                                  "id": 14412,
                                  "name": "water",
                                  "localizedName": "water",
                                  "image": "water.png"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404752,
                                  "name": "pot",
                                  "localizedName": "pot",
                                  "image": "stock-pot.jpg"
                              }
                          ]
                      },
                      {
                          "number": 2,
                          "step": "Drain and return to warm pot. Put olive oil in saucepan and add onion.",
                          "ingredients": [
                              {
                                  "id": 4053,
                                  "name": "olive oil",
                                  "localizedName": "olive oil",
                                  "image": "olive-oil.jpg"
                              },
                              {
                                  "id": 11282,
                                  "name": "onion",
                                  "localizedName": "onion",
                                  "image": "brown-onion.png"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404669,
                                  "name": "sauce pan",
                                  "localizedName": "sauce pan",
                                  "image": "sauce-pan.jpg"
                              },
                              {
                                  "id": 404752,
                                  "name": "pot",
                                  "localizedName": "pot",
                                  "image": "stock-pot.jpg"
                              }
                          ]
                      },
                      {
                          "number": 3,
                          "step": "Saute until transparent. Stir in flour and cook for a few seconds and then whisk in milk. Stir constantly until this thickens.",
                          "ingredients": [
                              {
                                  "id": 20081,
                                  "name": "all purpose flour",
                                  "localizedName": "all purpose flour",
                                  "image": "flour.png"
                              },
                              {
                                  "id": 1077,
                                  "name": "milk",
                                  "localizedName": "milk",
                                  "image": "milk.png"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404661,
                                  "name": "whisk",
                                  "localizedName": "whisk",
                                  "image": "whisk.png"
                              }
                          ]
                      },
                      {
                          "number": 4,
                          "step": "Add peas, tuna (shredded into chunks,) parsley, green onions, cheese and hot pepper sauce.",
                          "ingredients": [
                              {
                                  "id": 6168,
                                  "name": "hot sauce",
                                  "localizedName": "hot sauce",
                                  "image": "hot-sauce-or-tabasco.png"
                              },
                              {
                                  "id": 11291,
                                  "name": "green onions",
                                  "localizedName": "green onions",
                                  "image": "spring-onions.jpg"
                              },
                              {
                                  "id": 11297,
                                  "name": "parsley",
                                  "localizedName": "parsley",
                                  "image": "parsley.jpg"
                              },
                              {
                                  "id": 1041009,
                                  "name": "cheese",
                                  "localizedName": "cheese",
                                  "image": "cheddar-cheese.png"
                              },
                              {
                                  "id": 11304,
                                  "name": "peas",
                                  "localizedName": "peas",
                                  "image": "peas.jpg"
                              },
                              {
                                  "id": 10015121,
                                  "name": "tuna",
                                  "localizedName": "tuna",
                                  "image": "canned-tuna.png"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 5,
                          "step": "Pour over pasta and stir gently to mix.",
                          "ingredients": [
                              {
                                  "id": 20420,
                                  "name": "pasta",
                                  "localizedName": "pasta",
                                  "image": "fusilli.jpg"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 6,
                          "step": "Serve at once.",
                          "ingredients": [],
                          "equipment": []
                      }
                  ]
              }
          ],
          "originalId": null,
          "spoonacularScore": 93.84129333496094,
          "spoonacularSourceUrl": "https://spoonacular.com/pasta-with-tuna-654959"
      },
      {
          "vegetarian": false,
          "vegan": false,
          "glutenFree": true,
          "dairyFree": false,
          "veryHealthy": false,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 5,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 7,
          "healthScore": 11,
          "creditsText": "foodista.com",
          "sourceName": "foodista.com",
          "pricePerServing": 229.9,
          "extendedIngredients": [
              {
                  "id": 5006,
                  "aisle": "Meat",
                  "image": "whole-chicken.jpg",
                  "consistency": "SOLID",
                  "name": "chicken",
                  "nameClean": "whole chicken",
                  "original": "2 pounds chicken",
                  "originalName": "chicken",
                  "amount": 2.0,
                  "unit": "pounds",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "lb",
                          "unitLong": "pounds"
                      },
                      "metric": {
                          "amount": 435.449,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 16112,
                  "aisle": "Ethnic Foods",
                  "image": "miso.jpg",
                  "consistency": "SOLID",
                  "name": "tikka tandoori paste",
                  "nameClean": "miso",
                  "original": "2 cups tikka tandoori paste*",
                  "originalName": "tikka tandoori paste",
                  "amount": 2.0,
                  "unit": "cups",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 550.0,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 2012,
                  "aisle": "Spices and Seasonings",
                  "image": "ground-coriander.jpg",
                  "consistency": "SOLID",
                  "name": "coriander leaves",
                  "nameClean": "dried cilantro",
                  "original": "coriander leaves",
                  "originalName": "coriander leaves",
                  "amount": 12.0,
                  "unit": "servings",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 12.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 12.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": 1256,
                  "aisle": "Milk, Eggs, Other Dairy",
                  "image": "plain-yogurt.jpg",
                  "consistency": "LIQUID",
                  "name": "greek yogurt",
                  "nameClean": "greek yogurt",
                  "original": "1 cup greek yogurt",
                  "originalName": "greek yogurt",
                  "amount": 1.0,
                  "unit": "cup",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "cup",
                          "unitLong": "cup"
                      },
                      "metric": {
                          "amount": 200.0,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 11282,
                  "aisle": "Produce",
                  "image": "brown-onion.png",
                  "consistency": "SOLID",
                  "name": "onions",
                  "nameClean": "onion",
                  "original": "Onions",
                  "originalName": "Onions",
                  "amount": 12.0,
                  "unit": "servings",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 12.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 12.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": 11529,
                  "aisle": "Produce",
                  "image": "tomato.png",
                  "consistency": "SOLID",
                  "name": "tomatoes",
                  "nameClean": "tomato",
                  "original": "Fresh tomatoes",
                  "originalName": "Fresh tomatoes",
                  "amount": 12.0,
                  "unit": "servings",
                  "meta": [
                      "fresh"
                  ],
                  "measures": {
                      "us": {
                          "amount": 12.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 12.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              }
          ],
          "id": 641904,
          "title": "Easy Chicken Tandoori",
          "readyInMinutes": 45,
          "servings": 12,
          "sourceUrl": "http://www.foodista.com/recipe/X8BXB6WT/easy-chicken-tandoori",
          "image": "https://spoonacular.com/recipeImages/641904-556x370.jpg",
          "imageType": "jpg",
          "summary": "Easy Chicken Tandoori is an Indian recipe that serves 12. One serving contains <b>236 calories</b>, <b>17g of protein</b>, and <b>9g of fat</b>. For <b>$2.3 per serving</b>, this recipe <b>covers 18%</b> of your daily requirements of vitamins and minerals. Only a few people made this recipe, and 7 would say it hit the spot. It is a good option if you're following a <b>gluten free</b> diet. It works best as a main course, and is done in roughly <b>45 minutes</b>. This recipe from Foodista requires chicken, tikka tandoori paste, onions, and tomatoes. Overall, this recipe earns a <b>solid spoonacular score of 58%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/easy-chicken-tandoori-1377395\">Easy Chicken Tandoori</a>, <a href=\"https://spoonacular.com/recipes/aartis-easy-tandoori-chicken-288364\">Aarti's Easy Tandoori Chicken</a>, and <a href=\"https://spoonacular.com/recipes/easy-homemade-tandoori-chicken-670403\">Easy Homemade Tandoori Chicken</a>.",
          "cuisines": [
              "Indian",
              "Asian"
          ],
          "dishTypes": [
              "lunch",
              "main course",
              "main dish",
              "dinner"
          ],
          "diets": [
              "gluten free"
          ],
          "occasions": [],
          "instructions": "<ol><li>Mix the tandoori paste and yogurt well. Marinate the chicken pieces well for about 30 minutes</li><li>Place the chicken pieces along with the marinate into a baking pan and bake until golden brown and then turn over  until chicken is done. Keep turning the chicken pieces a few times while baking. </li><li>Serve with in a bed of rice. Then lay the chicken fillets on the rice and put a bit of greek yogurt</li></ol>",
          "analyzedInstructions": [
              {
                  "name": "",
                  "steps": [
                      {
                          "number": 1,
                          "step": "Mix the tandoori paste and yogurt well. Marinate the chicken pieces well for about 30 minutes",
                          "ingredients": [
                              {
                                  "id": 1005006,
                                  "name": "chicken pieces",
                                  "localizedName": "chicken pieces",
                                  "image": "chicken-parts.jpg"
                              },
                              {
                                  "id": 1116,
                                  "name": "yogurt",
                                  "localizedName": "yogurt",
                                  "image": "plain-yogurt.jpg"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 2,
                          "step": "Place the chicken pieces along with the marinate into a baking pan and bake until golden brown and then turn over  until chicken is done. Keep turning the chicken pieces a few times while baking.",
                          "ingredients": [
                              {
                                  "id": 1005006,
                                  "name": "chicken pieces",
                                  "localizedName": "chicken pieces",
                                  "image": "chicken-parts.jpg"
                              },
                              {
                                  "id": 0,
                                  "name": "chicken",
                                  "localizedName": "chicken",
                                  "image": "whole-chicken.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404646,
                                  "name": "baking pan",
                                  "localizedName": "baking pan",
                                  "image": "roasting-pan.jpg"
                              },
                              {
                                  "id": 404784,
                                  "name": "oven",
                                  "localizedName": "oven",
                                  "image": "oven.jpg"
                              }
                          ]
                      },
                      {
                          "number": 3,
                          "step": "Serve with in a bed of rice. Then lay the chicken fillets on the rice and put a bit of greek yogurt",
                          "ingredients": [
                              {
                                  "id": 1055062,
                                  "name": "boneless skinless chicken breast",
                                  "localizedName": "boneless skinless chicken breast",
                                  "image": "chicken-breasts.png"
                              },
                              {
                                  "id": 1256,
                                  "name": "greek yogurt",
                                  "localizedName": "greek yogurt",
                                  "image": "plain-yogurt.jpg"
                              },
                              {
                                  "id": 20444,
                                  "name": "rice",
                                  "localizedName": "rice",
                                  "image": "uncooked-white-rice.png"
                              }
                          ],
                          "equipment": []
                      }
                  ]
              }
          ],
          "originalId": null,
          "spoonacularScore": 59.47916030883789,
          "spoonacularSourceUrl": "https://spoonacular.com/easy-chicken-tandoori-641904"
      },
      {
          "vegetarian": true,
          "vegan": true,
          "glutenFree": true,
          "dairyFree": true,
          "veryHealthy": false,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 1,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 2,
          "healthScore": 0,
          "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
          "license": "CC BY 3.0",
          "sourceName": "Foodista",
          "pricePerServing": 17.74,
          "extendedIngredients": [
              {
                  "id": 10211215,
                  "aisle": "Produce",
                  "image": "garlic.jpg",
                  "consistency": "SOLID",
                  "name": "pd sausage",
                  "nameClean": "whole garlic cloves",
                  "original": "1 Pd Sausage (Can sub ground pork, turkey, or 2 cloves Garlic",
                  "originalName": "Pd Sausage (Can sub ground pork, turkey, or 2 cloves Garlic",
                  "amount": 1.0,
                  "unit": "",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 11165,
                  "aisle": "Spices and Seasonings",
                  "image": "cilantro.png",
                  "consistency": "SOLID",
                  "name": "cilantro",
                  "nameClean": "cilantro",
                  "original": "1 bunch Cilantro, Chopped",
                  "originalName": "Cilantro, Chopped",
                  "amount": 1.0,
                  "unit": "bunch",
                  "meta": [
                      "chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "bunch",
                          "unitLong": "bunch"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "bunch",
                          "unitLong": "bunch"
                      }
                  }
              },
              {
                  "id": 11282,
                  "aisle": "Produce",
                  "image": "brown-onion.png",
                  "consistency": "SOLID",
                  "name": "onion",
                  "nameClean": "onion",
                  "original": "1/2 Onion, Chopped",
                  "originalName": "Onion, Chopped",
                  "amount": 0.5,
                  "unit": "",
                  "meta": [
                      "chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 0.5,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 0.5,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 1002014,
                  "aisle": "Spices and Seasonings",
                  "image": "ground-cumin.jpg",
                  "consistency": "SOLID",
                  "name": "cumin",
                  "nameClean": "cumin",
                  "original": "1 teaspoon Cumin",
                  "originalName": "Cumin",
                  "amount": 1.0,
                  "unit": "teaspoon",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      }
                  }
              },
              {
                  "id": 2009,
                  "aisle": "Spices and Seasonings",
                  "image": "chili-powder.jpg",
                  "consistency": "SOLID",
                  "name": "chili powder",
                  "nameClean": "chili powder",
                  "original": "1 teaspoon Chili Powder",
                  "originalName": "Chili Powder",
                  "amount": 1.0,
                  "unit": "teaspoon",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      }
                  }
              },
              {
                  "id": 2027,
                  "aisle": "Spices and Seasonings",
                  "image": "oregano.jpg",
                  "consistency": "SOLID",
                  "name": "oregano",
                  "nameClean": "oregano",
                  "original": "1 teaspoon Oregano",
                  "originalName": "Oregano",
                  "amount": 1.0,
                  "unit": "teaspoon",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      }
                  }
              },
              {
                  "id": 14412,
                  "aisle": "Beverages",
                  "image": "water.png",
                  "consistency": "LIQUID",
                  "name": "water",
                  "nameClean": "water",
                  "original": "1 tablespoon Water",
                  "originalName": "Water",
                  "amount": 1.0,
                  "unit": "tablespoon",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "Tbsp",
                          "unitLong": "Tbsp"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "Tbsp",
                          "unitLong": "Tbsp"
                      }
                  }
              },
              {
                  "id": 11887,
                  "aisle": "Pasta and Rice",
                  "image": "tomato-paste.jpg",
                  "consistency": "SOLID",
                  "name": "tomato paste",
                  "nameClean": "tomato paste",
                  "original": "1 tablespoon Tomato Paste",
                  "originalName": "Tomato Paste",
                  "amount": 1.0,
                  "unit": "tablespoon",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "Tbsp",
                          "unitLong": "Tbsp"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "Tbsp",
                          "unitLong": "Tbsp"
                      }
                  }
              },
              {
                  "id": 4582,
                  "aisle": "Oil, Vinegar, Salad Dressing",
                  "image": "vegetable-oil.jpg",
                  "consistency": "LIQUID",
                  "name": "oil",
                  "nameClean": "cooking oil",
                  "original": "Oil for frying",
                  "originalName": "Oil for frying",
                  "amount": 6.0,
                  "unit": "servings",
                  "meta": [
                      "for frying"
                  ],
                  "measures": {
                      "us": {
                          "amount": 6.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 6.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": -1,
                  "aisle": "?",
                  "image": null,
                  "consistency": "SOLID",
                  "name": "corriander",
                  "nameClean": null,
                  "original": "1 teaspoon Corriander",
                  "originalName": "Corriander",
                  "amount": 1.0,
                  "unit": "teaspoon",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      }
                  }
              },
              {
                  "id": -1,
                  "aisle": "?",
                  "image": null,
                  "consistency": "SOLID",
                  "name": "corriander",
                  "nameClean": null,
                  "original": "1 teaspoon Corriander",
                  "originalName": "Corriander",
                  "amount": 1.0,
                  "unit": "teaspoon",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      }
                  }
              }
          ],
          "id": 652980,
          "title": "Navajo Fry Bread By Mommie Cooks",
          "readyInMinutes": 45,
          "servings": 6,
          "sourceUrl": "https://www.foodista.com/recipe/436TPYJC/navajo-fry-bread-by-mommie-cooks",
          "image": "https://spoonacular.com/recipeImages/652980-556x370.jpg",
          "imageType": "jpg",
          "summary": "Navajo Fry Bread By Mommie Cooks could be just the <b>gluten free, dairy free, lacto ovo vegetarian, and whole 30</b> recipe you've been looking for. This recipe makes 6 servings with <b>35 calories</b>, <b>0g of protein</b>, and <b>3g of fat</b> each. For <b>18 cents per serving</b>, this recipe <b>covers 2%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up pd sausage, water, oil, and a few other things to make it today. 2 people have made this recipe and would make it again. It is brought to you by Foodista. From preparation to the plate, this recipe takes about <b>45 minutes</b>. Overall, this recipe earns a <b>rather bad spoonacular score of 12%</b>. <a href=\"https://spoonacular.com/recipes/irish-soda-bread-by-mommie-cooks-648006\">Irish Soda Bread By Mommie Cooks</a>, <a href=\"https://spoonacular.com/recipes/turkey-goulash-by-mommie-cooks-664031\">Turkey Goulash By Mommie Cooks</a>, and <a href=\"https://spoonacular.com/recipes/chicken-fajitas-by-mommie-cooks-638085\">Chicken Fajitas By Mommie Cooks</a> are very similar to this recipe.",
          "cuisines": [],
          "dishTypes": [],
          "diets": [
              "gluten free",
              "dairy free",
              "lacto ovo vegetarian",
              "whole 30",
              "vegan"
          ],
          "occasions": [],
          "instructions": "For the fry bread dough, mix together all the listed ingredients; the flour, milk, baking powder, and salt.\nAllow the bread to rest for at least 10 minutes.\nWhile the dough is resting, grab a frying pan and start cooking up the meat for a minute or two.\nAdd to the meat the garlic, cilantro, and onion.\nCook the meat all the way through and then add in the cumin, chili powder, and oregano\nMix it up well and then add in the water and tomato paste\nStir it all together and turn the heat down to low to keep warm\nGrab a clean frying pan and pour enough oil in the bottom to create about a 1\" depth of oil. Turn the heat on medium high and allow it to heat up.\nWhile the oil is heating, take your rested dough ball, rip of a chunk and roll it out thin with a rolling pin.\nDrop the rolled bread into the hot oil and allow it to cook up for about a minute on each side or until gold brown.\nServe meat on top of bread along with additional desired toppings.",
          "analyzedInstructions": [
              {
                  "name": "",
                  "steps": [
                      {
                          "number": 1,
                          "step": "For the fry bread dough, mix together all the listed ingredients; the flour, milk, baking powder, and salt.",
                          "ingredients": [
                              {
                                  "id": 18369,
                                  "name": "baking powder",
                                  "localizedName": "baking powder",
                                  "image": "white-powder.jpg"
                              },
                              {
                                  "id": 99063,
                                  "name": "bread dough",
                                  "localizedName": "bread dough",
                                  "image": "pizza-dough"
                              },
                              {
                                  "id": 20081,
                                  "name": "all purpose flour",
                                  "localizedName": "all purpose flour",
                                  "image": "flour.png"
                              },
                              {
                                  "id": 1077,
                                  "name": "milk",
                                  "localizedName": "milk",
                                  "image": "milk.png"
                              },
                              {
                                  "id": 2047,
                                  "name": "salt",
                                  "localizedName": "salt",
                                  "image": "salt.jpg"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 2,
                          "step": "Allow the bread to rest for at least 10 minutes.",
                          "ingredients": [
                              {
                                  "id": 18064,
                                  "name": "bread",
                                  "localizedName": "bread",
                                  "image": "white-bread.jpg"
                              }
                          ],
                          "equipment": [],
                          "length": {
                              "number": 10,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 3,
                          "step": "While the dough is resting, grab a frying pan and start cooking up the meat for a minute or two.",
                          "ingredients": [
                              {
                                  "id": 0,
                                  "name": "dough",
                                  "localizedName": "dough",
                                  "image": "pizza-dough"
                              },
                              {
                                  "id": 1065062,
                                  "name": "meat",
                                  "localizedName": "meat",
                                  "image": "whole-chicken.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404645,
                                  "name": "frying pan",
                                  "localizedName": "frying pan",
                                  "image": "pan.png"
                              }
                          ]
                      },
                      {
                          "number": 4,
                          "step": "Add to the meat the garlic, cilantro, and onion.",
                          "ingredients": [
                              {
                                  "id": 11165,
                                  "name": "cilantro",
                                  "localizedName": "cilantro",
                                  "image": "cilantro.png"
                              },
                              {
                                  "id": 11215,
                                  "name": "garlic",
                                  "localizedName": "garlic",
                                  "image": "garlic.png"
                              },
                              {
                                  "id": 11282,
                                  "name": "onion",
                                  "localizedName": "onion",
                                  "image": "brown-onion.png"
                              },
                              {
                                  "id": 1065062,
                                  "name": "meat",
                                  "localizedName": "meat",
                                  "image": "whole-chicken.jpg"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 5,
                          "step": "Cook the meat all the way through and then add in the cumin, chili powder, and oregano",
                          "ingredients": [
                              {
                                  "id": 2009,
                                  "name": "chili powder",
                                  "localizedName": "chili powder",
                                  "image": "chili-powder.jpg"
                              },
                              {
                                  "id": 2027,
                                  "name": "oregano",
                                  "localizedName": "oregano",
                                  "image": "oregano.jpg"
                              },
                              {
                                  "id": 1002014,
                                  "name": "cumin",
                                  "localizedName": "cumin",
                                  "image": "ground-cumin.jpg"
                              },
                              {
                                  "id": 1065062,
                                  "name": "meat",
                                  "localizedName": "meat",
                                  "image": "whole-chicken.jpg"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 6,
                          "step": "Mix it up well and then add in the water and tomato paste",
                          "ingredients": [
                              {
                                  "id": 11887,
                                  "name": "tomato paste",
                                  "localizedName": "tomato paste",
                                  "image": "tomato-paste.jpg"
                              },
                              {
                                  "id": 14412,
                                  "name": "water",
                                  "localizedName": "water",
                                  "image": "water.png"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 7,
                          "step": "Stir it all together and turn the heat down to low to keep warm",
                          "ingredients": [],
                          "equipment": []
                      },
                      {
                          "number": 8,
                          "step": "Grab a clean frying pan and pour enough oil in the bottom to create about a 1\" depth of oil. Turn the heat on medium high and allow it to heat up.",
                          "ingredients": [
                              {
                                  "id": 4582,
                                  "name": "cooking oil",
                                  "localizedName": "cooking oil",
                                  "image": "vegetable-oil.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404645,
                                  "name": "frying pan",
                                  "localizedName": "frying pan",
                                  "image": "pan.png"
                              }
                          ]
                      },
                      {
                          "number": 9,
                          "step": "While the oil is heating, take your rested dough ball, rip of a chunk and roll it out thin with a rolling pin.",
                          "ingredients": [
                              {
                                  "id": 0,
                                  "name": "dough",
                                  "localizedName": "dough",
                                  "image": "pizza-dough"
                              },
                              {
                                  "id": 0,
                                  "name": "roll",
                                  "localizedName": "roll",
                                  "image": "dinner-yeast-rolls.jpg"
                              },
                              {
                                  "id": 4582,
                                  "name": "cooking oil",
                                  "localizedName": "cooking oil",
                                  "image": "vegetable-oil.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404746,
                                  "name": "rolling pin",
                                  "localizedName": "rolling pin",
                                  "image": "rolling-pin.jpg"
                              }
                          ]
                      },
                      {
                          "number": 10,
                          "step": "Drop the rolled bread into the hot oil and allow it to cook up for about a minute on each side or until gold brown.",
                          "ingredients": [
                              {
                                  "id": 18064,
                                  "name": "bread",
                                  "localizedName": "bread",
                                  "image": "white-bread.jpg"
                              },
                              {
                                  "id": 4582,
                                  "name": "cooking oil",
                                  "localizedName": "cooking oil",
                                  "image": "vegetable-oil.jpg"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 11,
                          "step": "Serve meat on top of bread along with additional desired toppings.",
                          "ingredients": [
                              {
                                  "id": 18064,
                                  "name": "bread",
                                  "localizedName": "bread",
                                  "image": "white-bread.jpg"
                              },
                              {
                                  "id": 1065062,
                                  "name": "meat",
                                  "localizedName": "meat",
                                  "image": "whole-chicken.jpg"
                              }
                          ],
                          "equipment": []
                      }
                  ]
              }
          ],
          "originalId": null,
          "spoonacularScore": 11.658224105834961,
          "spoonacularSourceUrl": "https://spoonacular.com/navajo-fry-bread-by-mommie-cooks-652980"
      },
      {
          "vegetarian": true,
          "vegan": true,
          "glutenFree": true,
          "dairyFree": true,
          "veryHealthy": false,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 6,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 15,
          "healthScore": 25,
          "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
          "license": "CC BY 3.0",
          "sourceName": "Foodista",
          "pricePerServing": 65.37,
          "extendedIngredients": [
              {
                  "id": 11282,
                  "aisle": "Produce",
                  "image": "brown-onion.png",
                  "consistency": "SOLID",
                  "name": "onion",
                  "nameClean": "onion",
                  "original": "1 large onion, chopped",
                  "originalName": "onion, chopped",
                  "amount": 1.0,
                  "unit": "large",
                  "meta": [
                      "chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "large",
                          "unitLong": "large"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "large",
                          "unitLong": "large"
                      }
                  }
              },
              {
                  "id": 20040,
                  "aisle": "Pasta and Rice",
                  "image": "uncooked-brown-rice.png",
                  "consistency": "SOLID",
                  "name": "brown rice",
                  "nameClean": "brown rice",
                  "original": "1 cup brown rice",
                  "originalName": "brown rice",
                  "amount": 1.0,
                  "unit": "cup",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "cup",
                          "unitLong": "cup"
                      },
                      "metric": {
                          "amount": 190.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 11264,
                  "aisle": "Canned and Jarred",
                  "image": "mushrooms.png",
                  "consistency": "SOLID",
                  "name": "mushrooms",
                  "nameClean": "canned mushrooms",
                  "original": "1 cup sliced fresh mushrooms (I used small-size champignons; don't use canned mushrooms because they're absolutely tasteless.)",
                  "originalName": "sliced fresh mushrooms (I used small-size champignons; don't use canned mushrooms because they're absolutely tasteless.)",
                  "amount": 1.0,
                  "unit": "cup",
                  "meta": [
                      "fresh",
                      "canned",
                      "sliced",
                      "(I used small-size champignons; don't use mushrooms because they're absolutely tasteless.)"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "cup",
                          "unitLong": "cup"
                      },
                      "metric": {
                          "amount": 156.0,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 4584,
                  "aisle": "Oil, Vinegar, Salad Dressing",
                  "image": "vegetable-oil.jpg",
                  "consistency": "LIQUID",
                  "name": "unrefined sunflower oil",
                  "nameClean": "sunflower oil",
                  "original": "1 tbsp unrefined sunflower oil",
                  "originalName": "unrefined sunflower oil",
                  "amount": 1.0,
                  "unit": "tbsp",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "Tbsp",
                          "unitLong": "Tbsp"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "Tbsp",
                          "unitLong": "Tbsp"
                      }
                  }
              },
              {
                  "id": 14412,
                  "aisle": "Beverages",
                  "image": "water.png",
                  "consistency": "LIQUID",
                  "name": "water",
                  "nameClean": "water",
                  "original": "2 cups water",
                  "originalName": "water",
                  "amount": 2.0,
                  "unit": "cups",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 473.176,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 1012047,
                  "aisle": "Spices and Seasonings",
                  "image": "salt.jpg",
                  "consistency": "SOLID",
                  "name": "sea salt",
                  "nameClean": "coarse sea salt",
                  "original": "sea salt, to taste",
                  "originalName": "sea salt, to taste",
                  "amount": 4.0,
                  "unit": "servings",
                  "meta": [
                      "to taste"
                  ],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": 1002030,
                  "aisle": "Spices and Seasonings",
                  "image": "pepper.jpg",
                  "consistency": "SOLID",
                  "name": "ground pepper",
                  "nameClean": "black pepper",
                  "original": "1/3 tsp ground pepper",
                  "originalName": "ground pepper",
                  "amount": 0.33333334,
                  "unit": "tsp",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 0.333,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      },
                      "metric": {
                          "amount": 0.333,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      }
                  }
              }
          ],
          "id": 636292,
          "title": "Brown Rice Mushroom Pilaf",
          "readyInMinutes": 45,
          "servings": 4,
          "sourceUrl": "https://www.foodista.com/recipe/S4DB57DW/brown-rice-mushroom-pilaf",
          "image": "https://spoonacular.com/recipeImages/636292-556x370.jpg",
          "imageType": "jpg",
          "summary": "Brown Rice Mushroom Pilaf might be just the hor d'oeuvre you are searching for. One portion of this dish contains about <b>5g of protein</b>, <b>5g of fat</b>, and a total of <b>228 calories</b>. This recipe serves 4. For <b>65 cents per serving</b>, this recipe <b>covers 11%</b> of your daily requirements of vitamins and minerals. This recipe from Foodista requires onion, brown rice, ground pepper, and unrefined sunflower oil. A couple people made this recipe, and 15 would say it hit the spot. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. Overall, this recipe earns a <b>super spoonacular score of 93%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/brown-rice-mushroom-pilaf-100507\">Brown Rice-Mushroom Pilaf</a>, <a href=\"https://spoonacular.com/recipes/quick-brown-rice-and-mushroom-pilaf-268223\">Quick Brown Rice and Mushroom Pilaf</a>, and <a href=\"https://spoonacular.com/recipes/brown-rice-pilaf-18826\">Brown Rice Pilaf</a>.",
          "cuisines": [],
          "dishTypes": [
              "side dish",
              "antipasti",
              "starter",
              "snack",
              "appetizer",
              "antipasto",
              "hor d'oeuvre"
          ],
          "diets": [
              "gluten free",
              "dairy free",
              "lacto ovo vegetarian",
              "vegan"
          ],
          "occasions": [],
          "instructions": "Heat oil in a large saucepan over medium heat. Saut chopped onion and sliced mushrooms for 5 minutes.\nAdd brown rice and stir to coat in oil.\nAdd water.\nBring to a boil, then simmer for 30 minutes. Remove from heat and cover with a lid. Let it rest until all liquid is absorbed.",
          "analyzedInstructions": [
              {
                  "name": "",
                  "steps": [
                      {
                          "number": 1,
                          "step": "Heat oil in a large saucepan over medium heat. Saut chopped onion and sliced mushrooms for 5 minutes.",
                          "ingredients": [
                              {
                                  "id": 11260,
                                  "name": "mushrooms",
                                  "localizedName": "mushrooms",
                                  "image": "mushrooms.png"
                              },
                              {
                                  "id": 11282,
                                  "name": "onion",
                                  "localizedName": "onion",
                                  "image": "brown-onion.png"
                              },
                              {
                                  "id": 4582,
                                  "name": "cooking oil",
                                  "localizedName": "cooking oil",
                                  "image": "vegetable-oil.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404669,
                                  "name": "sauce pan",
                                  "localizedName": "sauce pan",
                                  "image": "sauce-pan.jpg"
                              }
                          ],
                          "length": {
                              "number": 5,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 2,
                          "step": "Add brown rice and stir to coat in oil.",
                          "ingredients": [
                              {
                                  "id": 20040,
                                  "name": "brown rice",
                                  "localizedName": "brown rice",
                                  "image": "uncooked-brown-rice.png"
                              },
                              {
                                  "id": 4582,
                                  "name": "cooking oil",
                                  "localizedName": "cooking oil",
                                  "image": "vegetable-oil.jpg"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 3,
                          "step": "Add water.",
                          "ingredients": [
                              {
                                  "id": 14412,
                                  "name": "water",
                                  "localizedName": "water",
                                  "image": "water.png"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 4,
                          "step": "Bring to a boil, then simmer for 30 minutes.",
                          "ingredients": [],
                          "equipment": [],
                          "length": {
                              "number": 30,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 5,
                          "step": "Remove from heat and cover with a lid.",
                          "ingredients": [],
                          "equipment": []
                      },
                      {
                          "number": 6,
                          "step": "Let it rest until all liquid is absorbed.",
                          "ingredients": [],
                          "equipment": []
                      }
                  ]
              }
          ],
          "originalId": null,
          "spoonacularScore": 84.38838958740234,
          "spoonacularSourceUrl": "https://spoonacular.com/brown-rice-mushroom-pilaf-636292"
      },
      {
          "vegetarian": true,
          "vegan": false,
          "glutenFree": true,
          "dairyFree": false,
          "veryHealthy": false,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 8,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 2,
          "healthScore": 12,
          "creditsText": "foodista.com",
          "sourceName": "foodista.com",
          "pricePerServing": 296.01,
          "extendedIngredients": [
              {
                  "id": 2069,
                  "aisle": "Oil, Vinegar, Salad Dressing",
                  "image": "balsamic-vinegar.jpg",
                  "consistency": "LIQUID",
                  "name": "balsamic vinegar",
                  "nameClean": "balsamic vinegar",
                  "original": "Good balsamic vinegar for drizzling",
                  "originalName": "Good balsamic vinegar for drizzling",
                  "amount": 4.0,
                  "unit": "servings",
                  "meta": [
                      "good",
                      "for drizzling"
                  ],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": 10111297,
                  "aisle": "Produce",
                  "image": "mixed-fresh-herbs.jpg",
                  "consistency": "SOLID",
                  "name": "herbs",
                  "nameClean": "fresh herbs",
                  "original": "2 tablespoons fresh chopped herbs (thyme, chive, rosemary...)",
                  "originalName": "fresh chopped herbs (thyme, chive, rosemary...)",
                  "amount": 2.0,
                  "unit": "tablespoons",
                  "meta": [
                      "fresh",
                      "chopped",
                      "(thyme, chive, rosemary...)"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              },
              {
                  "id": 1159,
                  "aisle": "Cheese",
                  "image": "goat-cheese.jpg",
                  "consistency": "SOLID",
                  "name": "goat cheese",
                  "nameClean": "goat cheese",
                  "original": "10 ounces soft goat cheese, room temperature",
                  "originalName": "soft goat cheese, room temperature",
                  "amount": 10.0,
                  "unit": "ounces",
                  "meta": [
                      "soft",
                      "room temperature"
                  ],
                  "measures": {
                      "us": {
                          "amount": 10.0,
                          "unitShort": "oz",
                          "unitLong": "ounces"
                      },
                      "metric": {
                          "amount": 283.495,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 2047,
                  "aisle": "Spices and Seasonings",
                  "image": "salt.jpg",
                  "consistency": "SOLID",
                  "name": "salt",
                  "nameClean": "table salt",
                  "original": "Salt to taste",
                  "originalName": "Salt to taste",
                  "amount": 4.0,
                  "unit": "servings",
                  "meta": [
                      "to taste"
                  ],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              },
              {
                  "id": 11529,
                  "aisle": "Produce",
                  "image": "tomato.png",
                  "consistency": "SOLID",
                  "name": "tomatoes",
                  "nameClean": "tomato",
                  "original": "4 ripe medium tomatoes",
                  "originalName": "ripe medium tomatoes",
                  "amount": 4.0,
                  "unit": "medium",
                  "meta": [
                      "ripe"
                  ],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "medium",
                          "unitLong": "mediums"
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "medium",
                          "unitLong": "mediums"
                      }
                  }
              }
          ],
          "id": 663638,
          "title": "Tomato Stack Salad",
          "readyInMinutes": 45,
          "servings": 4,
          "sourceUrl": "http://www.foodista.com/recipe/KGHJG5BW/tomato-stack-salad",
          "image": "https://spoonacular.com/recipeImages/663638-556x370.jpg",
          "imageType": "jpg",
          "summary": "Tomato Stack Salad is a main course that serves 4. For <b>$2.96 per serving</b>, this recipe <b>covers 13%</b> of your daily requirements of vitamins and minerals. Watching your figure? This gluten free, lacto ovo vegetarian, and primal recipe has <b>224 calories</b>, <b>14g of protein</b>, and <b>15g of fat</b> per serving. This recipe from Foodista has 2 fans. A mixture of balsamic vinegar, tomatoes, goat cheese, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 52%</b>. This score is pretty good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/tomato-stack-salad-108557\">Tomato Stack-Salad</a>, <a href=\"https://spoonacular.com/recipes/tomato-avocado-salad-stack-792864\">Tomato Avocado Salad Stack</a>, and <a href=\"https://spoonacular.com/recipes/tomato-stack-salad-with-corn-and-avocado-200555\">Tomato Stack Salad with Corn and Avocado</a>.",
          "cuisines": [],
          "dishTypes": [
              "side dish",
              "lunch",
              "main course",
              "salad",
              "main dish",
              "dinner"
          ],
          "diets": [
              "gluten free",
              "lacto ovo vegetarian",
              "primal"
          ],
          "occasions": [],
          "instructions": "<ol><li>Mix the fresh herbs into the goat cheese.</li><li>Slice the tomatoes into 4 thick rounds. Sprinkle each tomato round with salt. Gently slather the layers of each tomato with the goat cheese.</li><li>Stack the rounds to reassemble the tomato. Drizzle with balsamic vinegar!</li></ol>",
          "analyzedInstructions": [
              {
                  "name": "",
                  "steps": [
                      {
                          "number": 1,
                          "step": "Mix the fresh herbs into the goat cheese.Slice the tomatoes into 4 thick rounds.",
                          "ingredients": [
                              {
                                  "id": 10111297,
                                  "name": "fresh herbs",
                                  "localizedName": "fresh herbs",
                                  "image": "mixed-fresh-herbs.jpg"
                              },
                              {
                                  "id": 1159,
                                  "name": "goat cheese",
                                  "localizedName": "goat cheese",
                                  "image": "goat-cheese.jpg"
                              },
                              {
                                  "id": 11529,
                                  "name": "tomato",
                                  "localizedName": "tomato",
                                  "image": "tomato.png"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 2,
                          "step": "Sprinkle each tomato round with salt. Gently slather the layers of each tomato with the goat cheese.Stack the rounds to reassemble the tomato.",
                          "ingredients": [
                              {
                                  "id": 1159,
                                  "name": "goat cheese",
                                  "localizedName": "goat cheese",
                                  "image": "goat-cheese.jpg"
                              },
                              {
                                  "id": 11529,
                                  "name": "tomato",
                                  "localizedName": "tomato",
                                  "image": "tomato.png"
                              },
                              {
                                  "id": 2047,
                                  "name": "salt",
                                  "localizedName": "salt",
                                  "image": "salt.jpg"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 3,
                          "step": "Drizzle with balsamic vinegar!",
                          "ingredients": [
                              {
                                  "id": 2069,
                                  "name": "balsamic vinegar",
                                  "localizedName": "balsamic vinegar",
                                  "image": "balsamic-vinegar.jpg"
                              }
                          ],
                          "equipment": []
                      }
                  ]
              }
          ],
          "originalId": null,
          "spoonacularScore": 56.64763641357422,
          "spoonacularSourceUrl": "https://spoonacular.com/tomato-stack-salad-663638"
      },
      {
          "vegetarian": true,
          "vegan": true,
          "glutenFree": true,
          "dairyFree": true,
          "veryHealthy": false,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 4,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 224,
          "healthScore": 6,
          "creditsText": "Full Belly Sisters",
          "license": "CC BY-SA 3.0",
          "sourceName": "Full Belly Sisters",
          "pricePerServing": 138.79,
          "extendedIngredients": [
              {
                  "id": 2069,
                  "aisle": "Oil, Vinegar, Salad Dressing",
                  "image": "balsamic-vinegar.jpg",
                  "consistency": "LIQUID",
                  "name": "balsamic vinegar",
                  "nameClean": "balsamic vinegar",
                  "original": "2T balsamic vinegar",
                  "originalName": "balsamic vinegar",
                  "amount": 2.0,
                  "unit": "T",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              },
              {
                  "id": 1034053,
                  "aisle": "Oil, Vinegar, Salad Dressing",
                  "image": "olive-oil.jpg",
                  "consistency": "LIQUID",
                  "name": "extra virgin olive oil",
                  "nameClean": "extra virgin olive oil",
                  "original": "4T extra virgin olive oil",
                  "originalName": "extra virgin olive oil",
                  "amount": 4.0,
                  "unit": "T",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              },
              {
                  "id": 2044,
                  "aisle": "Produce",
                  "image": "basil.jpg",
                  "consistency": "SOLID",
                  "name": "basil",
                  "nameClean": "fresh basil",
                  "original": "1/4c chopped fresh basil",
                  "originalName": "chopped fresh basil",
                  "amount": 0.25,
                  "unit": "c",
                  "meta": [
                      "fresh",
                      "chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 0.25,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 6.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 2044,
                  "aisle": "Produce",
                  "image": "fresh-basil.jpg",
                  "consistency": "SOLID",
                  "name": "basil",
                  "nameClean": "fresh basil",
                  "original": "1/4c chopped fresh basil",
                  "originalName": "chopped fresh basil",
                  "amount": 0.25,
                  "unit": "c",
                  "meta": [
                      "fresh",
                      "chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 0.25,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 6.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 11215,
                  "aisle": "Produce",
                  "image": "garlic.png",
                  "consistency": "SOLID",
                  "name": "garlic",
                  "nameClean": "garlic",
                  "original": "3 cloves garlic",
                  "originalName": "garlic",
                  "amount": 3.0,
                  "unit": "cloves",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 3.0,
                          "unitShort": "cloves",
                          "unitLong": "cloves"
                      },
                      "metric": {
                          "amount": 3.0,
                          "unitShort": "cloves",
                          "unitLong": "cloves"
                      }
                  }
              },
              {
                  "id": 10111529,
                  "aisle": "Produce",
                  "image": "cherry-tomatoes.png",
                  "consistency": "SOLID",
                  "name": "grape tomatoes",
                  "nameClean": "grape tomato",
                  "original": "2-3 cups grape tomatoes, halved",
                  "originalName": "grape tomatoes, halved",
                  "amount": 2.0,
                  "unit": "cups",
                  "meta": [
                      "halved"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 298.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 11282,
                  "aisle": "Produce",
                  "image": "brown-onion.png",
                  "consistency": "SOLID",
                  "name": "onion",
                  "nameClean": "onion",
                  "original": "1/2 onion, sliced",
                  "originalName": "onion, sliced",
                  "amount": 0.5,
                  "unit": "",
                  "meta": [
                      "sliced"
                  ],
                  "measures": {
                      "us": {
                          "amount": 0.5,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 0.5,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 1032009,
                  "aisle": "Spices and Seasonings",
                  "image": "red-pepper-flakes.jpg",
                  "consistency": "SOLID",
                  "name": "couple of of pepper flakes",
                  "nameClean": "red pepper flakes",
                  "original": "couple of pinches of red pepper flakes",
                  "originalName": "couple of of red pepper flakes",
                  "amount": 2.0,
                  "unit": "pinches",
                  "meta": [
                      "red"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "pinches",
                          "unitLong": "pinches"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "pinches",
                          "unitLong": "pinches"
                      }
                  }
              },
              {
                  "id": 1102047,
                  "aisle": "Spices and Seasonings",
                  "image": "salt-and-pepper.jpg",
                  "consistency": "SOLID",
                  "name": "salt and pepper",
                  "nameClean": "salt and pepper",
                  "original": "salt and freshly-ground pepper, to taste",
                  "originalName": "salt and freshly-ground pepper, to taste",
                  "amount": 4.0,
                  "unit": "servings",
                  "meta": [
                      "freshly-ground",
                      "to taste"
                  ],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "servings",
                          "unitLong": "servings"
                      }
                  }
              }
          ],
          "id": 716413,
          "title": "Oven Roasted Tomato Sauce",
          "readyInMinutes": 45,
          "servings": 4,
          "sourceUrl": "http://fullbellysisters.blogspot.com/2011/10/oven-roasted-tomato-sauce.html",
          "image": "https://spoonacular.com/recipeImages/716413-556x370.jpg",
          "imageType": "jpg",
          "summary": "Oven Roasted Tomato Sauce is a sauce that serves 4. For <b>$1.39 per serving</b>, this recipe <b>covers 5%</b> of your daily requirements of vitamins and minerals. Watching your figure? This gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe has <b>154 calories</b>, <b>1g of protein</b>, and <b>14g of fat</b> per serving. 224 people were glad they tried this recipe. From preparation to the plate, this recipe takes around <b>45 minutes</b>. If you have balsamic vinegar, grape tomatoes, onion, and a few other ingredients on hand, you can make it. It is brought to you by fullbellysisters.blogspot.com. All things considered, we decided this recipe <b>deserves a spoonacular score of 56%</b>. This score is solid. Similar recipes are <a href=\"https://spoonacular.com/recipes/oven-roasted-tomato-sauce-617765\">Oven Roasted Tomato Sauce</a>, <a href=\"https://spoonacular.com/recipes/chicken-parmesan-with-oven-roasted-tomato-sauce-360158\">Chicken Parmesan with Oven-Roasted Tomato Sauce</a>, and <a href=\"https://spoonacular.com/recipes/oven-roasted-tomato-basil-marinara-sauce-800148\">Oven-Roasted Tomato Basil Marinara Sauce</a>.",
          "cuisines": [],
          "dishTypes": [
              "sauce"
          ],
          "diets": [
              "gluten free",
              "dairy free",
              "paleolithic",
              "lacto ovo vegetarian",
              "primal",
              "whole 30",
              "vegan"
          ],
          "occasions": [],
          "instructions": "",
          "analyzedInstructions": [],
          "originalId": null,
          "spoonacularScore": 58.3444938659668,
          "spoonacularSourceUrl": "https://spoonacular.com/oven-roasted-tomato-sauce-716413"
      },
      {
          "vegetarian": false,
          "vegan": false,
          "glutenFree": false,
          "dairyFree": false,
          "veryHealthy": false,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 11,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 2,
          "healthScore": 1,
          "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
          "license": "CC BY 3.0",
          "sourceName": "Foodista",
          "pricePerServing": 98.64,
          "extendedIngredients": [
              {
                  "id": 19312,
                  "aisle": "Baking",
                  "image": "apple-pie-slice.jpg",
                  "consistency": "SOLID",
                  "name": "peach pie filling",
                  "nameClean": "apple pie filling",
                  "original": "1 Can (21 oz) - Peach Pie Filling",
                  "originalName": "Can - Peach Pie Filling",
                  "amount": 21.0,
                  "unit": "oz",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 21.0,
                          "unitShort": "oz",
                          "unitLong": "ounces"
                      },
                      "metric": {
                          "amount": 595.34,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 9042,
                  "aisle": "Produce",
                  "image": "blackberries.jpg",
                  "consistency": "SOLID",
                  "name": "blackberries",
                  "nameClean": "blackberries",
                  "original": "16 ounces - Bag Frozen Blackberries",
                  "originalName": "Bag Frozen Blackberries",
                  "amount": 16.0,
                  "unit": "ounces",
                  "meta": [
                      "frozen"
                  ],
                  "measures": {
                      "us": {
                          "amount": 16.0,
                          "unitShort": "oz",
                          "unitLong": "ounces"
                      },
                      "metric": {
                          "amount": 453.592,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 1001,
                  "aisle": "Milk, Eggs, Other Dairy",
                  "image": "butter-sliced.jpg",
                  "consistency": "SOLID",
                  "name": "tbs. - butter",
                  "nameClean": "butter",
                  "original": "6 smalls Tbs. - Butter ( cut into cubes)",
                  "originalName": "s Tbs. - Butter ( cut into cubes)",
                  "amount": 6.0,
                  "unit": "small",
                  "meta": [
                      "cut into cubes)"
                  ],
                  "measures": {
                      "us": {
                          "amount": 6.0,
                          "unitShort": "small",
                          "unitLong": "smalls"
                      },
                      "metric": {
                          "amount": 6.0,
                          "unitShort": "small",
                          "unitLong": "smalls"
                      }
                  }
              },
              {
                  "id": 10018617,
                  "aisle": "Sweet Snacks",
                  "image": "graham-crackers.jpg",
                  "consistency": "SOLID",
                  "name": "graham cracker crumbs",
                  "nameClean": "graham cracker crumbs",
                  "original": "1 cup - Graham Cracker Crumbs",
                  "originalName": "Graham Cracker Crumbs",
                  "amount": 1.0,
                  "unit": "cup",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "cup",
                          "unitLong": "cup"
                      },
                      "metric": {
                          "amount": 84.0,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 1012010,
                  "aisle": "Spices and Seasonings",
                  "image": "cinnamon.jpg",
                  "consistency": "SOLID",
                  "name": "ground cinnamon",
                  "nameClean": "ground cinnamon",
                  "original": "3/4 teaspoon ground cinnamon",
                  "originalName": "ground cinnamon",
                  "amount": 0.75,
                  "unit": "teaspoon",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 0.75,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      },
                      "metric": {
                          "amount": 0.75,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      }
                  }
              },
              {
                  "id": 19335,
                  "aisle": "Baking",
                  "image": "sugar-in-bowl.png",
                  "consistency": "SOLID",
                  "name": "¼ - sugar",
                  "nameClean": "sugar",
                  "original": "cup ¼ - Sugar",
                  "originalName": "¼ - Sugar",
                  "amount": 1.0,
                  "unit": "cup",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "cup",
                          "unitLong": "cup"
                      },
                      "metric": {
                          "amount": 200.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              }
          ],
          "id": 635226,
          "title": "Blackberry Peach Betty",
          "readyInMinutes": 45,
          "servings": 8,
          "sourceUrl": "http://www.foodista.com/recipe/2RBTSSP4/blackberry-peach-betty",
          "image": "https://spoonacular.com/recipeImages/635226-556x370.jpg",
          "imageType": "jpg",
          "summary": "Blackberry Peach Betty takes roughly <b>45 minutes</b> from beginning to end. This recipe serves 8 and costs 99 cents per serving. One serving contains <b>245 calories</b>, <b>2g of protein</b>, and <b>2g of fat</b>. Not a lot of people made this recipe, and 2 would say it hit the spot. It works well as a side dish. A mixture of peach pie filling, ground cinnamon, ¼ - sugar, and a handful of other ingredients are all it takes to make this recipe so delicious. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 16%</b>. This score is rather bad. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/blackberry-peach-betty-1364611\">Blackberry Peach Betty</a>, <a href=\"https://spoonacular.com/recipes/blackberry-and-apple-brown-betty-597249\">Blackberry and Apple Brown Betty</a>, and <a href=\"https://spoonacular.com/recipes/blackberry-brown-betty-with-pecan-crumble-744353\">Blackberry Brown Betty with Pecan Crumble</a>.",
          "cuisines": [],
          "dishTypes": [
              "side dish"
          ],
          "diets": [],
          "occasions": [],
          "instructions": "<ol><li>Spray the slow cooker with the cooking spray and set aside. In a medium sized bowl mix the peaches, blackberries, sugar and cinnamon. Pour half of the fruit mix into the bottom of the slow cooker and top with half of the crumbs and butter, repeat with remaining ingredients. Cover and cook on low for 3-4 hours. Serve hot over French vanilla ice-cream.</li></ol>",
          "analyzedInstructions": [
              {
                  "name": "",
                  "steps": [
                      {
                          "number": 1,
                          "step": "Spray the slow cooker with the cooking spray and set aside. In a medium sized bowl mix the peaches, blackberries, sugar and cinnamon.",
                          "ingredients": [
                              {
                                  "id": 4679,
                                  "name": "cooking spray",
                                  "localizedName": "cooking spray",
                                  "image": "cooking-spray.png"
                              },
                              {
                                  "id": 9042,
                                  "name": "blackberries",
                                  "localizedName": "blackberries",
                                  "image": "blackberries.jpg"
                              },
                              {
                                  "id": 2010,
                                  "name": "cinnamon",
                                  "localizedName": "cinnamon",
                                  "image": "cinnamon.jpg"
                              },
                              {
                                  "id": 9236,
                                  "name": "peach",
                                  "localizedName": "peach",
                                  "image": "peach.png"
                              },
                              {
                                  "id": 19335,
                                  "name": "sugar",
                                  "localizedName": "sugar",
                                  "image": "sugar-in-bowl.png"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404718,
                                  "name": "slow cooker",
                                  "localizedName": "slow cooker",
                                  "image": "slow-cooker.jpg"
                              },
                              {
                                  "id": 404783,
                                  "name": "bowl",
                                  "localizedName": "bowl",
                                  "image": "bowl.jpg"
                              }
                          ]
                      },
                      {
                          "number": 2,
                          "step": "Pour half of the fruit mix into the bottom of the slow cooker and top with half of the crumbs and butter, repeat with remaining ingredients. Cover and cook on low for 3-4 hours.",
                          "ingredients": [
                              {
                                  "id": 1001,
                                  "name": "butter",
                                  "localizedName": "butter",
                                  "image": "butter-sliced.jpg"
                              },
                              {
                                  "id": 9431,
                                  "name": "fruit",
                                  "localizedName": "fruit",
                                  "image": "mixed-fresh-fruit.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404718,
                                  "name": "slow cooker",
                                  "localizedName": "slow cooker",
                                  "image": "slow-cooker.jpg"
                              }
                          ],
                          "length": {
                              "number": 240,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 3,
                          "step": "Serve hot over French vanilla ice-cream.",
                          "ingredients": [
                              {
                                  "id": 1052050,
                                  "name": "vanilla",
                                  "localizedName": "vanilla",
                                  "image": "vanilla.jpg"
                              },
                              {
                                  "id": 1053,
                                  "name": "cream",
                                  "localizedName": "cream",
                                  "image": "fluid-cream.jpg"
                              },
                              {
                                  "id": 10014412,
                                  "name": "ice",
                                  "localizedName": "ice",
                                  "image": "ice-cubes.png"
                              }
                          ],
                          "equipment": []
                      }
                  ]
              }
          ],
          "originalId": null,
          "spoonacularScore": 27.473724365234375,
          "spoonacularSourceUrl": "https://spoonacular.com/blackberry-peach-betty-635226"
      },
      {
          "vegetarian": false,
          "vegan": false,
          "glutenFree": true,
          "dairyFree": false,
          "veryHealthy": false,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 8,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 10,
          "healthScore": 37,
          "creditsText": "foodista.com",
          "sourceName": "foodista.com",
          "pricePerServing": 305.13,
          "extendedIngredients": [
              {
                  "id": 15076,
                  "aisle": "Seafood",
                  "image": "salmon.png",
                  "consistency": "SOLID",
                  "name": "salmon",
                  "nameClean": "salmon",
                  "original": "4 salmon, fillets, (about 1 lb total)",
                  "originalName": "salmon, fillets, (about 1 lb total)",
                  "amount": 4.0,
                  "unit": "",
                  "meta": [
                      "( 1 lb total)"
                  ],
                  "measures": {
                      "us": {
                          "amount": 4.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 4.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 4053,
                  "aisle": "Oil, Vinegar, Salad Dressing",
                  "image": "olive-oil.jpg",
                  "consistency": "SOLID",
                  "name": "olive oil",
                  "nameClean": "olive oil",
                  "original": "2 tablespoons olive oil",
                  "originalName": "olive oil",
                  "amount": 2.0,
                  "unit": "tablespoons",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              },
              {
                  "id": 9150,
                  "aisle": "Produce",
                  "image": "lemon.png",
                  "consistency": "SOLID",
                  "name": "lemon",
                  "nameClean": "lemon",
                  "original": "1 teaspoon grated lemon, rind",
                  "originalName": "grated lemon, rind",
                  "amount": 1.0,
                  "unit": "teaspoon",
                  "meta": [
                      "grated"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "tsp",
                          "unitLong": "teaspoon"
                      }
                  }
              },
              {
                  "id": 9152,
                  "aisle": "Produce",
                  "image": "lemon-juice.jpg",
                  "consistency": "LIQUID",
                  "name": "juice of lemon",
                  "nameClean": "lemon juice",
                  "original": "2 tablespoons lemon, juice",
                  "originalName": "lemon, juice",
                  "amount": 2.0,
                  "unit": "",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 11156,
                  "aisle": "Produce",
                  "image": "fresh-chives.jpg",
                  "consistency": "SOLID",
                  "name": "chives",
                  "nameClean": "chives",
                  "original": "1 tablespoon chopped fresh chives or 1 tbsp chopped green onion",
                  "originalName": "chopped fresh chives or 1 tbsp chopped green onion",
                  "amount": 1.0,
                  "unit": "tablespoon",
                  "meta": [
                      "fresh",
                      "chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "Tbsp",
                          "unitLong": "Tbsp"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "Tbsp",
                          "unitLong": "Tbsp"
                      }
                  }
              },
              {
                  "id": 1032046,
                  "aisle": "Condiments",
                  "image": "dijon-mustard.jpg",
                  "consistency": "LIQUID",
                  "name": "dijon mustard",
                  "nameClean": "dijon mustard",
                  "original": "2 teaspoons Dijon mustard",
                  "originalName": "Dijon mustard",
                  "amount": 2.0,
                  "unit": "teaspoons",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      }
                  }
              },
              {
                  "id": 2047,
                  "aisle": "Spices and Seasonings",
                  "image": "salt.jpg",
                  "consistency": "SOLID",
                  "name": "salt",
                  "nameClean": "table salt",
                  "original": "1 pinch salt",
                  "originalName": "salt",
                  "amount": 1.0,
                  "unit": "pinch",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "pinch",
                          "unitLong": "pinch"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "pinch",
                          "unitLong": "pinch"
                      }
                  }
              },
              {
                  "id": 1002030,
                  "aisle": "Spices and Seasonings",
                  "image": "pepper.jpg",
                  "consistency": "SOLID",
                  "name": "pepper",
                  "nameClean": "black pepper",
                  "original": "1 pinch pepper",
                  "originalName": "pepper",
                  "amount": 1.0,
                  "unit": "pinch",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "pinch",
                          "unitLong": "pinch"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "pinch",
                          "unitLong": "pinch"
                      }
                  }
              },
              {
                  "id": 1056,
                  "aisle": "Milk, Eggs, Other Dairy",
                  "image": "sour-cream.jpg",
                  "consistency": "SOLID",
                  "name": "cream",
                  "nameClean": "sour cream",
                  "original": "1 cup sour cream",
                  "originalName": "sour cream",
                  "amount": 1.0,
                  "unit": "cup",
                  "meta": [
                      "sour"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "cup",
                          "unitLong": "cup"
                      },
                      "metric": {
                          "amount": 230.0,
                          "unitShort": "ml",
                          "unitLong": "milliliters"
                      }
                  }
              },
              {
                  "id": 11206,
                  "aisle": "Produce",
                  "image": "cucumber.jpg",
                  "consistency": "SOLID",
                  "name": "cucumber",
                  "nameClean": "cucumber",
                  "original": "2 tablespoons finely chopped cucumber",
                  "originalName": "finely chopped cucumber",
                  "amount": 2.0,
                  "unit": "tablespoons",
                  "meta": [
                      "finely chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "Tbsps",
                          "unitLong": "Tbsps"
                      }
                  }
              },
              {
                  "id": 2017,
                  "aisle": "Spices and Seasonings",
                  "image": "dill.jpg",
                  "consistency": "SOLID",
                  "name": "dill or",
                  "nameClean": "dried dill",
                  "original": "1 tablespoon chopped fresh dill or ½ tsp dried dill, weed",
                  "originalName": "chopped fresh dill or ½ tsp dried dill, weed",
                  "amount": 1.0,
                  "unit": "tablespoon",
                  "meta": [
                      "dried",
                      "fresh",
                      "chopped"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "Tbsp",
                          "unitLong": "Tbsp"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "Tbsp",
                          "unitLong": "Tbsp"
                      }
                  }
              },
              {
                  "id": 11156,
                  "aisle": "Produce",
                  "image": "fresh-chives.jpg",
                  "consistency": "SOLID",
                  "name": "chives",
                  "nameClean": "chives",
                  "original": "2 teaspoons minced fresh chives or 2 tsp minced green onion",
                  "originalName": "minced fresh chives or 2 tsp minced green onion",
                  "amount": 2.0,
                  "unit": "teaspoons",
                  "meta": [
                      "fresh",
                      "minced"
                  ],
                  "measures": {
                      "us": {
                          "amount": 2.0,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      },
                      "metric": {
                          "amount": 2.0,
                          "unitShort": "tsps",
                          "unitLong": "teaspoons"
                      }
                  }
              }
          ],
          "id": 637335,
          "title": "Cedar-Planked Salmon With Mustard Dill Sauce",
          "readyInMinutes": 45,
          "servings": 6,
          "sourceUrl": "https://www.foodista.com/recipe/CQSVSJHC/cedar-planked-salmon-with-mustard-dill-sauce",
          "image": "https://spoonacular.com/recipeImages/637335-556x370.jpg",
          "imageType": "jpg",
          "summary": "Cedar-Planked Salmon With Mustard Dill Sauce is a main course that serves 6. For <b>$3.05 per serving</b>, this recipe <b>covers 18%</b> of your daily requirements of vitamins and minerals. One serving contains <b>284 calories</b>, <b>24g of protein</b>, and <b>19g of fat</b>. If you have salmon, cream, chives, and a few other ingredients on hand, you can make it. 10 people have tried and liked this recipe. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, primal, pescatarian, and ketogenic</b> diet. It is brought to you by Foodista. With a spoonacular <b>score of 82%</b>, this dish is awesome. Similar recipes include <a href=\"https://spoonacular.com/recipes/cedar-planked-salmon-with-maple-mustard-glaze-4649\">Cedar Planked Salmon With Maple Mustard Glaze</a>, <a href=\"https://spoonacular.com/recipes/cedar-planked-salmon-with-sweet-mustard-vinaigrette-86809\">Cedar Planked Salmon With Sweet Mustard Vinaigrette</a>, and <a href=\"https://spoonacular.com/recipes/cedar-planked-salmon-with-fresh-sorrel-sauce-610524\">Cedar-Planked Salmon with Fresh Sorrel Sauce</a>.",
          "cuisines": [],
          "dishTypes": [
              "lunch",
              "main course",
              "main dish",
              "dinner"
          ],
          "diets": [
              "gluten free",
              "primal",
              "pescatarian",
              "ketogenic"
          ],
          "occasions": [],
          "instructions": "Soak two 12- x 7-inch (30 x 18 cm) untreated cedar planks in water for at least 30 minutes or for up to 24 hours.\nPlace salmon fillets on top of each plank.\nIn small bowl, whisk together oil, lemon rind and juice, chives, mustard, salt and pepper; brush some over salmon.\nPlace planks on grill over medium-high heat; close lid and cook, brushing with remaining lemon mixture for about 20 minutes or until fish flakes easily when tested with fork.\nDill Sauce:Meanwhile, in small bowl, combine sour cream, cucumber, dill, chives, salt and pepper.\nServe planks on platter with dill sauce.",
          "analyzedInstructions": [
              {
                  "name": "",
                  "steps": [
                      {
                          "number": 1,
                          "step": "Soak two 12- x 7-inch (30 x 18 cm) untreated cedar planks in water for at least 30 minutes or for up to 24 hours.",
                          "ingredients": [
                              {
                                  "id": 14412,
                                  "name": "water",
                                  "localizedName": "water",
                                  "image": "water.png"
                              }
                          ],
                          "equipment": [],
                          "length": {
                              "number": 1470,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 2,
                          "step": "Place salmon fillets on top of each plank.",
                          "ingredients": [
                              {
                                  "id": 10115076,
                                  "name": "salmon fillets",
                                  "localizedName": "salmon fillets",
                                  "image": "salmon.png"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 3,
                          "step": "In small bowl, whisk together oil, lemon rind and juice, chives, mustard, salt and pepper; brush some over salmon.",
                          "ingredients": [
                              {
                                  "id": 1102047,
                                  "name": "salt and pepper",
                                  "localizedName": "salt and pepper",
                                  "image": "salt-and-pepper.jpg"
                              },
                              {
                                  "id": 9156,
                                  "name": "lemon peel",
                                  "localizedName": "lemon peel",
                                  "image": "zest-lemon.jpg"
                              },
                              {
                                  "id": 2046,
                                  "name": "mustard",
                                  "localizedName": "mustard",
                                  "image": "regular-mustard.jpg"
                              },
                              {
                                  "id": 11156,
                                  "name": "chives",
                                  "localizedName": "chives",
                                  "image": "fresh-chives.jpg"
                              },
                              {
                                  "id": 15076,
                                  "name": "salmon",
                                  "localizedName": "salmon",
                                  "image": "salmon.png"
                              },
                              {
                                  "id": 1019016,
                                  "name": "juice",
                                  "localizedName": "juice",
                                  "image": "apple-juice.jpg"
                              },
                              {
                                  "id": 4582,
                                  "name": "cooking oil",
                                  "localizedName": "cooking oil",
                                  "image": "vegetable-oil.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404661,
                                  "name": "whisk",
                                  "localizedName": "whisk",
                                  "image": "whisk.png"
                              },
                              {
                                  "id": 404783,
                                  "name": "bowl",
                                  "localizedName": "bowl",
                                  "image": "bowl.jpg"
                              }
                          ]
                      },
                      {
                          "number": 4,
                          "step": "Place planks on grill over medium-high heat; close lid and cook, brushing with remaining lemon mixture for about 20 minutes or until fish flakes easily when tested with fork.",
                          "ingredients": [
                              {
                                  "id": 9150,
                                  "name": "lemon",
                                  "localizedName": "lemon",
                                  "image": "lemon.png"
                              },
                              {
                                  "id": 10115261,
                                  "name": "fish",
                                  "localizedName": "fish",
                                  "image": "fish-fillet.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404706,
                                  "name": "grill",
                                  "localizedName": "grill",
                                  "image": "grill.jpg"
                              }
                          ],
                          "length": {
                              "number": 20,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 5,
                          "step": "Dill Sauce:Meanwhile, in small bowl, combine sour cream, cucumber, dill, chives, salt and pepper.",
                          "ingredients": [
                              {
                                  "id": 1102047,
                                  "name": "salt and pepper",
                                  "localizedName": "salt and pepper",
                                  "image": "salt-and-pepper.jpg"
                              },
                              {
                                  "id": 1056,
                                  "name": "sour cream",
                                  "localizedName": "sour cream",
                                  "image": "sour-cream.jpg"
                              },
                              {
                                  "id": 11206,
                                  "name": "cucumber",
                                  "localizedName": "cucumber",
                                  "image": "cucumber.jpg"
                              },
                              {
                                  "id": 11156,
                                  "name": "chives",
                                  "localizedName": "chives",
                                  "image": "fresh-chives.jpg"
                              },
                              {
                                  "id": 0,
                                  "name": "sauce",
                                  "localizedName": "sauce",
                                  "image": ""
                              },
                              {
                                  "id": 2045,
                                  "name": "dill",
                                  "localizedName": "dill",
                                  "image": "dill.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404783,
                                  "name": "bowl",
                                  "localizedName": "bowl",
                                  "image": "bowl.jpg"
                              }
                          ]
                      },
                      {
                          "number": 6,
                          "step": "Serve planks on platter with dill sauce.",
                          "ingredients": [
                              {
                                  "id": 0,
                                  "name": "sauce",
                                  "localizedName": "sauce",
                                  "image": ""
                              },
                              {
                                  "id": 2045,
                                  "name": "dill",
                                  "localizedName": "dill",
                                  "image": "dill.jpg"
                              }
                          ],
                          "equipment": []
                      }
                  ]
              }
          ],
          "originalId": null,
          "spoonacularScore": 87.49678039550781,
          "spoonacularSourceUrl": "https://spoonacular.com/cedar-planked-salmon-with-mustard-dill-sauce-637335"
      },
      {
          "vegetarian": true,
          "vegan": false,
          "glutenFree": false,
          "dairyFree": false,
          "veryHealthy": false,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 1,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 5,
          "healthScore": 0,
          "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
          "license": "CC BY 3.0",
          "sourceName": "Foodista",
          "pricePerServing": 26.65,
          "extendedIngredients": [
              {
                  "id": 18337,
                  "aisle": "Refrigerated",
                  "image": "puff-pastry.png",
                  "consistency": "SOLID",
                  "name": "puff pastry",
                  "nameClean": "puff pastry dough",
                  "original": "1 pkg puff pastry (2 sheets)",
                  "originalName": "pkg puff pastry (2 sheets)",
                  "amount": 1.0,
                  "unit": "pkg sheets",
                  "meta": [
                      "(2 sheets)"
                  ],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "pkg sheets",
                          "unitLong": "pkg sheet"
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "pkg sheets",
                          "unitLong": "pkg sheet"
                      }
                  }
              },
              {
                  "id": 1006,
                  "aisle": "Cheese",
                  "image": "brie.jpg",
                  "consistency": "SOLID",
                  "name": "brie log",
                  "nameClean": "brie",
                  "original": "1- 6 oz brie log, cut into 24 even slices",
                  "originalName": "brie log, cut into 24 even slices",
                  "amount": 6.0,
                  "unit": "oz",
                  "meta": [
                      "cut into 24 even slices"
                  ],
                  "measures": {
                      "us": {
                          "amount": 6.0,
                          "unitShort": "oz",
                          "unitLong": "ounces"
                      },
                      "metric": {
                          "amount": 170.097,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 9094,
                  "aisle": "Produce",
                  "image": "figs-dried.jpg",
                  "consistency": "SOLID",
                  "name": "figs",
                  "nameClean": "dried figs",
                  "original": "9 oz dried figs, sliced thin",
                  "originalName": "dried figs, sliced thin",
                  "amount": 9.0,
                  "unit": "oz",
                  "meta": [
                      "dried",
                      "sliced",
                      "thin"
                  ],
                  "measures": {
                      "us": {
                          "amount": 9.0,
                          "unitShort": "oz",
                          "unitLong": "ounces"
                      },
                      "metric": {
                          "amount": 255.146,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 9016,
                  "aisle": "Beverages",
                  "image": "apple-juice.jpg",
                  "consistency": "LIQUID",
                  "name": "apple juice",
                  "nameClean": "apple juice",
                  "original": "1 apple juice",
                  "originalName": "apple juice",
                  "amount": 1.0,
                  "unit": "",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              },
              {
                  "id": 19335,
                  "aisle": "Baking",
                  "image": "sugar-in-bowl.png",
                  "consistency": "SOLID",
                  "name": "sugar",
                  "nameClean": "sugar",
                  "original": "1/2 cup sugar",
                  "originalName": "sugar",
                  "amount": 0.5,
                  "unit": "cup",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 0.5,
                          "unitShort": "cups",
                          "unitLong": "cups"
                      },
                      "metric": {
                          "amount": 100.0,
                          "unitShort": "g",
                          "unitLong": "grams"
                      }
                  }
              },
              {
                  "id": 9152,
                  "aisle": "Produce",
                  "image": "lemon-juice.jpg",
                  "consistency": "LIQUID",
                  "name": "juice of lemon",
                  "nameClean": "lemon juice",
                  "original": "juice of 1 lemon",
                  "originalName": "juice of lemon",
                  "amount": 1.0,
                  "unit": "",
                  "meta": [],
                  "measures": {
                      "us": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      },
                      "metric": {
                          "amount": 1.0,
                          "unitShort": "",
                          "unitLong": ""
                      }
                  }
              }
          ],
          "id": 636098,
          "title": "Brie Bundles with Homemade Fig Jam",
          "readyInMinutes": 45,
          "servings": 24,
          "sourceUrl": "https://www.foodista.com/recipe/K7LK36CV/brie-bundles-with-homemade-fig-jam",
          "image": "https://spoonacular.com/recipeImages/636098-556x370.jpg",
          "imageType": "jpg",
          "summary": "The recipe Brie Bundles with Homemade Fig Jam can be made <b>in approximately 45 minutes</b>. This recipe serves 24 and costs 27 cents per serving. This hor d'oeuvre has <b>67 calories</b>, <b>2g of protein</b>, and <b>2g of fat</b> per serving. 5 people have made this recipe and would make it again. A mixture of puff pastry, juice of lemon, figs, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It is a good option if you're following a <b>lacto ovo vegetarian</b> diet. It is brought to you by Foodista. With a spoonacular <b>score of 18%</b>, this dish is rather bad. <a href=\"https://spoonacular.com/recipes/fig-jam-and-brie-crostini-appetizer-1039241\">Fig Jam and Brie Crostini Appetizer</a>, <a href=\"https://spoonacular.com/recipes/crostini-with-cranberry-fig-jam-and-brie-1691567\">Crostini with Cranberry Fig Jam and Brie</a>, and <a href=\"https://spoonacular.com/recipes/honey-baked-brie-with-fig-jam-and-walnuts-1572023\">Honey Baked Brie with Fig Jam and Walnuts</a> are very similar to this recipe.",
          "cuisines": [],
          "dishTypes": [
              "antipasti",
              "starter",
              "snack",
              "appetizer",
              "antipasto",
              "hor d'oeuvre"
          ],
          "diets": [
              "lacto ovo vegetarian"
          ],
          "occasions": [],
          "instructions": "Oven at 375 degrees.\nLets make the fabulous fig jam! Into a small saucepan, over low heat, add in the figs, apple juice, sugar and lemon juice. Simmer for 15-20 minutes, until the figs are softened and the mixture has thickened a bit.\nUsing either an immersion blender of food processor, puree the jam until the large pieces of fig are broken down and the jam is relatively smooth but the seeds still visible. Allow the jam to cool.\nUnroll the two sheets of puff pastry out on a piece of parchment and cut into 12 even squares. Place a piece of brie and a small spoonful of the fig jam to the center of each square.\nFold each corner to the center, don't worry about them all looking exactly the same. Be sure to pinch the edges closed.\nPlace the bundles onto a parchment lined baking sheet. Bake for approx 15-18 minutes or until golden.",
          "analyzedInstructions": [
              {
                  "name": "",
                  "steps": [
                      {
                          "number": 1,
                          "step": "Oven at 375 degrees.",
                          "ingredients": [],
                          "equipment": [
                              {
                                  "id": 404784,
                                  "name": "oven",
                                  "localizedName": "oven",
                                  "image": "oven.jpg"
                              }
                          ]
                      },
                      {
                          "number": 2,
                          "step": "Lets make the fabulous fig jam! Into a small saucepan, over low heat, add in the figs, apple juice, sugar and lemon juice. Simmer for 15-20 minutes, until the figs are softened and the mixture has thickened a bit.",
                          "ingredients": [
                              {
                                  "id": 9016,
                                  "name": "apple juice",
                                  "localizedName": "apple juice",
                                  "image": "apple-juice.jpg"
                              },
                              {
                                  "id": 9152,
                                  "name": "lemon juice",
                                  "localizedName": "lemon juice",
                                  "image": "lemon-juice.jpg"
                              },
                              {
                                  "id": 11519297,
                                  "name": "fig jam",
                                  "localizedName": "fig jam",
                                  "image": "fig-preserves.jpg"
                              },
                              {
                                  "id": 19335,
                                  "name": "sugar",
                                  "localizedName": "sugar",
                                  "image": "sugar-in-bowl.png"
                              },
                              {
                                  "id": 9089,
                                  "name": "figs",
                                  "localizedName": "figs",
                                  "image": "figs-fresh.jpg"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404669,
                                  "name": "sauce pan",
                                  "localizedName": "sauce pan",
                                  "image": "sauce-pan.jpg"
                              }
                          ],
                          "length": {
                              "number": 20,
                              "unit": "minutes"
                          }
                      },
                      {
                          "number": 3,
                          "step": "Using either an immersion blender of food processor, puree the jam until the large pieces of fig are broken down and the jam is relatively smooth but the seeds still visible. Allow the jam to cool.",
                          "ingredients": [
                              {
                                  "id": 93818,
                                  "name": "seeds",
                                  "localizedName": "seeds",
                                  "image": "sunflower-seeds.jpg"
                              },
                              {
                                  "id": 9089,
                                  "name": "figs",
                                  "localizedName": "figs",
                                  "image": "figs-fresh.jpg"
                              },
                              {
                                  "id": 19297,
                                  "name": "jam",
                                  "localizedName": "jam",
                                  "image": "strawberry-jam.png"
                              }
                          ],
                          "equipment": [
                              {
                                  "id": 404776,
                                  "name": "immersion blender",
                                  "localizedName": "immersion blender",
                                  "image": "immersion-blender.png"
                              },
                              {
                                  "id": 404771,
                                  "name": "food processor",
                                  "localizedName": "food processor",
                                  "image": "food-processor.png"
                              }
                          ]
                      },
                      {
                          "number": 4,
                          "step": "Unroll the two sheets of puff pastry out on a piece of parchment and cut into 12 even squares.",
                          "ingredients": [
                              {
                                  "id": 18337,
                                  "name": "puff pastry sheets",
                                  "localizedName": "puff pastry sheets",
                                  "image": "puff-pastry.png"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 5,
                          "step": "Place a piece of brie and a small spoonful of the fig jam to the center of each square.",
                          "ingredients": [
                              {
                                  "id": 11519297,
                                  "name": "fig jam",
                                  "localizedName": "fig jam",
                                  "image": "fig-preserves.jpg"
                              },
                              {
                                  "id": 1006,
                                  "name": "brie",
                                  "localizedName": "brie",
                                  "image": "brie.jpg"
                              }
                          ],
                          "equipment": []
                      },
                      {
                          "number": 6,
                          "step": "Fold each corner to the center, don't worry about them all looking exactly the same. Be sure to pinch the edges closed.",
                          "ingredients": [],
                          "equipment": []
                      },
                      {
                          "number": 7,
                          "step": "Place the bundles onto a parchment lined baking sheet.",
                          "ingredients": [],
                          "equipment": [
                              {
                                  "id": 404727,
                                  "name": "baking sheet",
                                  "localizedName": "baking sheet",
                                  "image": "baking-sheet.jpg"
                              }
                          ]
                      },
                      {
                          "number": 8,
                          "step": "Bake for approx 15-18 minutes or until golden.",
                          "ingredients": [],
                          "equipment": [
                              {
                                  "id": 404784,
                                  "name": "oven",
                                  "localizedName": "oven",
                                  "image": "oven.jpg"
                              }
                          ],
                          "length": {
                              "number": 18,
                              "unit": "minutes"
                          }
                      }
                  ]
              }
          ],
          "originalId": null,
          "spoonacularScore": 5.695234775543213,
          "spoonacularSourceUrl": "https://spoonacular.com/brie-bundles-with-homemade-fig-jam-636098"
      }
]

}
