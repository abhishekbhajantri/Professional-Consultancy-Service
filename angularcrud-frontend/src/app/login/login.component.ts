import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router) {}

  employeeList: any[] = [];
  Username?: string;
  Password?: string;

  ngOnInit(): void {
    // this.service.getEmployeeList().subscribe((list) => {
    //   this.employeeList = list;
    // });
  }

  LoginEmployee() {
    // var emp = this.employeeList.find((emp) => emp.username === this.Username);
    // if (emp != null && emp.password === this.Password) {
    if(this.Username === "admin" && this.Password === "admin123") {
      this.router.navigateByUrl('/employees');
    } else {
      alert('Invalid Credentials');
    }
  }

  Register() {
    this.router.navigateByUrl('/registration');
  }

}
