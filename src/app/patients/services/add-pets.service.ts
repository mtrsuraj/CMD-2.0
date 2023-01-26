import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddPetsService {

  constructor( private http: HttpClient) { }

  url:any='http://localhost:3000/patient';

  getAllPatientData(){
    return this.http.get(this.url);

  }

  SavePatientDetails(data:any){
    console.log(data);
    return this.http.post(this.url, data);

  }
}
