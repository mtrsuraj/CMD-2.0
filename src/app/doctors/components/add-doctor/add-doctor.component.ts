import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {AddVetService} from '../../services/add-vet.service';
@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  constructor(private doctor : AddVetService) { }

  addDoctor = new FormGroup({
    name:new FormControl(''),
    docprof:new FormControl(''),
    address:new FormControl(''),
    avatar:new FormControl('')
});

SaveDoctor(){
  console.log(this.addDoctor.value);
  this.doctor.SaveDoctorDatas(this.addDoctor.value).subscribe((data) =>{
    console.log(data);
  });
}

  ngOnInit(): void {
  }

}
