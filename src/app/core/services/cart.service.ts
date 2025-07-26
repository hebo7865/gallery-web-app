import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly _HttpClient = inject(HttpClient)

  getCart():Observable<any>{
    return this._HttpClient.get('https://fakestoreapi.com/carts?userId=1')
  }

}
