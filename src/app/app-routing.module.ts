import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes.component';
import { FavoratesComponent } from './components/favorates/favorates.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: 'recipes', pathMatch:"full" ,component:RecipesComponent},
  {path: '', pathMatch:"full" ,redirectTo:"recipes"},
  {path: 'favorites', component:FavoratesComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
