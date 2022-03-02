import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QRCodeComponent implements OnInit {

users :any =[]

  constructor(private http:HttpClient, private service: RestapiService) { }

  ngOnInit(): void {
    this.service.world()
    .subscribe(response => {
      this.users = response;
      console.log(this.users)
    })
   
  }

  getUsers(){
    this.service.world()
    .subscribe(response => {
      this.users = response;
      console.log(this.users)
    })
  }

  // test(){
  //   let resp = this.service.world();
  //   resp.subscribe(data=>{
  //     console.log(data)
  //     this.users = resp;
  //   })
  // }
}
