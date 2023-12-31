import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { FavoratesComponent } from './components/favorates/favorates.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { SanitizeHTMLPipe } from './pipes/sanitize-html.pipe';
import { LoadingSectionComponent } from './components/loading-section/loading-section.component';
import { ErrorSectionComponent } from './components/error-section/error-section.component';
import { FirebaseFavoritesComponent } from './components/firebase-favorites/firebase-favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeCardComponent,
    RecipeDetailsComponent,
    FavoratesComponent,
    HeaderComponent,
    NotFoundComponent,
    SanitizeHTMLPipe,
    LoadingSectionComponent,
    ErrorSectionComponent,
    FirebaseFavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
