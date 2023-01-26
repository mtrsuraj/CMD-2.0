import { Component, OnInit } from '@angular/core';
import {AddVetService} from '../../services/add-vet.service'

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  // this.listData=[]

  constructor(private doctor : AddVetService) { }

  doctorData:any=[];

  ngOnInit(): void {
    this.doctor.getAllDoctor().subscribe((allData)=>{
      console.log(allData);
      this.doctorData=allData;

    })
  }

}
