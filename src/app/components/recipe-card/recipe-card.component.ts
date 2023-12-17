import { Component, Input } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { RecipeInterface } from '../../interfaces/recipe-interface';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
  @Input() recipe:RecipeInterface;

  constructor(private favoritesService: FavoritesService){}

  toggleFavorite(){
    this.favoritesService.toggleFavorite(this.recipe);   
  }
}
