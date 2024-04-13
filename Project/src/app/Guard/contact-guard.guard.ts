import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../Services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ContactGuardGuard implements CanActivate {
  constructor(private auth:AuthServiceService , private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.auth.isAuthenticated()) {
        return this.router.navigate(['/login']).then(() => false);
      }
      return true;
  }

}
