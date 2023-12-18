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
    this.favoriteRecipesList = this.favoritesService.getFavorites();  //getting favorites from local storage and display a copy of it to keep the original list for searching features
    this.displayList = [...this.favoriteRecipesList];

    this.favoritesService.updateFavorites.subscribe((updatedList) => { //listn for recipe removing to update the UI
      this.favoriteRecipesList = updatedList;     
      this.displayList = [...this.favoriteRecipesList];                     //also display a copy and keep the originalfor searching
    })

    this.searchService.searchEvent.subscribe(searchQuery => {   //listn for search query from the navbar and use it to filter diplayed list
      this.displayList = this.favoriteRecipesList.filter(recipe => recipe.title.toLowerCase().includes(searchQuery))
    })
    
  }

}
