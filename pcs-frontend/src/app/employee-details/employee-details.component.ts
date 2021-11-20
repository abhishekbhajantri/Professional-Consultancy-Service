import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private shared: SharedService) { }
  employeeId!: number;
  employee: Employee = new Employee;
  ngOnInit(): void {
    this.employeeId=this.route.snapshot.params['id'];
    this.employee=new Employee();
    this.shared.getEmployeeById(this.employeeId).subscribe(data=>{
      this.employee=data;
    })
  }
  }