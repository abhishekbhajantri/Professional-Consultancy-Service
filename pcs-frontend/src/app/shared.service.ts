import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly url = "http://localhost:8080/";

  private baseUrl = "http://localhost:8080/employees/";

  constructor(private http: HttpClient) { }

  addEmployee(employee: any) {
    return this.http.post(this.url, employee);
  }

  createEmployee(employee : Employee): Observable<Object>{
    return this.http.post(this.url+"employees/create", employee);
  }

  getEmployeeById(id: number) {
    return this.http.get(`${this.baseUrl}/getby/${id}`)
  }

  getEmployeeList(): Observable<any> {
    return this.http.get(this.url+"employees/all");
  }


}
