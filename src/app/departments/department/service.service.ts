import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }

  url="http://localhost:3000/department";
  getDepartament(){
    return this.http.get(this.url);

  }
  SaveDepartmentData(data : any){
      console.log(data);
      return this.http.post(this.url, data);
  }

}
