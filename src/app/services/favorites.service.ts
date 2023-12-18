import { Injectable, untracked } from '@angular/core';
import { RecipeInterface } from '../interfaces/recipe-interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favoriteRecipes: RecipeInterface[];

  updateFavorites = new Subject<RecipeInterface[]>;

  constructor(){
    const localStorageData = localStorage.getItem('favoriteRecipes');  //get local storage data
    if(localStorageData == "" || localStorageData == null){ //check if local storage data exists
      this.favoriteRecipes = [];
    }
    else{
      this.favoriteRecipes = JSON.parse(localStorage.getItem("favoriteRecipes"));
    }

  }

  getFavorites():RecipeInterface[]{ //return favorite recipes list
    return [...this.favoriteRecipes];
  }

  isFavorite(recipeId:number): boolean{ //check if the recipe is a favorite recipe or not based on the  recipe id
    if(this.favoriteRecipes.some(recipe => recipe.id === recipeId)){
      return true;
    } else {
      return false;
    }
  }

  addToFavorites(recipe:RecipeInterface){
    this.favoriteRecipes.push(recipe);
  }

  removeFromFavorites(recipeId : number){
    this.favoriteRecipes = this.favoriteRecipes.filter(recipe => recipe.id !== recipeId);
    this.updateFavorites.next([...this.favoriteRecipes])//emmit subject indecate recipe remove and emit new favorites list
  }

  toggleFavorite(recipe: RecipeInterface){ //add / remove recipe from list based on its state and change the state for UI update
    if(recipe.isFavorite){
      this.removeFromFavorites(recipe.id);
      recipe.isFavorite = false;
    } else {
      this.addToFavorites(recipe);
      recipe.isFavorite = true;
    }

    this.saveToLocalStorage();
    
  }

  saveToLocalStorage(){
    localStorage.setItem('favoriteRecipes' , JSON.stringify(this.favoriteRecipes));
  }

}
