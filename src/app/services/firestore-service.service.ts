import { Injectable } from '@angular/core';
import { Observable, from , pipe , map } from "rxjs";
import { initializeApp } from 'firebase/app';
import { environment } from '../../environments/environments';
import { collection, getFirestore, doc, getDocs, deleteDoc, setDoc} from "firebase/firestore";
import { RecipeInterface } from '../interfaces/recipe-interface';

const app = initializeApp(environment.firebaseConfig); //db insialization
const db = getFirestore(app);

@Injectable({
  providedIn: 'root'
})
export class FirestoreServiceService {
  
  constructor() { }

  addToFavorites(recipe: RecipeInterface):Observable<any>{ //add recipe to favorites
    return from(setDoc(doc(db, "favorites", `${recipe.id}`) , recipe)) 
  }

  removeFromFavorites(recipeId: number): Observable<any>{ // remove from favorites
   return from(deleteDoc(doc(db , "favorites" , `${recipeId}`)))
  }

  getAll(): Observable<RecipeInterface[]>{
   return from(getDocs(collection(db , "favorites"))) //get all recipes from db and filter the response
   .pipe(map(result => {
                          let data = [];
                          result.forEach(item=>data.push(item.data()))
                          return data;
                        }))
  }
}
