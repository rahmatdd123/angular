import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthServiceService as AuthService} from './auth-service.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}
  async canActivate() {
    debugger;
    var result = await this.auth.isAuthenticated();
    if (!result) {
      debugger;
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
