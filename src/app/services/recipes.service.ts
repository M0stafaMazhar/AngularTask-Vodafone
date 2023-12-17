import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FavoritesService } from './favorites.service';
import { RecipeInterface } from '../interfaces/recipe-interface';
import { Observable } from 'rxjs';

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
      ({recipes}) => this.filterResponse(recipes)
      )
    )}


  filterResponse(responseData: any):RecipeInterface[]{  // Filter and transform the API response
    return responseData.map(recipe => ({
      id: recipe.id,
      title: recipe.title,
      description: recipe.summary,
      likes: recipe.aggregateLikes,
      readyTime: recipe.readyInMinutes,
      pricePerServing: recipe.pricePerServing,
      instructions: recipe.instructions,
      image: recipe.image,
      ingredients: recipe.extendedIngredients.map((ingredient)=> ingredient.nameClean),
      isFavorite: this.favoritesService.isFavorite(recipe.id)  //Add a favorite flag to the recipe
    })
    )
  }



}
