import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
import { TemplateService } from '../template.service';

@Component({
  selector: 'app-updateform1',
  templateUrl: './updateform1.component.html',
  styleUrls: ['./updateform1.component.css']
})
export class Updateform1Component implements OnInit {

  constructor(public http:FormService,private router:Router) { }

  ngOnInit(): void {
    let userdata = localStorage.getItem("UserId");
    this.http.usercvdata(userdata).subscribe((data)=>{
      this.http.Updatedata=JSON.parse(JSON.stringify(data));
    })
  }
  updatedata1(){
    this.router.navigate(["user/updateform2"]);
 }

}
