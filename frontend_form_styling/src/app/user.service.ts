import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  login(user:any){
    return this.http.post<any>("http://localhost:3000/login",user)
  }
  signup(user:any){
    return this.http.post<any>("http://localhost:3000/signup",user)
  }
  check(data:any){
    this.http.get("http://localhost:3000/check/"+data).subscribe(res=>{
    if(res){
      var x="checked";
      localStorage.setItem('check',x);
    }
    else{
      localStorage.removeItem('check');
    }
   })

}

  LoggedIn(){
    var x=localStorage.getItem('check')
    if(x=='checked'){
      console.log("ss");
      return  true;
      
    }
    else{
      console.log("12");
      return false;
    }
    
  }
}
