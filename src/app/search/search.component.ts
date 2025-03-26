import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-search',
  imports: [CommonModule,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchValue:string='';
  searchResults: any[] = [];
  productList:Product[]=[]
  constructor(private apiService:ApiService){}

  handleSearch(){
    
    console.log("search value is :"+this.searchValue);
    console.log("sprin boot search value is :"+this.apiService.searchProducts(this.searchValue ))
    
    this.apiService.welcomeMessage(this.searchValue).subscribe(
      (message) => {
        console.log('Welcome Message:', message);
      },
      (error) => {
        console.error('Error fetching welcome message:', error);
      }
    );
    

    // if (this.searchValue.trim() !== '') {
    //   this.apiService.searchProducts(this.searchValue).subscribe(
    //     (response) => {
    //       console.log('JSON Response:', response); // Print the response to the console
    //       this.productList = response; //store the response
    //     },
    //     (error) => {
    //       console.error('Error fetching search results:', error);
    //     }
    //   );
    // } else {
    //   this.productList = [];
    // }

    

    // if (this.searchValue.trim() !== '') {
    //   this.apiService.searchProducts(this.searchValue).subscribe(
    //     (response) => {
    //       console.log('JSON Response:', response); // Print the response to the console
    //       this.searchResults = response; //store the response
    //     },
    //     (error) => {
    //       console.error('Error fetching search results:', error);
    //     }
    //   );
    // } else {
    //   this.searchResults = [];
    // }
    

  }
}
