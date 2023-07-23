import { Component, OnInit } from '@angular/core';
import { watch } from 'fs';
import { CartUseService } from '../cart-use.service';
import { Watch } from '../models/Watch';
import { UserServService } from '../user-serv.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalprice:number=this.cartService.getcartTotalPrice();
  products=this.cartService.getcartProducts();
  constructor(private cartService: CartUseService,private userService: UserServService) { }
  ngOnInit(): void {}
  
pay(){
  if(localStorage.getItem('user')){ 
    this.cartService.Pay().subscribe((data)=>{
      this.cartService.cleanCart();
      this.products=this.cartService.getcartProducts();
      alert("the card is paid")
    });
  }
  else 
  alert("log in to pay the cart")
}
clearCart(){
  if(this.userService.LoggedIn){ 
    this.cartService.cleanCart();
    this.products=this.cartService.getcartProducts();
    }
    else 
    alert("log in to clear the cart")
}
removeFromCart(watch:Watch){
  this.cartService.removeFromCart(watch)
  this.totalprice=this.cartService.getcartTotalPrice();
}
}
