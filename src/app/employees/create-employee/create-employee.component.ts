import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  standalone: false,
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
  fullName:string = "";
  email:string = "";

  gender: string = "male";

  contactPreferences: string = "email";

  saveEmployee (employeeForm: NgForm){
    console.log(employeeForm);
  }
}
