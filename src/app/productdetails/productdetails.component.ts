import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productdetails',
  imports: [CommonModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit{

  product:any=null;
  productId:string|null=null;
  constructor(private apiService:ApiService,private route:ActivatedRoute){
  }
  ngOnInit(): void {
    console.log("init method called of prodult list")
    this.productId = this.route.snapshot.paramMap.get('productId');
    this.fetchProductById(this.productId);
  }

  

  fetchProductById(productId:any){

    this.apiService.searchProductById(productId).subscribe(
      (response)=>{
        this.product=response;
      },
      (error)=>{
        console.error('Error fetching product details:', error);
      }
    );
    
  }
}
