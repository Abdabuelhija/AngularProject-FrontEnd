import { Injectable } from '@angular/core';
import { User } from './models/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServService {
  users : User[] = []
  baseURL: string = 'http://localhost:8000/';
  headers = { 'content-type': 'application/json' };
  LoggedIn:boolean=false;
  constructor(private http: HttpClient){ }

  getUsers() : Observable<any>{
    return this.http.get(this.baseURL + 'users/');
  }
  
  refreshUsers(){
    this.getUsers().subscribe((data)=>{
      this.users = data
    });
  }
  ifExist(mail:String){
    this.refreshUsers()
    for(let item of this.users){
      if (mail==item.mail)
        return true;
      }
    return false;
  }

  signup(name: String,birthdate: String,userimg:String,gender:String,mail:String,password:String): Observable<any>{
      let newUser:User=new User(name,birthdate,userimg,gender,mail,password);
      let body = JSON.stringify(newUser);
      return this.http.post(this.baseURL+"users", body, {headers: this.headers});
  }

  UserInformation(mail:String){
    this.refreshUsers()
    for(let user of this.users){
      if (mail==user.mail)
        return user;
    }
    return undefined;
  }

  logout(){
    sessionStorage.removeItem('user');
    this.LoggedIn=false
  }
}

