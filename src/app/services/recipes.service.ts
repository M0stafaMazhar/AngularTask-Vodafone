import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FavoritesService } from './favorites.service';
import { RecipeInterface } from '../interfaces/recipe-interface';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  apiUrl = "https://api.spoonacular.com/recipes";

  numOfRecipes: string = "36";
  apiKey:string = environment.spoonacularApiKey;
  includeNutrition:string = "false";

  recipesList:RecipeInterface[];
  
  constructor(private http: HttpClient , private favoritesService: FavoritesService) { 
  
  }

  getRecipesData():Observable<RecipeInterface[]>{
      return this.http.get<{recipes}>(`${this.apiUrl}/random?number=${this.numOfRecipes}&apiKey=${this.apiKey}&includeNutretion=${this.includeNutrition}`).pipe(
        map(
          ({recipes}) => {
            this.recipesList = recipes.map((recipe)=> this.filterResponse(recipe));
            return this.recipesList;
          }
          )
        )     
  }

  getRecipeDetails(recipeId: number): Observable<RecipeInterface>{
    return this.http.get<any>(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${this.apiKey}&includeNutrition=false`)
    .pipe(map((recipe)=> this.filterResponse(recipe)))
  }


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
