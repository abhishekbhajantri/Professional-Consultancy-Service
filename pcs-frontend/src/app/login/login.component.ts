import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private service: SharedService, private router: Router) {}

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
      alert('Logged In');
      this.router.navigateByUrl('/employees');
    } else {
      alert('Invalid Credentials');
    }
  }

  Register() {
    this.router.navigateByUrl('/registration');
  }
}
