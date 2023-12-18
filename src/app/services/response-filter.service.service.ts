import { Injectable } from '@angular/core';
import { RecipeInterface } from '../interfaces/recipe-interface';
import { FavoritesService } from './favorites.service';

@Injectable({
  providedIn: 'root'
})


export class ResponseFilterServiceService {
  constructor(private favoritesService: FavoritesService){}
  
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
