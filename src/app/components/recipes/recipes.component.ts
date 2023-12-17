import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { RecipeInterface } from '../../interfaces/recipe-interface';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit{
 pageNum:number = 1;

 recipesList: RecipeInterface[];
 displayList: RecipeInterface[] =[];
 loadingFlag = false;
 errorFlag = false;

 constructor(private recipesService: RecipesService , private searchService: SearchService){}

 ngOnInit() {
  this.loadingFlag = true;

  this.recipesService.getRecipesData().subscribe(recipes => {
    this.recipesList = recipes;
    this.displayList = [...this.recipesList]; 
    this.loadingFlag = false;
  } , error => {
    this.loadingFlag = false;
    this.errorFlag = true;
  });   

  this.searchService.searchEvent.subscribe(searchQuery => {
    this.displayList = this.recipesList.filter(recipe => recipe.title.toLowerCase().includes(searchQuery))
  })
 }

}
