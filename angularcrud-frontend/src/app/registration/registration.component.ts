import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Skills } from '../skills';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private service: EmployeeService, private router: Router, private skillservice: SkillsService) { }
  employee: Employee = new Employee();
  selectedSkill: any=[];
  
  skills : Skills[]=[];
  ngOnInit(): void {
    this.getSkills();
  }

  Register() {
    this.service.createEmployee(this.employee).subscribe(data=>{
      console.log(this.employee);
      alert("New Employee Registered")
      this.GoBack();
    })
  }

  getSkills()
  {
    this.skillservice.getSkillsList().subscribe(data=>{
      this.skills=data;
    });
  }
  GoBack() {
    this.router.navigateByUrl('/employees');
  }

}
