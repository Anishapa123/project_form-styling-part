import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {
 constructor(public http:FormService,private router:Router) { }

  ngOnInit(): void {
  }
  resumedata3(){
    this.router.navigate(['user/form4']);
   
  }
  insert(){
    
    this.http.Resumedata.job.push({jobname:"", companyname:"", jobyear:"",jobdes:""});
  }
  del(i){
    this.http.Resumedata.job.splice(i, 1); 
  }

}
