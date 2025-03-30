import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Product } from '../model/product';
import { RouterLink ,Router,RouterModule,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  isLoggedIn: boolean = false;
  cognitoLoginUrl: string;
  searchValue:string='';
  searchResults: any[] = [];
  productList:Product[]=[]

  
  
  constructor(private router:Router,private apiService:ApiService){
    this.cognitoLoginUrl = "https://ap-south-178xxos6iu.auth.ap-south-1.amazoncognito.com/login?client_id=sfkpoka2u322odtk63nr7k9nf&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fdy974bi55ou2y.cloudfront.net%2Fcallback";
  }

   ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url === '/') {
        this.checkLoginStatus();
      }
    });
    
  }

  checkLoginStatus(): void {
    this.isLoggedIn = localStorage.getItem('token') !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
    console.log('Token removed from localStorage');
    this.isLoggedIn = false; // Update the login status
    this.router.navigate(['/login']);
    console.log('Navigated to /login');
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

  handleSearch(){
    
    console.log("search value is :"+this.searchValue);
    // console.log("sprin boot search value is :"+this.apiService.searchProducts(this.searchValue ))
    
    // this.apiService.welcomeMessage(this.searchValue).subscribe(
    //   (message) => {
    //     console.log('Welcome Message:', message);
    //   },
    //   (error) => {
    //     console.error('Error fetching welcome message:', error);
    //   }
    // );
    

    if (this.searchValue.trim() !== '') {
      this.apiService.searchProducts(this.searchValue).subscribe(
        (response) => {
          console.log('JSON Response:', response); // Print the response to the console
          this.productList = response; //store the response
        },
        (error) => {
          console.error('Error fetching search results:', error);
        }
      );
    } else {
      this.productList = [];
    }

    

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
