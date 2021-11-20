import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployerComponent } from './employer/employer.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  // { path: '', component: LoginComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path:'employees', component: EmployeeComponent},
  {path:'employers', component:EmployerComponent},
  {path:"employee-details/:id", component: EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
