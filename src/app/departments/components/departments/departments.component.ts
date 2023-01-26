import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../../department/service.service'

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor(private department : ServiceService) { }

  allDepartment:any=[]
  ngOnInit(): void {
    this.department.getDepartament().subscribe((allData)=>{
      console.log(allData);
      this.allDepartment=allData;
    })
  }

}
