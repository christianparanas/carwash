import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public router: Router) { }

  canActivate(): boolean {
    if (!this.isLoggedIn()) {
      this.router.navigate(['/admin/login']);
      alert("Please Login First")
      return false;
    }
    return true;
  }

  login(data: any) {
    const { username, password } = data

    if(username == "admin" && password == "admin") {
      this.setSession()

      this.router.navigate(['/admin']);
    }
    else {
      alert("Unauthorized")
    }
  }

  setSession() {
    const admin_expires_at = moment().add(7200, 'second');
    localStorage.setItem('admin_expires_at', JSON.stringify(admin_expires_at.valueOf()));
  }

  logout() {
    localStorage.removeItem('admin_expires_at');
    this.router.navigate(['/admin/login']);
  }

  public isLoggedIn(): boolean {
    if(localStorage.getItem('admin_expires_at') === null) return false

    if (moment().isBefore(this.getExpiration()) == false) this.logout();
    return moment().isBefore(this.getExpiration());
  }

  getExpiration() {
    const expiration: any = localStorage.getItem('admin_expires_at');
    const admin_expires_at = JSON.parse(expiration);
    return moment(admin_expires_at);
  }

}

