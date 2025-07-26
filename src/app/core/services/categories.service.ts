import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private readonly _HttpClient = inject(HttpClient);

  getAllcategories():Observable<any>{
    return this._HttpClient.get(`https://fakestoreapi.com/products/categories`)
  }

  getSpecificCategory(cat:string):Observable<any>{
        return this._HttpClient.get(`https://fakestoreapi.com/products/category/${cat}`)

  }
}
