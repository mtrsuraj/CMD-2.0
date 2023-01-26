import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ServiceService} from '../../department/service.service'
 
@Component({
  selector: 'app-add-departments',
  templateUrl: './add-departments.component.html',
  styleUrls: ['./add-departments.component.css']
})
export class AddDepartmentsComponent implements OnInit {

  constructor(private docDepartment : ServiceService) { }

  addDepartment = new FormGroup({
    departmentName: new FormControl(''),
    stetus:new FormControl(''),
  })
  ngOnInit(): void {
  }
  allDepartmentData(){
    console.log(this.addDepartment.value);
    this.docDepartment.SaveDepartmentData(this.addDepartment.value).subscribe((result)=>{
      console.log(result);
    });
  }

}
