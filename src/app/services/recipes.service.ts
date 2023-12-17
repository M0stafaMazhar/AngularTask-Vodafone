import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FavoritesService } from './favorites.service';
import { RecipeInterface } from '../interfaces/recipe-interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  apiUrl = "https://api.spoonacular.com/recipes/random?number=12&apiKey=3926487ae16b4b0bba017bef833eaea4&includeNutrition=false";
  
  recipesList:RecipeInterface[];
  
  constructor(private http: HttpClient , private favoritesService: FavoritesService) { 
  
  }

  getRecipesData():Observable<RecipeInterface[]>{
      return this.http.get<{recipes}>(this.apiUrl).pipe(
        map(
          ({recipes}) => {
            this.recipesList = recipes.map((recipe)=> this.filterResponse(recipe));
            return this.recipesList;
          }
          )
        )     
  }

  getRecipeDetails(recipeId: number): Observable<RecipeInterface>{
    return this.http.get<any>(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=3926487ae16b4b0bba017bef833eaea4&includeNutrition=false`)
    .pipe(map((recipe)=> this.filterResponse(recipe)))
  }


  // getRecipeDetails(recipeId: number):RecipeInterface{
  //   return this.recipesList.find(recipe => recipe.id === recipeId)
  // }






  filterResponse(responseRecipe: any):RecipeInterface{  // Filter and transform the API response to match recipe model
    return {
      id: responseRecipe.id,
      title: responseRecipe.title,
      description: responseRecipe.summary,
      likes: responseRecipe.aggregateLikes,
      readyTime: responseRecipe.readyInMinutes,
      pricePerServing: responseRecipe.pricePerServing,
      instructions: responseRecipe.instructions,
      image: responseRecipe.image,
      ingredients: responseRecipe.extendedIngredients.map((ingredient)=> ({name: ingredient.nameClean})),
      isFavorite: this.favoritesService.isFavorite(responseRecipe.id)  //Add a favorite flag to the recipe
    }
    
  }



}
