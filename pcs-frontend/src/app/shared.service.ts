import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly url = "https://localhost:5001/";

  constructor(private http: HttpClient) { }

  addEmployee(employee: any) {
    return this.http.post(this.url, employee);
  }

  getEmployee(id: number) {
    return this.http.get(this.url + `/${id}`);
  }

  getEmployeeList(): Observable<any> {
    return this.http.get(this.url);
  }


}
