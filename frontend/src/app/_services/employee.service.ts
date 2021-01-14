import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


export interface Employee {

  id:number;
  firstName:string;
  lastName:string;
  emailId:string;
}


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient: HttpClient,private router:Router) { }

 
 
getList():Observable<any>{
  return this.httpClient.get(this.baseURL);
}

//create Employee
create(employee: Employee): Observable<any> {
    return this.httpClient.post(this.baseURL, employee);   
}

getEmployeeById(id: number): Observable<Employee>{
  return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
}

updateEmployee(id: number, employee: Employee): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`, employee);
}


deleteEmployee(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}


  goToHome(){
    this.router.navigate(['/home']);
  }
}
