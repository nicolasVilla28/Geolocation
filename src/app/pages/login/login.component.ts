import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {ApiService} from "../../services/api/api.service"
import {LoginInterface} from "../../Models/login.interface"

import {Router} from '@angular/router'
import {ResponseInterface} from '../../Models/response.interface'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(private api:ApiService, private router:Router) { }
  

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if(localStorage.getItem('token')){
    this.router.navigate(['home']);
    }
  }

  onLogin(form: LoginInterface){
    this.api.Login(form).subscribe(data => {
    let dataResponse:ResponseInterface = data

    if(dataResponse.access_token !== ""){ 
      localStorage.setItem("token", dataResponse.access_token);
      this.router.navigate(['home']);
    }
    
    })
  }

}
