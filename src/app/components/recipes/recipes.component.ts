import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit{
 recipesList;
 loadingFlag = false;

 constructor(private recipesService: RecipesService){}

 ngOnInit() {
    this.recipesList = this.recipesService.getRecipesData();
    console.log(this.recipesService.getRecipesData());
    
 }

}
