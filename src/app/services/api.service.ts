import { HttpClient ,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private static BASE_URL = 'http://localhost:8080/products/search';

  constructor(private http:HttpClient) { }


  

    public searchProducts(searchValue: string): Observable<any> {
    // return this.http.get(`${ApiService.BASE_URL}/product/search'  , { responseType: 'text' }); // Specify responseType as 'text'
    
    // return this.http.get(ApiService.BASE_URL, { responseType: 'text' });
    const params = new HttpParams().set('searchValue', searchValue);
    return this.http.get(ApiService.BASE_URL, { params });
    // return this.http.get<Product[]>(ApiService.BASE_URL, { params });
  }
}
