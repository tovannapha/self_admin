import { CanActivate, Router } from '@angular/router';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AclGuard implements CanActivate {

    constructor(
        private afAuth: AngularFireAuth,
        private router: Router
    ) { }

    canActivate() {
        if (1) {
            return true;
        } else {
            this.router.navigate([ '/register' ])
            return false;
        }
    }

}