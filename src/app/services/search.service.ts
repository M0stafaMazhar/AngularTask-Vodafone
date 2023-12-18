import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchEvent = new Subject<string>(); //emmit search query to use it in all app components
  constructor() { }
}
