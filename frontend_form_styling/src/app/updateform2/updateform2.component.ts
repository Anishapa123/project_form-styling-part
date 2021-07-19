import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';

@Component({
  selector: 'app-updateform2',
  templateUrl: './updateform2.component.html',
  styleUrls: ['./updateform2.component.css']
})
export class Updateform2Component implements OnInit {

  constructor(public http:FormService,private router:Router) { }

  ngOnInit(): void {
  }
  updatedata2(){
    this.router.navigate(['user/updateform3']);
  }
  insert(){
    this.http.Updatedata.education.push({degree:"",specialisation:"",year: "",name:""});
  }

}
