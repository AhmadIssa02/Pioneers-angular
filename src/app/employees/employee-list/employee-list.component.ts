import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  standalone: false,
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{
  
  employees: Employee[];

  constructor( private _empService: EmployeeService) {
    
  }

  ngOnInit(): void {
    this._empService.getEmployees().subscribe((empData ) => {
        this.employees = empData;
        console.log(this.employees);
        
      },
      (error) =>{
        console.log(error);
      }
    );
  }

  
}
