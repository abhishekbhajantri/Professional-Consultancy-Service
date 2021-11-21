import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService : EmployeeService,private route: ActivatedRoute, private router: Router) { }

  id!: number;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    },error=>console.log(error));
  }

  goToEMployeeList()
  {
    this.router.navigate(['/employees']);
  }
  
  onSubmit(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
      alert("Details Updated")
      this.goToEMployeeList();
    },
    error=>console.log(error));
  }

  // Register() {
  //   this.service.createEmployee(this.employee).subscribe(data=>{
  //     console.log(this.employee);
  //   })
  // }

  // GoBack() {
  //   this.router.navigateByUrl('/');
  // }

}
