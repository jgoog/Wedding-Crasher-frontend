import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  UserUrl : string = "http://localhost:9092/api/test-world/";  
  constructor(private http:HttpClient, private router:Router) {}


   login(email: any, password: any) {
    return this.http.post("http://localhost:9092/auth/users/login/", { email, password })
       
      }


  // public login(email:string ,password :string){
  //   const headers = new HttpHeaders({Authorization:'Basic' + btoa (email+ ":" +password) })
  //  return  this.http.post("http://localhost:9092/auth/users/login/",{headers,responseType: 'text' as 'json'});
  // }
  

world() : Observable<Container[]>{
  return this.http.get<Container[]>(this.UserUrl)
}



}
