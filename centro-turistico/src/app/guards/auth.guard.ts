import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { LoginService, UserService } from '../services/index';
import { User } from '../interfaces/index';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];  
  route: ActivatedRouteSnapshot;
  user: User;
  constructor(
    private _router: Router, 
    private _loginService: LoginService,
    private _userService: UserService
    ){
      this.user = this._userService.getUser();
    }
  
  canActivate(){
    if (!this._loginService.isLogged()) {
      this._router.navigate(['/login']);
      alert("No estás logueado");
      return false;

    }
    return true;
  }
}
