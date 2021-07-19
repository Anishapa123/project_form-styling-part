import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';
import { Form5Component } from './form5/form5.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SelectionComponent } from './selection/selection.component';
import { SignupComponent } from './signup/signup.component';
import { Template1Component } from './template1/template1.component';
import { Template2Component } from './template2/template2.component';
import { Template3Component } from './template3/template3.component';
import { Updateform1Component } from './updateform1/updateform1.component';
import { Updateform2Component } from './updateform2/updateform2.component';
import { Updateform3Component } from './updateform3/updateform3.component';
import { Updateform4Component } from './updateform4/updateform4.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'contactus',component:ContactusComponent},
{path:'blogs',component:BlogComponent},
{path:'user',component:UserComponent,
children:[{path:'',component:SelectionComponent},
  {path:'form1',component:Form1Component},
{path:'form2',component:Form2Component},
{path:'form3',component:Form3Component},
{path:'form4',component:Form4Component},
{path:'form5',component:Form5Component},
{path:'template1/:userID',component:Template1Component},
{path:'updateform1',component:Updateform1Component},
{path:'updateform2',component:Updateform2Component},
{path:'updateform3',component:Updateform3Component},
{path:'updateform4',component:Updateform4Component},
{path:'template2/:userID',component:Template2Component},
{path:'template3/:userID',component:Template3Component}]},
{path:'admin',component:AdminComponent},
{path:'template1/:userID',component:Template1Component},
{path:'template2/:userID',component:Template2Component},
{path:'template3/:userID',component:Template3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
