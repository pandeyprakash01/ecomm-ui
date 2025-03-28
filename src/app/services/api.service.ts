import { HttpClient ,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private static BASE_URL_WELCOME = 'http://localhost:8080';
  private static BASE_URL_WELCOME = 'https://ap-south-1bh4ildnon.auth.ap-south-1.amazoncognito.com/login?client_id=5ojrek5i6r6cali33so6iu2lgt&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fd24sr4nz8uhuqy.cloudfront.net%2Fcallback';

  constructor(private http:HttpClient) { }

    public searchProducts(searchValue: string): Observable<any> {
    // return this.http.get(`${ApiService.BASE_URL}/products/search'  , { responseType: 'text' }); // Specify responseType as 'text'
    
    // return this.http.get(`${ApiService.BASE_URL_WELCOME}/products/search`, { responseType: 'text' });
    const params = new HttpParams().set('searchValue', searchValue);
    // return this.http.get(ApiService.BASE_URL, { params });
    return this.http.get<Product[]>(`${ApiService.BASE_URL_WELCOME}/products`, { params });
  }
  public welcomeMessage(searchValue: string){
    console.log("now calling welcome mesage from angular again");
    return this.http.get(`${ApiService.BASE_URL_WELCOME}/ecomm`,{responseType: 'text'});
    }

}
