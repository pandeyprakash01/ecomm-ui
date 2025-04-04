import { HttpClient ,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private static BASE_URL_WELCOME = 'http://localhost:8080';
  private static BASE_URL_WELCOME  = 'https://5i3qj3qwgl.execute-api.ap-south-1.amazonaws.com/prod';

  constructor(private http:HttpClient) { }

  searchKeyWord=""
  updateSearchBoxQuery(searchValue: string){
    console.log("search value getting updated to "+searchValue);
    this.searchKeyWord=searchValue;
  }

  searchProducts(searchValue: string){
    const params = new HttpParams().set('searchValue', searchValue);
    return this.http.get<Product[]>(`${ApiService.BASE_URL_WELCOME}/products`, { params });
  }

  searchProductById(productId:string){
    return this.http.get<Product>(`${ApiService.BASE_URL_WELCOME}/productById/${productId}`)
  }

  //   public searchProducts(searchValue: string): Observable<any> {
  //   // return this.http.get(`${ApiService.BASE_URL}/products/search'  , { responseType: 'text' }); // Specify responseType as 'text'
    
  //   // return this.http.get(`${ApiService.BASE_URL_WELCOME}/products/search`, { responseType: 'text' });
  //   const params = new HttpParams().set('searchValue', searchValue);
  //   // return this.http.get(ApiService.BASE_URL, { params });
  //   // return this.http.get<Product[]>(`${ApiService.BASE_URL_WELCOME}/products`, { params });
  //   return this.http.get<Product[]>(`${ApiService.BASE_URL_WELCOME}/products/search`, { params });
  // }
  public welcomeMessage(searchValue: string){
    console.log("now calling welcome mesage from angular again");
    return this.http.get(`${ApiService.BASE_URL_WELCOME}/ecomm`,{responseType: 'text'});
    }

}
