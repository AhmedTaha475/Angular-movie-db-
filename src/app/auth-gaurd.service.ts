import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private Router: Router) { }
  canActivate(): boolean | Observable<boolean> {
    let token = localStorage.getItem("token");
    if (token) {
      return true;
    }
    this.Router.navigateByUrl("/login");
    return false;
  }
}
