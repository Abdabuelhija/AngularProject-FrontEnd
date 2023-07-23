import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { LoginComponent } from '../login/login.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  name:String=" "
  mail:String=" "
  gender:String=" "
  birth:String=" "
  US_img:String=" "

  constructor(private actRoute: ActivatedRoute){  

  }

  ngOnInit(): void {
    this.mail = this.actRoute.snapshot.params["mail"];
    this.name = this.actRoute.snapshot.params["name"];
    this.gender = this.actRoute.snapshot.params["gender"];
    this.birth = this.actRoute.snapshot.params["birthDate"];
    this.US_img= this.actRoute.snapshot.params["userimg"];
  }


}

