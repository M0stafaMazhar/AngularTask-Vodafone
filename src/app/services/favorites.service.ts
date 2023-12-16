import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favoriteRecipes;

  updateFavorites = new EventEmitter<void>;

  constructor(){
    this.favoriteRecipes = JSON.parse(localStorage.getItem("favoriteRecipes"));
  }

  getFavorites(){
    return [...this.favoriteRecipes];
  }

  isFavorite(recipeId): boolean{
    if(this.favoriteRecipes.some(recipe => recipe.id === recipeId)){
      return true;
    } else {
      return false;
    }
  }

  addToFavorites(recipe){
    this.favoriteRecipes.push(recipe);
  }

  removeFromFavorites(recipeId){
    this.favoriteRecipes = this.favoriteRecipes.filter(recipe => +recipe.id !== +recipeId);
    return this.favoriteRecipes;
  }

  toggleFavorite(recipe){ 
    if(this.isFavorite(recipe.id)){
      this.removeFromFavorites(recipe.id);
    } else {
      this.addToFavorites(recipe);
    }

    this.saveToLocalStorage();
    
  }

  saveToLocalStorage(){
    localStorage.setItem('favoriteRecipes' , JSON.stringify(this.favoriteRecipes));
  }

}
