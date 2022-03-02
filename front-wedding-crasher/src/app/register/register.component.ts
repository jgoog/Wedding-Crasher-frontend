import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email : any;
  password: any;
  errorMessage = 'Invalid Credentials';
  successMessage: string = '';
  invalidLogin = false;
  loginSuccess = false;

  constructor(private service: RestapiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  


  doLogin(){
    
    let resp = this.service.login(this.email,this.password);
    resp.subscribe(data=>{
      console.log(data)
      this.router.navigate(["/qr"])
    })
  }

}
