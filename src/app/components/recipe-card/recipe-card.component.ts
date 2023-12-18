import { Component, Input } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { RecipeInterface } from '../../interfaces/recipe-interface';
import { FavoratesFirebaseServiceService } from '../../services/favorates-firebase.service.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
  @Input() recipe:RecipeInterface;

  constructor(private favoritesService: FavoritesService , private favFirebase: FavoratesFirebaseServiceService){}

  toggleFavorite(){
    
    this.favFirebase.toggleFavorite({...this.recipe}); //toggle the favorites lists stored in local storage and in firestoe, NOTE: we pass a coppy of the recipe to the firestore service since we passed the referance to the localstorage(we need to change recipe data for styling), and ppassing the referance to both will cause the app to crash
    this.favoritesService.toggleFavorite(this.recipe);  //NOTE: we only need one way for storing and we used the two only for the Task, no matter what way you choose to store the data just make sure to pass the referance value of the recipe and comment or remove the other method

  }
}
