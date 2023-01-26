import { Injectable } from '@angular/core';
// import { AddAppiontmentService } from '../services/add-appiontment.service';
import { HttpClient} from '@angular/common/http';
//This is the distributer service. There will one distributer per component
//and only that component has access to the distributer
//The component will talk to service layer only via distributer service
//the job of distributer is to call service(which calls the repository...)
//The distributer can call the service of the component it is associated with alongside any other
//Service. It doesn't matter.
@Injectable({
  providedIn: 'root'
})
export class AddAppointmentDistributorService {

  url='http://localhost:3000/posts';
  // Inject  Service in the constructor
  // constructor(private addAppiontmentService:AddAppiontmentService) { }
  constructor (private http:HttpClient){}
  // get the data from Service after validating according to the business rules
  getAllappointment(){
    return this.http.get(this.url);
  }
  saveAppointment(data:any) {
   console.log(data); 
   return this.http.post(this.url,data);
  }


}
