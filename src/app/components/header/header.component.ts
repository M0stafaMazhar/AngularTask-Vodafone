import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private searchService: SearchService){}

  searchQuery: string;
  onSearch(){
    this.searchService.searchEvent.next(this.searchQuery.toLowerCase())  
  }
}
