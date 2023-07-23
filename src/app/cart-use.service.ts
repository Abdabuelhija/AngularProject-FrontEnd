import { Injectable } from '@angular/core';
import { Cart } from './models/Cart';
import { Watch } from './models/Watch';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class CartUseService {
  cart : Cart = new Cart()
  baseURL: string = 'http://localhost:8000/';
  headers = { 'content-type': 'application/json' };
  constructor(private http: HttpClient) {}
  
  addWatchToCart(product:Watch){
    this.cart.add(product)
  }
  removeFromCart(product:Watch){
    this.cart.remove(product)
  }
  cleanCart(){
    this.cart.cleanCart()
  } 
  Pay():Observable<any>{
      this.cart.isPaid = true
      let body = JSON.stringify(this.cart);
      return this.http.post(this.baseURL + "carts", body, {headers: this.headers});
  }
  updateUser(user : User){ 
    this.cart.updateUser(user)
  } 
  getcartTotalPrice(){
    return this.cart.totalPrice
  }
  getcartProducts(){
    return this.cart.products
  }

}

