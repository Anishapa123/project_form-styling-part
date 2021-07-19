import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    username:"",
    password:"",
  }
  constructor(private http:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    this.http.login(this.user)
    .subscribe(res=>{
      if(res.boolean){
      localStorage.setItem('UserId',res.ID);
      localStorage.setItem('token', res.token);
      this.router.navigate([`${res.nav}`]);
    }
    else{
      alert(res.data);
    }
  }); 
  
  }
}
