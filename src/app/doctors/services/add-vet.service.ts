import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddVetService {

  constructor(private http : HttpClient) { }

    url : any= "http://localhost:3000/doctor";

  getAllDoctor(){
    return this.http.get(this.url);

  }

  SaveDoctorDatas(data:any){
    console.log(data);
    return this.http.post(this.url, data);
    

  }
}
