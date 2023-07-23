import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  _category: string =""
  constructor() { }

  ngOnInit(): void {
  }
  
  categoryChangedHandler(category:string){
    this._category = category
  }
}
