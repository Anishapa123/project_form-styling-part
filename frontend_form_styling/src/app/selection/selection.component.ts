import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
import { TemplateService } from '../template.service';
import { UserService } from '../user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  ID2=localStorage.getItem("UserId");
  draft:any="";
  draftID:any="";

  constructor(public http:FormService, public router:Router,public check:UserService,public temp:TemplateService) { }

  ngOnInit(): void {
    
    this.check.check(this.ID2);
          this.check.LoggedIn();
        let userdata = localStorage.getItem("UserId");
        this.http.usercvdata(userdata).subscribe((data)=>{
          this.http.Updatedata=JSON.parse(JSON.stringify(data));
          
        })
        this.http.loaddraftdata(userdata).subscribe((data)=>{
          this.draft=JSON.parse(JSON.stringify(data));
        
        })
  }
  temp1(){
    this.router.navigate([`user/template1/${this.http.Updatedata._id}`]);
  }
  temp2(){
    this.router.navigate([`user/template2/${this.http.Updatedata._id}`]);
  }
  temp3(){
    this.router.navigate([`user/template3/${this.http.Updatedata._id}`]);
  }
  generatelink(){
    alert('Successfully send link in email.....')
    this.temp.getlink(this.http.Updatedata._id).subscribe((data)=>{
     
    })
    
  }
  backup(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
        this.http.changeuserdata(this.draftID).subscribe((data)=>{
          this.check.check(this.ID2);
          this.check.LoggedIn();
        
        })
        
      
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })

    
  }

}
