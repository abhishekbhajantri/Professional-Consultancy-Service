import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  constructor(private shared: SharedService, private router: Router) {}

  // employeeId?: number;
  // firstName?: string;
  // lastName?: string;
  // emailId?: string;
  // age?: string;
  // sex?: string;
  // phoneNo?: string;
  // address?: string;
  // role?: string;
  // username?: string;
  // password?: string;
  // password2?: string;
  employee: Employee = new Employee();
  ngOnInit(): void {}

  Register() {
    this.shared.createEmployee(this.employee).subscribe(data=>{
      console.log(this.employee);
    })
  }

  GoBack() {
    this.router.navigateByUrl('/login');
  }
}
