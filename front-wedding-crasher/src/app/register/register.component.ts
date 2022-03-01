import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email : any;
  password: any;

  constructor(private service: RestapiService) { }

  ngOnInit(): void {
  }


  doLogin(){
    let resp = this.service.login(this.email,this.password);
    resp.subscribe(data=>{
      console.log(data)
    })
  }

}
