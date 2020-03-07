import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [EmployeeService, UserService]
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  isManager: boolean;

  constructor(
    private employeeService: EmployeeService,
    private UserService: UserService
  ) { }

  ngOnInit(): void {
    this.employeeService.getEmployees()
      .then((employees: Employee[]) => {
        this.employees = employees;
      });
    this.UserService.isManager()
      .then((isManager: boolean) => {
        this.isManager = isManager;
      })
  }

}
