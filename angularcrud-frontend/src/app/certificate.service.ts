import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certificate } from './certificate';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  private baseUrl = "http://localhost:8080/certificates/";
  constructor(private httpClient : HttpClient) { }

  getCertificatesList() : Observable<Certificate[]>{
    return this.httpClient.get<Certificate[]>(`${this.baseUrl}all`);
  }

  createEmployee(employee : Certificate): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, employee);
  }

  getEmployeeById(id: number): Observable<Certificate>
  {
    return this.httpClient.get<Certificate>(`${this.baseUrl}/getby/${id}`);
  }

  updateEmployee(id: number, employee: Certificate): Observable<Object>
  {
    return this.httpClient.put(`${this.baseUrl}/update/${id}`,employee);
  }

  deleteEmployee(id: number):Observable<Object>
  {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }
}
