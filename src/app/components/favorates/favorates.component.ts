import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { RecipeInterface } from '../../interfaces/recipe-interface';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-favorates',
  templateUrl: './favorates.component.html',
  styleUrl: './favorates.component.css'
})
export class FavoratesComponent implements OnInit{
  pageNum:number = 1

  favoriteRecipesList: RecipeInterface[];
  displayList: RecipeInterface[];

  constructor(private favoritesService: FavoritesService , private searchService: SearchService){
  }

  ngOnInit(): void {
    this.favoriteRecipesList = this.favoritesService.getFavorites(); 
    this.displayList = [...this.favoriteRecipesList];

    this.favoritesService.updateFavorites.subscribe((updatedList) => {
      this.favoriteRecipesList = updatedList;     
      this.displayList = [...this.favoriteRecipesList];
    })

    this.searchService.searchEvent.subscribe(searchQuery => {
      this.displayList = this.favoriteRecipesList.filter(recipe => recipe.title.toLowerCase().includes(searchQuery))
    })
    
  }

}
