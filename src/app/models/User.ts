export class User{
    static gen : number = 1
    id : number
    name: String;
    birthdate: String;
    userimg:String;
    gender:String;
    mail:String;
    password:String;
    constructor(name: String,birthdate:String,userimg:String,gender:String,mail:String,password:String) {
        this.id = User.gen++
        this.name = name;
        this.birthdate = birthdate;
        this.userimg=userimg;
        this.gender = gender;
        this.mail = mail;
        this.password = password;
    }
    }