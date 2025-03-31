import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ProductListComponent } from "../product-list/product-list.component";

@Component({
  selector: 'app-home',
  imports: [ProductListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  searchItem: string = '';
  constructor(private route:ActivatedRoute,private apiService:ApiService){}
  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   this.searchItem=params['q'] || '';
    //   console.log("homecalled with param "+this.searchItem);
    //   this.apiService.updateSearchBoxQuery(this.searchItem);
    // });
  }

  

}
