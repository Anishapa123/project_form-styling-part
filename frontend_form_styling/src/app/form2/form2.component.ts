import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
constructor(public http:FormService,private router:Router) { }

  ngOnInit(): void {
  }
  resumedata2(){
    this.router.navigate(['user/form3']);
  }
  insert(){
   this.http.Resumedata.education.push({degree:"",specialisation:"",year: "",name:""});
  }
  del(i){
    this.http.Resumedata.education.splice(i, 1); 
  }
}
