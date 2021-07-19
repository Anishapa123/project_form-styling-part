import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user={
    username:"",
    email:"",
    password:""
  }

  constructor(private http:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  signupUser(){
    
    this.http.signup(this.user)
    .subscribe(function(){
      console.log("account added");
    })
    this.router.navigate(['login']);
 }

}
