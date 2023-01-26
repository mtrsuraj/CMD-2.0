import { Component, OnInit } from '@angular/core';
import { AddAppointmentDistributorService} from '../../core/add-appointment-distributor.service'
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private dashboard : AddAppointmentDistributorService) { 
    this.count+=1;
  }
  getDashboards:any=[];
  count:number = 0;
  ngOnInit(): void {
    this.dashboard.getAllappointment().subscribe((allData)=>{
      console.log(allData);
      this.getDashboards=allData;
      
    })
  }

}
