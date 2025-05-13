import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { provideHttpClient } from '@angular/common/http';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
//TODO
//WINDOWS CREDENTIAL IN CREDENTIAL MANAGER
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
