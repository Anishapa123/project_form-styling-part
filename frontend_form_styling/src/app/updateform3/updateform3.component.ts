import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';

@Component({
  selector: 'app-updateform3',
  templateUrl: './updateform3.component.html',
  styleUrls: ['./updateform3.component.css']
})
export class Updateform3Component implements OnInit {

  constructor(public http:FormService,private router:Router) { }

  ngOnInit(): void {
  }
  updatedata3(){
    this.router.navigate(['user/updateform4']);
   
  }
  insert(){
    this.http.Updatedata.job.push({jobname:"", companyname:"", jobyear:"",jobdes:""});
  }

}
