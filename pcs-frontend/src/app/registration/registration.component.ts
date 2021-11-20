import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  constructor(private shared: SharedService, private router: Router) {}

  employeeId?: number;
  firstName?: string;
  lastName?: string;
  emailId?: string;
  age?: string;
  sex?: string;
  phoneNo?: string;
  address?: string;
  role?: string;
  username?: string;
  password?: string;
  password2?: string;

  ngOnInit(): void {}

  Register() {
    
  }

  GoBack() {
    this.router.navigateByUrl('/login');
  }
}
