import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';


@NgModule({
  declarations: [EmployeeDetailComponent, EmployeeListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    EmployeeDetailComponent,
    EmployeeListComponent
  ]
})
export class EmployeeModule { }
