import { Component, OnInit } from '@angular/core';
import {AddPetsService} from '../../services/add-pets.service';
import {} from '@angular/forms'

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  constructor(private patient : AddPetsService) { }

  patientData:any=[];

  ngOnInit(): void {
    this.patient.getAllPatientData().subscribe((allData)=>{
      console.log(allData);
      this.patientData=allData;
    })
  }




  list:boolean=true;
  card:boolean=false;

  lists(){
    this.list =!this.list;
    this.card =!this.card;
  }
  cards(){
    this.card =!this.card;
    this.list =!this.list;
  }
}
