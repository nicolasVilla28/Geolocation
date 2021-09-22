import { Injectable } from '@angular/core';
import {LoginInterface} from '../../Models/login.interface';
import {ResponseInterface} from '../../Models/response.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://coding-test.rootstack.net/";

  constructor(private http:HttpClient) { }

  Login(form:LoginInterface):Observable<ResponseInterface>{
    let address = this.url + "api/auth/login";
    return this.http.post<ResponseInterface>(address, form);

  }

}
