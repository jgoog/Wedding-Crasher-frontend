import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }


  public login(email:string ,password :string){
    const headers = new HttpHeaders({Authorization:'Basic' + btoa (email+ ":" +password) })
   return  this.http.get("http://localhost:9092/auth/users/login/",{headers,responseType: 'text' as 'json'});
  }

}
