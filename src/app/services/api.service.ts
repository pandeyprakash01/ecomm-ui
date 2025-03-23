import { HttpClient ,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private static BASE_URL = 'http://localhost:8080/products/search';
  private static BASE_URL_WELCOME = 'http://aabeea05b0ef742cb81f232524d6dd09-184002123.ap-south-1.elb.amazonaws.com/product';

  constructor(private http:HttpClient) { }

    public searchProducts(searchValue: string): Observable<any> {
    // return this.http.get(`${ApiService.BASE_URL}/product/search'  , { responseType: 'text' }); // Specify responseType as 'text'
    
    return this.http.get(ApiService.BASE_URL_WELCOME, { responseType: 'text' });
    // const params = new HttpParams().set('searchValue', searchValue);
    // return this.http.get(ApiService.BASE_URL, { params });
    // return this.http.get<Product[]>(ApiService.BASE_URL, { params });
  }
}
