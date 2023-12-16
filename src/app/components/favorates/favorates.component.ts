import { Component } from '@angular/core';

@Component({
  selector: 'app-favorates',
  templateUrl: './favorates.component.html',
  styleUrl: './favorates.component.css'
})
export class FavoratesComponent {
  favoriteRecipesList = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8];
}
