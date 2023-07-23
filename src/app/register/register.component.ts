import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServService } from '../user-serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm !: FormGroup;
  constructor(private service:UserServService,private router:Router ) { }
  ngOnInit(): void {
    this.createRegisterForm()
  }
    createRegisterForm(): void{
  this.registerForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    pass : new FormControl('',[Validators.required]),
    BirthDate:new FormControl(),
    gender :new FormControl()
    })
  }
  onSubmit(){
    let mail=this.registerForm?.value.email;
    if(this.service.ifExist(mail)==false){
      let name:string=this.registerForm?.value.name;
      let pass:string=this.registerForm?.value.pass;
      let BirthDate:string=this.registerForm?.value.BirthDate;
      let userimg:string="https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg";
      let gender:string=this.registerForm?.value.gender;
      this.service.signup(name,BirthDate,userimg,gender,mail,pass).subscribe((data)=>{
      })
      alert("new user inserted");
        this.router.navigate(['profile/login']);
    }
    else{
      alert("user exist")
    }
  }
}

