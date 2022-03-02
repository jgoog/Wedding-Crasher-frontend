import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

 // BASE_PATH: 'http://localhost:9092'
 USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

 email: any;
 password: any;

 constructor(private http: HttpClient) {

 }

 authenticationService(email: any, password: any) {
  return this.http.get(`http://localhost:9092/auth/users/login/`,
    { headers: { authorization: this.createBasicAuthToken(email, password) } }).pipe(map((res) => {
      this.email = email;
      this.password = password;
      this.registerSuccessfulLogin(email, password);
    }));
}

registerSuccessfulLogin(email: any, password: any) {
  sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, email)
}

createBasicAuthToken(email: String, password: String) {
  return 'Basic ' + window.btoa(email + ":" + password)
}

isUserLoggedIn() {
  let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
  if (user === null) return false
  return true
}

getLoggedInUserName() {
  let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
  if (user === null) return ''
  return user
}
}
