import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { SharedService } from '../shared.service';
import { Skill } from '../skill';

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
  skills: Skill[] = [];
  ngOnInit(): void {
    // this.getSkills()
  }

  // private getSkills()
  // {
  //   this.shared.getSkillsList().subscribe(data => {
  //   this.skills = data;
  //   console.log(data);
  //   });
  // }
  Register() {
    this.shared.createEmployee(this.employee).subscribe(data=>{
      console.log(this.employee);
    })
  }

  GoBack() {
    this.router.navigateByUrl('/login');
  }
}
