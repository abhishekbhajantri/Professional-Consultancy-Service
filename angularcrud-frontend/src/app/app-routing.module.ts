import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewCertificatesComponent } from './view-certificates/view-certificates.component';
import { ViewSkillsComponent } from './view-skills/view-skills.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'employees', component: EmployeeListComponent},
  // {path: 'create-employee', component: CreateEmployeeComponent},
  {path: 'login', component: LoginComponent},
  {path:'update-employee/:id', component: UpdateEmployeeComponent},
  {path:'employee-details/:id', component: EmployeeDetailsComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'view-skills', component:ViewSkillsComponent},
  {path:'view-certificates', component:ViewCertificatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
