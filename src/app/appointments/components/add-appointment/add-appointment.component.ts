import { Component, OnInit } from '@angular/core';
import { AddAppointmentDistributorService } from '../../core/add-appointment-distributor.service';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  // Isactive:any = 'Active';
    // Variable declaration and initialization

    // doClick(){
    //   return this.Isactive;
    // }

  // Dependency Injection inside constructor
  constructor(private addAppointmentDistributorService:AddAppointmentDistributorService) { }

  // Isactive = '';

    addAppointment= new FormGroup({
    appointmentId:new FormControl(''),
    patientName:new FormControl(''),
    doctorName:new FormControl(''),
    country:new FormControl(''),
    departMent:new FormControl(''),
    appointmentDate:new FormControl(''),
    appointmentTime:new FormControl(''),
    stetus:new FormControl(''),
    age:new FormControl(''),
    avatar:new FormControl(''),
});

// Isactive = 'Yet not visible';

  ngOnInit(): void {

    // Fetch / Load data


    // Validation Logic
  }

  SaveData() {
  
    console.log(this.addAppointment.value);
    this.addAppointmentDistributorService.saveAppointment(this.addAppointment.value).subscribe((result) => {
      console.log(result);
    });
  }



  // Logic for the submit
  // onSubmit() {

  // }
}
