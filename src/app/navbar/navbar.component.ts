import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  searchValue:string='';
  searchResults: any[] = [];
  productList:Product[]=[]
  
  constructor(private apiService:ApiService){}

  ngOnInit(): void {
    
  }

  handleSearch(){
    console.log("search value is :"+this.searchValue);
    console.log("sprin boot search value is :"+this.apiService.searchProducts(this.searchValue ))
    // alert(this.apiService.searchProducts(this.searchValue ));
    // alert(this.searchValue);

    this.apiService.searchProducts(this.searchValue).subscribe(
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
