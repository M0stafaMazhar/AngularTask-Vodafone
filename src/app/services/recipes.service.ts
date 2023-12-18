import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RecipeInterface } from '../interfaces/recipe-interface';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environments';
import { ResponseFilterServiceService } from './response-filter.service.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  apiUrl = "https://api.spoonacular.com/recipes";

  numOfRecipes: string = "36";

  apiKey:string = environment.spoonacularApiKey;

  recipesList:RecipeInterface[];
  
  constructor(private http: HttpClient ,  private filterResponseService: ResponseFilterServiceService) { 
  
  }

  getRecipesData():Observable<RecipeInterface[]>{ //send a request to get random recipes
      return this.http.get<{recipes}>(`${this.apiUrl}/random?number=${this.numOfRecipes}&includeNutretion=false&apiKey=${this.apiKey}`).pipe(
        map(
          ({recipes}) => {
            this.recipesList = recipes.map((recipe)=> this.filterResponseService.filterResponse(recipe));
            return this.recipesList;
          }
          )
        )     //return an observable containing the filtered api response(list of recipes)
  }

  getRecipeDetails(recipeId: number): Observable<RecipeInterface>{ //request recipe details
    return this.http.get<any>(`${this.apiUrl}/${recipeId}/information?includeNutrition=false&apiKey=${this.apiKey}`)
    .pipe(map((recipe)=> this.filterResponseService.filterResponse(recipe)))
  }




}
