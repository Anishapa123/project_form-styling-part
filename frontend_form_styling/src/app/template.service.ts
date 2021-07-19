import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  ID2=localStorage.getItem("UserId");
  Resumedata={
    ID:"",
    name:"",
    email:"",
    phonenumber:"",
    dob:"",
    gender:"",
    address:"",
    photo:"",
    education:[{degree:"",specialisation:"",year: "",name:""}],
    job:"",
    jobname:"",
    jobyear:"",
    jobdes:"",
    skills:[{skill:""}],
    achievements:"",
    languages:[{language:""}]
    }

  constructor(private http:HttpClient) { }

  data(id:any){
    return this.http.get("http://localhost:3000/data/"+id);
  }

  getlink(id:any){
    return this.http.get(`http://localhost:3000/getlink/${this.ID2}/`+id);
  }
}
