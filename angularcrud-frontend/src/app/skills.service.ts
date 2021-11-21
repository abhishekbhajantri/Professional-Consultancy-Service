import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from './skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private baseUrl = "http://localhost:8080/skills/";
  constructor(private httpClient : HttpClient) { }

  getSkillsList() : Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(`${this.baseUrl}all`);
  }

  createEmployee(employee : Skills): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, employee);
  }

  getEmployeeById(id: number): Observable<Skills>
  {
    return this.httpClient.get<Skills>(`${this.baseUrl}/getby/${id}`);
  }

  updateEmployee(id: number, employee: Skills): Observable<Object>
  {
    return this.httpClient.put(`${this.baseUrl}/update/${id}`,employee);
  }

  deleteEmployee(id: number):Observable<Object>
  {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }
}
