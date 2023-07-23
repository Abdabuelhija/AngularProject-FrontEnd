import { count } from "console";
import { UserServService } from "../user-serv.service";
import { CartProduct } from "./cartProduct";
import { User } from "./User";
import { Watch } from "./Watch";

export class Cart {
  static gen : number = 1
  id : number
  products:CartProduct[]=[]
  user!:User;
  isPaid:boolean=false
  totalPrice:number=0
  constructor() {
    this.id = Cart.gen++
  }
  add(watch:Watch){
    for(let product of this.products){
      if(product.watch == watch){
        product.count++;
        this.totalPrice+=product.watch.price
        return;
      }
    }
    this.products.push(new CartProduct(watch))
    this.totalPrice+=watch.price
  }

  remove(watch:Watch){
    let index=0
    for(let product of this.products){
      if(product.watch == watch){
        if(product.count>1){
          product.count--;
          this.totalPrice-=watch.price
        }
        else { 
            this.products.splice(index,1);
            this.totalPrice-=watch.price
        }
        return;
      }
      index++;
    }
  }
  cleanCart(){
    this.products = [];
  }
  updateUser(user : User){
    this.user = user
  }
}
