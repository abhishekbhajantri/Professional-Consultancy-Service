import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService : EmployeeService, private router: Router) { }

  employees: Employee[] = [];
  ngOnInit(): void {
    this.getemployees();
  }

  private getemployees()
  {
    this.employeeService.getEmployeesList().subscribe(data => {
    this.employees = data;
    console.log(data);
  });
}
  updateEmployee(id: number)
  {
    this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id: number)
  {
    this.employeeService.deleteEmployee(id).subscribe(data =>{
      this.getemployees();
    });
  }

  employeeDetails(id: number)
  {
    this.router.navigate(['employee-details',id]);
  }
}