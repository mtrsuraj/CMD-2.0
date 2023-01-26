import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AllAppointmentsService {
  url='http://localhost:3000/posts';
  constructor(private http: HttpClient) { }
  getAllAppointments(){
    return this.http.get(this.url);
  }
}
