import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  
  constructor(public http:FormService,private router:Router) { }

  ngOnInit(): void {
  }
 
 resumedata1(){
     this.router.navigate(["user/form2"]);
  }

}
