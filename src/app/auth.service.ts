import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) { }
  postData(register: any): Observable<any> {
    return this._HttpClient.post("https://routeegypt.herokuapp.com/signup", register)
  }
  loginData(register: any): Observable<any> {
    return this._HttpClient.post("https://routeegypt.herokuapp.com/signin", register)
  }
  isLoggedIn() {
    return !!localStorage.getItem('token')

  }
}
