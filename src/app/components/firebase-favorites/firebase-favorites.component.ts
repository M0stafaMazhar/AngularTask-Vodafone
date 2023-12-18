import { Component, OnInit } from '@angular/core';
import { RecipeInterface } from '../../interfaces/recipe-interface';
import { FavoratesFirebaseServiceService } from '../../services/favorates-firebase.service.service';
import { FavoritesService } from '../../services/favorites.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-firebase-favorites',
  templateUrl: './firebase-favorites.component.html',
  styleUrl: './firebase-favorites.component.css'
})
export class FirebaseFavoritesComponent implements OnInit{
  pageNum:number = 1

  favoriteRecipesList: RecipeInterface[];
  displayList: RecipeInterface[]=[];
  errorFlag:boolean = false;
  loadingFlag:boolean = false;  //seting error ang loading lags for UI actions

  constructor(private favoritesService: FavoratesFirebaseServiceService , private searchService: SearchService){}

  ngOnInit(): void {
    this.loadingFlag = true;
    this.favoritesService.getFavorites().subscribe(favorites => {  //call for the data from firestore, store the original list and display a copy
      this.favoriteRecipesList = favorites;
      this.displayList = [...this.favoriteRecipesList]
      this.loadingFlag = false;
    } , (errpr)=>{
      this.errorFlag = true;
      this.loadingFlag = false;
    }) 
    ;

    this.favoritesService.recipeRemoved.subscribe((recipeId) => { //listen for reicipe removing fo UI updating
      this.favoriteRecipesList = this.favoriteRecipesList.filter(recipe => recipe.id !== recipeId);     
      this.displayList = [...this.favoriteRecipesList];
    })

    this.searchService.searchEvent.subscribe(searchQuery => { //listen for search query and filter displayed recipes
      this.displayList = this.favoriteRecipesList.filter(recipe => recipe.title.toLowerCase().includes(searchQuery))
    })
    
  }
}
