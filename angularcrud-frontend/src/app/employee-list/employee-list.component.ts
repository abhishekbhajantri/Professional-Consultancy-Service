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
    // this.empnames();
  }

  enames:any[] =[];
  // empnames()
  // {
  //   console.log("akwjbh");
  //   for(let c of this.employees)
  //   {
  //     this.enames.push(c.firstName);
  //   }
  //   console.log(this.enames);
  // }

  searchText = '';
  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman'
  ]

  private getemployees()
  {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
      for(let c of data)
      {
        this.enames.push(c.firstName);
      }
      console.log(data);

  });
}
  updateEmployee(employeeId: number)
  {
    this.router.navigate(['update-employee',employeeId]);
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