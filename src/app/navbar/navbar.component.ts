import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'


  ,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showNavLinks: boolean = true;
  token: any = localStorage.getItem("token");
  constructor(private _Router: Router, public _AuthService: AuthService) {

  }
  logout() {
    localStorage.removeItem("token")
    this._Router.navigateByUrl("/login")

  }

  search(e: any) {

    if (e.target.value == "") {
      this._Router.navigateByUrl("/home");

    }
    else {
      this._Router.navigateByUrl(`/search/${e.target.value}`)
    }

  }

  ngOnInit(): void {
  }

}
