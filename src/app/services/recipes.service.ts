import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipesList;
  constructor(private http: HttpClient) { 
  
  }

  getRecipesData(){
   return this.http.get<{recipes: []}>("https://api.spoonacular.com/recipes/random?number=12&apiKey=3926487ae16b4b0bba017bef833eaea4&includeNutrition=false")
  }
}
