import { Component, OnInit } from '@angular/core';
import { UserServService } from '../user-serv.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  LoggedIn:boolean=false;
  constructor(private UserService:UserServService,private router:Router) { }
  logout(){
    this.UserService.logout();
    this.LoggedIn = false;
  }
  ngOnInit(): void {
    this.router.events.subscribe((val:any)=>{
      if(val.url && sessionStorage.getItem('user'))
        this.LoggedIn = true;
    })
  }

}
