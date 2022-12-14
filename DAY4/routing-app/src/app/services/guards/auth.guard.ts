import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanLoad {
    private isAuth$ = this.authService.isAuth$.pipe(
        map(isAuth => isAuth ? true : this.router.parseUrl('/unauth')));

    constructor(
        private router: Router,
        private authService: AuthService) {
    }

    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.isAuth$;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.isAuth$;
    }

}





// MODULES
    // Components
    // Directives
    // Pipes
    //_____________
    //Provider service

//Core - Provide singltone services and import other core modules

//Shared - shared ui - pipes, directives,
//        components export from module. each component is a module


//Features














