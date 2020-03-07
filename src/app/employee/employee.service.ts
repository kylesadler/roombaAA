import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = environment.baseUrl + '/api/employee/';

  constructor(private http: HttpClient) { }

  getEmployees(): Promise<void | Employee[]> {
    return this.http.get(this.apiUrl)
               .toPromise()
               .then(response => response as Employee[])
               .catch(this.handleError);
  }

  getEmployee(id: string): Promise<void | Employee> {
    return this.http.get(this.apiUrl + id)
               .toPromise()
               .then(response => response as Employee)
               .catch(this.handleError);
  }

  addEmployee(employee: Employee): Promise<void | Employee> {
    return this.http.post(this.apiUrl, employee)
               .toPromise()
               .then(response => response as Employee)
               .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
  }
}
