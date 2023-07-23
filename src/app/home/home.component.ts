import { Component, OnInit } from '@angular/core';
import { Watch } from '../models/Watch';
import { WatchesService } from '../watches.service';
import { CartUseService } from '../cart-use.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Watches : Watch[]  = []

  constructor(private wservice : WatchesService ,private cartService:CartUseService){}

  ngOnInit(): void {
    this.wservice.popuolarwatches().subscribe((data)=>{
      this.Watches = data;
    });
  }
  add(item:Watch){
    this.cartService.addWatchToCart(item)
  }
}

