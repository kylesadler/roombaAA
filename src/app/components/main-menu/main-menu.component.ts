import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { Employee } from 'src/app/employee/employee';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
  providers: [UserService]
})
export class MainMenuComponent implements OnInit {
  
  private apiUrl = environment.baseUrl;
  constructor(
    private userService: UserService,
	  private router: Router,
    private http: HttpClient
	) { }

  manager = false; // is elevated user or manager

  ngOnInit(): void 
  {
    this.userService.isManager()
      .then((isManager: boolean) => {
        this.manager = isManager;
      })
  }

	transaction()
	{
		document.getElementById("ErrorTransaction").hidden = false;
	}
	products()
	{
		return this.router.navigate(['products']);
	}
	createEmployee()
	{
    this.userService.getCurrentEmployee()
      .then((employee: Employee) => {
        return this.router.navigate(['/employees']);
      })
	}
	salesReport()
	{
		document.getElementById("ErrorSales").hidden = false;
	}
	cashierReport()
	{
		document.getElementById("ErrorCashier").hidden = false;
	}
}
