import { Component, OnInit } from '@angular/core';
import { UserServService } from '../user-serv.service';
import { FormControl, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/User';
import { CartUseService } from '../cart-use.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  baseURL: string = 'http://localhost:8000/';
  headers = { 'content-type': 'application/json' };
  loginForm!:FormGroup;
  users : User[] = []
  constructor(private service :UserServService,private router:Router,private actRoute: ActivatedRoute,private cartserv:CartUseService){ }
  ngOnInit(): void {
    this.createloginForm()
    this.service.getUsers().subscribe((data)=>{
      this.users = data;
    });
  }
  createloginForm(){
    this.loginForm=new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(4)]),
    })
  }

  onSubmit(){
    let mail =this.loginForm?.value.email
    let pass=this.loginForm?.value.password
    for( let user of this.users){
      if(user.mail == mail ){
        if(user.password == pass){
          let name=user.name;
          let BirthDate=user.birthdate;
          let userimg=user.userimg;
          let gender=user.gender;
          sessionStorage.setItem('user',mail);	
          this.cartserv.updateUser(user);
          this.router.navigate(['profile/userdetails',name,mail,gender,BirthDate,userimg]);
          return
      }
      else {
        alert("Wrong pass" );
        return
      }
    }
    }
    alert("user not found" );
  }
}