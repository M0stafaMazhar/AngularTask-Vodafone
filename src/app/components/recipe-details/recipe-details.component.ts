import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {
recipe = {
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
}



}
