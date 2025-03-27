import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Product } from '../model/product';
import { RouterLink ,Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  cognitoLoginUrl: string;
  searchValue:string='';
  searchResults: any[] = [];
  productList:Product[]=[]

  
  
  constructor(private route: ActivatedRoute,private apiService:ApiService){
    this.cognitoLoginUrl = "https://ap-south-1cr5wlo8bq.auth.ap-south-1.amazoncognito.com/login?client_id=5i18g39d14ijt158fhb6rjr18k&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fd9v9m7i6zijw1.cloudfront.net";
  }

   ngOnInit() {
    
  }

  // handleLogin(){
  //   // alert("button clicked");
  //   const loginUrl="https://ap-south-1dayobtsyg.auth.ap-south-1.amazoncognito.com/login?client_id=48cks2tbnq57a25e7buiirkge4&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fcallback&response_type=code&scope=email+openid+phone";
  //   window.location.href = loginUrl;
  // }
  // handleSearch(){
  //   console.log("search value is :"+this.searchValue);
  //   console.log("sprin boot search value is :"+this.apiService.searchProducts(this.searchValue ))
    
  //   this.apiService.searchProducts(this.searchValue).subscribe(
  //     (message) => {
  //       console.log('Welcome Message:', message);
  //     },
  //     (error) => {
  //       console.error('Error fetching welcome message:', error);
  //     }
  //   );
    

  //   // if (this.searchValue.trim() !== '') {
  //   //   this.apiService.searchProducts(this.searchValue).subscribe(
  //   //     (response) => {
  //   //       console.log('JSON Response:', response); // Print the response to the console
  //   //       this.productList = response; //store the response
  //   //     },
  //   //     (error) => {
  //   //       console.error('Error fetching search results:', error);
  //   //     }
  //   //   );
  //   // } else {
  //   //   this.productList = [];
  //   // }

    

  //   // if (this.searchValue.trim() !== '') {
  //   //   this.apiService.searchProducts(this.searchValue).subscribe(
  //   //     (response) => {
  //   //       console.log('JSON Response:', response); // Print the response to the console
  //   //       this.searchResults = response; //store the response
  //   //     },
  //   //     (error) => {
  //   //       console.error('Error fetching search results:', error);
  //   //     }
  //   //   );
  //   // } else {
  //   //   this.searchResults = [];
  //   // }
    

  // }
}
