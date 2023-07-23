import { Component, Input, OnInit } from '@angular/core';
import { Watch } from '../models/Watch';
import { WatchesService } from '../watches.service';
import { CartUseService } from '../cart-use.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  watches : Watch[]  = [];
  _category : string = ""
  @Input()
  set category(category: string) {
    this._category = category
    if(category=='rolex')
      this.wservice.RolexWatches().subscribe((data)=>{
        this.watches = data
      })
    else if(category=='armani')
      this.wservice.ArmaniWatches().subscribe((data)=>{
        this.watches = data
      })
    else if(category=='tessot')
      this.wservice.Tissotwatches().subscribe((data)=>{
        this.watches = data
    })  
  }
  get category(): string { return this._category }
  constructor(private wservice : WatchesService ,private cartService:CartUseService) { }

  ngOnInit(): void {
    this.wservice.popuolarwatches().subscribe((data)=>{
      this.watches=data;
    })
  }
  add(item:Watch){
    this.cartService.addWatchToCart(item)
  }
}
