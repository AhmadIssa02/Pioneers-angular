import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {  

  APIURL : string = "http://localhost:3000/employees";

  constructor( private _http:HttpClient) {}
  getEmployees(): Observable<Employee[]> {
    return this._http.get<Employee[]>(this.APIURL).pipe(
      map((emp: any) => emp),
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
        console.error("Client Error", error.error);
        console.error("Client Error", error);
    } else {
        console.error("Backend Error", error.statusText);
    }
    return throwError(() => new Error("Error Please try later"));
}
}
