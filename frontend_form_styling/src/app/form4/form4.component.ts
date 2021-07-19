import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
import { Form5Component } from '../form5/form5.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.css']
})
export class Form4Component implements OnInit {
  ID2=localStorage.getItem("UserId");
  Resume={
    ID:localStorage.getItem("UserId"),
    name:"",
    email:"",
    phonenumber:"",
    dob:"",
    gender:"",
    address:"",
    about:"",
    photo:"",
    education:[{degree:"",specialisation:"",year: "",name:""}],
    job:[{jobname:"", companyname:"", jobyear:"",jobdes:""}],
    skills:[{skill:""}],
    achievements:"",
    languages:[{language:""}]
    }
  constructor(public http:FormService,private router:Router,private form:UserService) { }

  ngOnInit(): void {
  }
  
  resumedata4(){
    this.http.form1(this.http.Resumedata).subscribe((res)=>{
      this.http.Resumedata= this.Resume;
      console.log(this.http.Resumedata);
    })
    alert("Sucessfully Created");
    this.form.check(this.ID2);
    this.form.LoggedIn();
    this.router.navigate(['user/form5']);
  
   
  }
  insert(){
    
    this.http.Resumedata.skills.push({skill:""});
  }

  insert2(){
    this.http.Resumedata.languages.push({language:""});
  }
  del(i){
    this.http.Resumedata.skills.splice(i, 1); 
  }
  del2(i){
    this.http.Resumedata.languages.splice(i, 1); 
  }


}
