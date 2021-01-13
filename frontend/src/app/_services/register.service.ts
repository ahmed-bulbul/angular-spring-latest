import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = "http://localhost:8080/api/test/roles";

  constructor(private http:HttpClient) { }

}
