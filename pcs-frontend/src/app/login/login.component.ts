import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  Username?: string;
  Password?: string;

  ngOnInit(): void {
  }

  LoginEmployee() {
    console.log(this.Username);
    console.log(this.Password);
  }

  Register() {
    
  }

}
