import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() changeCategory : EventEmitter<string> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  getRolex(){
    this.changeCategory.emit('rolex')
  }
  getArmani(){
    this.changeCategory.emit('armani')
  }
  getTissot(){
    this.changeCategory.emit('tessot')
  }

}
