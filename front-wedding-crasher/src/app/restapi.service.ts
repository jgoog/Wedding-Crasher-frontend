import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
 
  constructor(private http:HttpClient, private router:Router) {}


   login(email: any, password: any) {
    return this.http.post("http://localhost:9092/auth/users/login/", { email, password })
       
      }


  // public login(email:string ,password :string){
  //   const headers = new HttpHeaders({Authorization:'Basic' + btoa (email+ ":" +password) })
  //  return  this.http.post("http://localhost:9092/auth/users/login/",{headers,responseType: 'text' as 'json'});
  // }

world(){
  return this.http.get("http://localhost:9092/api/test-world/")
}

}
