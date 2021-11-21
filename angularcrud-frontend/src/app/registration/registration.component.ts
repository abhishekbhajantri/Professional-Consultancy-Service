import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private service: EmployeeService, private router: Router) { }
  employee: Employee = new Employee();

  ngOnInit(): void {
  }

  Register() {
    this.service.createEmployee(this.employee).subscribe(data=>{
      console.log(this.employee);
    })
  }

  GoBack() {
    this.router.navigateByUrl('/login');
  }

}
