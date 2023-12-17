import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { RecipeInterface } from '../../interfaces/recipe-interface';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit{
 recipesList: RecipeInterface[];
 loadingFlag = false;

 constructor(private recipesService: RecipesService){}

 ngOnInit() {
    this.loadingFlag = true;
    this.recipesService.getRecipesData().subscribe(
        (recipes)=> {this.recipesList = recipes} ,
        (error)=>{},
        ()=>{
          this.loadingFlag = false;
        }
    )
    
 }

}
