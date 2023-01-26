import { Component, OnInit } from '@angular/core';
import {AllAppointmentsService} from '../../services/all-appointments.service';
// import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.css']
})
export class AllAppointmentsComponent implements OnInit {
// [x: string]: any;

// Isactive:boolean = true;

  // cout :number = 0;
  constructor(private appointment:AllAppointmentsService) { }
  allAppointmentData:any={};
  ngOnInit(): void {
    this.appointment.getAllAppointments().subscribe((allData : any) => {
      console.log(allData);
      this.allAppointmentData = allData;
      // this.cout+=1;
    });
  }


  list:boolean=false;
  card:boolean=true;

  lists(){
    this.list =!this.list;
    this.card =!this.card;
  }
  cards(){
    this.card =!this.card;
    this.list =!this.list;
  }

}
