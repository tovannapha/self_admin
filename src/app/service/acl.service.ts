import { CanActivate, Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AclGuard implements CanActivate {

    private UID:any;
    private UserLEVER:any;

    userData: FirebaseObjectObservable<any>;

    constructor(
        private afAuth: AngularFireAuth,
        private db: AngularFireDatabase,
        private router: Router,
    ) { }

    canActivate() {

        console.log(this.UID)
        console.log(this.UserLEVER)

        if (1) {
            return true;
        } else {
            this.router.navigate([ '/register' ])
            return false;
        }
    }

    setCurrentUser(){
        this.afAuth.authState.subscribe((x)=>{
            this.userData = this.db.object('/user/' + x.uid );
            this.userData.subscribe(y => {
                this.UID = y.uid;
                this.UserLEVER = y.level
              });
        });
    }

}