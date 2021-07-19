import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.css']
})
export class Form5Component implements OnInit {
 
  
  selectedimage:any =null;
  constructor(public http:FormService,private router:Router,private form:UserService) { }

  ngOnInit(): void {
    
  }
  selectImage(event:any){
    this.selectedimage =event.target.files[0];
   }
 upload(){
   const fd= new FormData;
   fd.append('image',this.selectedimage,this.selectedimage.name);
   this.http.image(fd);
   console.log("Photo Uploaded")
   
   }

  resumedata5(){
    this.router.navigate(['user']);
  }
  

}
