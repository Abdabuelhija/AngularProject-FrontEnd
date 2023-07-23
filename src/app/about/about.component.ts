import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  bgColor:string="white";
  textColor = "black";
  name1:string="Mark zokerberg";
name2:string="bill gates";
ID1:string="123456789";
ID2:string="1234567899";
Mail1:string="Mark@hotmail.com";
Mail2:string="Bill@hotmail.com";


   onSave(){
    if (this.bgColor == "white"){
    this.bgColor = "black";
    this.textColor = "white";
    }
    else{
      this.bgColor = "white";
      this.textColor = "black";
    }
   }
  constructor() { }

  ngOnInit(): void {
  }

}
