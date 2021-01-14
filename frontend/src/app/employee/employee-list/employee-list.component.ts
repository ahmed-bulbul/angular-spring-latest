import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/_services/employee.service';



export interface Employee {

  id:number;
  firstName:string;
  lastName:string;
  emailId:string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  employeeList: any;
 
  constructor(public employeeService: EmployeeService, private router:Router) { }

  getEmployees(){

    this.employeeService.getList().subscribe((data:any) => {
      this.employeeList = data;
      console.warn(data);
     
    })
  }

  // employeeDetails(id : number){
  //   this.router.navigate(['employee-details',id]);

  // }

  updateEmployee(id: number){
    this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }

  ngOnInit(): void {
    this.getEmployees();
  }

}
