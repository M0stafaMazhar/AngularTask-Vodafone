import { EventEmitter, Injectable } from '@angular/core';
import { RecipeInterface } from '../interfaces/recipe-interface';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favoriteRecipes: RecipeInterface[];

  updateFavorites = new EventEmitter<any>;

  constructor(){
    this.favoriteRecipes = JSON.parse(localStorage.getItem("favoriteRecipes"));
  }

  getFavorites():RecipeInterface[]{
    return [...this.favoriteRecipes];
  }

  isFavorite(recipeId:number): boolean{
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
    this.updateFavorites.emit([...this.favoriteRecipes])
  }

  toggleFavorite(recipe: RecipeInterface){ 
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
