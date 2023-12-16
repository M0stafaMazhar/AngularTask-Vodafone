import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-favorates',
  templateUrl: './favorates.component.html',
  styleUrl: './favorates.component.css'
})
export class FavoratesComponent implements OnInit{
  favoriteRecipesList;

  constructor(private favoritesService: FavoritesService){
  }

  ngOnInit(): void {
    this.favoriteRecipesList = this.favoritesService.getFavorites(); 
    
    this.favoritesService.updateFavorites.subscribe(() => {
      this.favoriteRecipesList = this.favoritesService.getFavorites();     
    })
  }

}
