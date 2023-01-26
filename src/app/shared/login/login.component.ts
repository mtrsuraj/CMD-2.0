import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../login/login/service.service';
// import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login : ServiceService) { }

  userLogin:any=[];

  // addUser=new FormGroup({
  //   username:new FormControl(''),
  //   password:new FormControl('')
  // });

  ngOnInit(): void {
    this.login.getAuthentication().subscribe((loginData) => {
       console.log(loginData);
    })
  }

}
