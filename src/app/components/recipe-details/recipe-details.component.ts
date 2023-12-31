import { Component } from '@angular/core';
import { RecipeInterface } from '../../interfaces/recipe-interface';
import { ActivatedRoute, Params} from '@angular/router';
import { RecipesService } from '../../services/recipes.service';
import { FavoritesService } from '../../services/favorites.service';
import { FavoratesFirebaseServiceService } from '../../services/favorates-firebase.service.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {
  recipe:RecipeInterface;
  loadingFlag:boolean = false;
  errorFlag:boolean = false;

  constructor(private route: ActivatedRoute , private recipesService: RecipesService , 
    private favoritesService: FavoritesService , private firestoreFav: FavoratesFirebaseServiceService){
  }

  ngOnInit() {
    this.loadingFlag = true;
    this.route.params.subscribe((params: Params)=>{
      this.recipesService.getRecipeDetails(+params['id']).subscribe(recipe => {
        this.recipe = recipe
        this.loadingFlag = false;
      }, () => {
        this.loadingFlag = false
        this.errorFlag = true;
      }
      )
    })
  }

  toggleFavorite(){
    this.firestoreFav.toggleFavorite({...this.recipe}) //usisg the same technique mentioned in the recipe-card component
    this.favoritesService.toggleFavorite(this.recipe)
  }

}
