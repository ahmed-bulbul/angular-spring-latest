import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/_services/employee.service';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})

export class CreateEmployeeComponent implements OnInit {

  createEmployeeForm: FormGroup;
  errors = null;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public employeeService: EmployeeService
  ) {
    this.createEmployeeForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      emailId: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.employeeService.create(this.createEmployeeForm.value).subscribe(
      result => {
        console.log(result)
      },
      error => {
        this.errors = error.error;
      },
      () => {
        this.createEmployeeForm.reset()
        this.router.navigate(['employee-list']);
      }
    )
  }

}