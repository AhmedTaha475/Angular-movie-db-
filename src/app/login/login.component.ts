import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    "email": new FormControl(null, [Validators.required]),
    "password": new FormControl(null, [Validators.required]),

  })
  constructor(private _Router: Router, private _AuthService: AuthService, private toastr: ToastrService) {



  }
  logalert2: boolean = false;
  logMessage: any;
  login() {
    if (!this.loginForm.valid) {
      return
    }
    this._AuthService.loginData(this.loginForm.value).subscribe((data) => {
      this.logMessage = data.message;
      localStorage.setItem("token", data.token);
      if (this.logMessage == "success") {
        this.toastr.success('Login!', 'Logged in successfully!');
        this._Router.navigateByUrl("/home")
      }
      else {
        this.toastr.error('Login!', 'loginFailed!');
        this.logalert2 = true;
        this.loginForm.reset
      }

    })

  }
  ngOnInit(): void {
  }

}
