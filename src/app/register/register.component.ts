import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup = new FormGroup({
    "first_name": new FormControl(null, [Validators.pattern(/^[a-zA-Z]{2,}$/), Validators.required]),
    "last_name": new FormControl(null, [Validators.pattern(/^[a-zA-Z]{2,}$/), Validators.required]),
    "email": new FormControl(null, [Validators.pattern(/^[a-zA-Z0-9\_\-\.]{4,}(@)(yahoo|gmail|hotmail)(.com)$/), Validators.required]),
    "password": new FormControl(null, [Validators.pattern(/^(?=.*[a-zA-z])(?=.*[0-9])([0-9a-zA-Z]{8,})$/), Validators.required]),

  })
  constructor(private _Router: Router, private _AuthService: AuthService) {

  }
  rgMessage: any;
  register() {
    if (!this.registerForm.valid) {
      return
    }
    this._AuthService.postData(this.registerForm.value).subscribe((data) => {
      this.rgMessage = data.message;
      console.log(this.rgMessage)
      if (this.rgMessage == "success") {
        this._Router.navigateByUrl("/login")
      }
      else {
        this.registerForm.reset();
      }
    })

  }
  ngOnInit(): void {
  }

}
