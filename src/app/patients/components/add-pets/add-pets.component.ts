import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {AddPetsService} from '../../services/add-pets.service'

@Component({
  selector: 'app-add-pets',
  templateUrl: './add-pets.component.html',
  styleUrls: ['./add-pets.component.css']
})
export class AddPetsComponent implements OnInit {

  constructor(private patient : AddPetsService) { }

  addPatientData=new FormGroup({
    fName:new FormControl(''),
    lName:new FormControl(''),
    age:new FormControl(''),
    phone:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl(''),
    avatar:new FormControl(''),
  });

  ngOnInit(): void {
  }

  SavePatientData(){
    // console.log(this.addPatientData.value)
    this.patient.SavePatientDetails(this.addPatientData.value).subscribe((result) => {
      console.log(result);
    });
  }

}
