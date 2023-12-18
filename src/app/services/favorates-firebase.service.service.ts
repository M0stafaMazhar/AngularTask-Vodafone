import { Injectable } from '@angular/core';
import { FirestoreServiceService } from './firestore-service.service';
import { RecipeInterface } from '../interfaces/recipe-interface';
import { Observable, Subject, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoratesFirebaseServiceService {
  recipeRemoved = new Subject<number>;

  constructor(private firestore : FirestoreServiceService) {}

  getFavorites():Observable<RecipeInterface[]>{ //get all recipes from firestore
    return this.firestore.getAll()
  }

  toggleFavorite(recipe: RecipeInterface){ //add / remove recipe from favorites
    if(recipe.isFavorite){
      this.firestore.removeFromFavorites(recipe.id).subscribe(()=>{
      });
      recipe.isFavorite = false;
      this.recipeRemoved.next(recipe.id); //emint subject idecates that a recipe has been removed and emit its id
    } 
    else {
      recipe.isFavorite = true;
      this.firestore.addToFavorites(recipe).subscribe(()=>{
      })
    }
  }
}


