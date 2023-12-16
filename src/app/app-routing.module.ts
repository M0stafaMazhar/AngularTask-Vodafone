import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes.component';
import { FavoratesComponent } from './components/favorates/favorates.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

const routes: Routes = [
  {path: 'recipes' , component:RecipesComponent},
  {path: 'recipe/:id', component:RecipeDetailsComponent},
  {path: '', pathMatch:"full" ,redirectTo:"recipes"},
  {path: 'favorites', component:FavoratesComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
