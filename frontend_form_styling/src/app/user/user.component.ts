import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
import { Template1Component } from '../template1/template1.component';
import { UserService } from '../user.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  ID2=localStorage.getItem("UserId");

  constructor(private router:Router,public form:FormService,public check:UserService) { }

  ngOnInit(): void {
  }
  create(){
     this.router.navigate(['user/form1']);
  }
  update(){
    this.router.navigate(['user/updateform1']);
  }
  updatephoto(){
    this.router.navigate(['user/form5']);
  }
  delete(){
       
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it Permanently!',
      cancelButtonText: 'No, keep it in Draft'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted Permanently!',
          'Your Resumedata deleted.',
          'error'
          )
          this.form.deletedata(this.ID2)
          .subscribe((res:any) => {
            this.check.check(this.ID2);
      this.check.LoggedIn();
     this.router.navigate(['user']);
          })
          
      
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Drafted',
          'Your Resumedata drafted :)',
          'success'
        )
        this.form.draft(this.ID2)
      .subscribe((res:any) => {
        this.check.check(this.ID2);
      this.check.LoggedIn();
      this.router.navigate(['user']);
         })
         
      }
      })
      
}
  home(){
    this.router.navigate(['user']);
  }
  

}
