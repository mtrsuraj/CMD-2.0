import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl} from '@angular/forms';
import { ServiceService } from '../login/login/service.service';
// import(ServiceService) from '../login/login/service.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private user : ServiceService) { }
  addUser = new FormGroup({
    username:new FormControl(''),
    password:new FormControl(''),
    email:new FormControl('')
  })

  ngOnInit(): void {
  }

  SaveAuthentication(){
    console.log(this.addUser.value);
    this.user.saveUserData(this.addUser.value).subscribe((result) => {
      console.log(result);
    });
  }
  // saveData(){
  //   console.log(this.addUser.value);
  // }

}
