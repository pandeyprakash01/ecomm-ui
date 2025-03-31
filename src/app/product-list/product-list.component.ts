import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  productList: any[] = [];
  // searchValue:string|null=null;
  constructor(private router:Router,private route: ActivatedRoute,private apiService:ApiService){}
  
  ngOnInit(){
    // this.fetchProduct();
    this.route.queryParams.subscribe(params => {
      const searchValue=params['q'] || '';
      console.log("homecalled with param "+searchValue);
      // this.apiService.updateSearchBoxQuery(searchItem);
      this.fetchProduct(searchValue);
    });
  }

  fetchProduct(searchValue:string){
    
      this.apiService.searchProducts(searchValue).subscribe(
        (response) => {
          console.log('JSON Response:', response); // Print the response to the console
          this.productList = response; //store the response
        },
        (error) => {
          console.error('Error fetching search results:', error);
        }
      );
    
  }

  goToProductDetailsPage(productId: string): void{
    console.log("inside goToProductDetailsPage")
    this.router.navigate(['/productdetails', productId]);
  }

}
