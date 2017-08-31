import { CanActivate, Router } from '@angular/router';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private afAuth: AngularFireAuth, 
        private router: Router
    ) {}

    canActivate(): Observable<boolean> {
        //this.router.navigate([ '/login' ])
       return Observable.from(this.afAuth.authState)
        .take(1)
        .map(state => !!state)
        .do(authenticated => {
      if 
        (!authenticated) this.router.navigate([ '/login' ]);
      }) 
    }
 
}