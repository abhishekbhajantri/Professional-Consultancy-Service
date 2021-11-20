import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {

  constructor(private shared : SharedService, private router: Router) { }

  employees: Employee[] = [];

  ngOnInit(): void {
    this.getemployees();
  }

  private getemployees()
  {
    this.shared.getEmployeeList().subscribe(data => {
    this.employees = data;
    console.log(data);
    });
  }
  employeeDetails(employeeId: any)
  {
    console.log("nig");
    this.router.navigate(['employee-details',employeeId]);
  } 
}
