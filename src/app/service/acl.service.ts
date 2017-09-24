import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';


import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import * as _ from "lodash"
import { AccessControl } from 'accesscontrol';



@Injectable()
export class AclGuard implements CanActivate {

    private UID: any;
    private UserLEVER: any;
    private ac: any;
    private acl: any;
    private aclResources: any;
    private grantList: any = [];

    userData: FirebaseObjectObservable<any>;

    constructor(
        private afAuth: AngularFireAuth,
        private db: AngularFireDatabase,
        private router: Router,
        private apollo: Apollo,
    ) { }




    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        //console.log(this.UID)
        //console.log(this.UserLEVER)
        if (this.ac) {
            var permission = this.ac.can('DEVELOPER').readAny(state.url)
            //console.log(permission.granted)

            if (permission.granted) {
                return true;
            } else {
                this.router.navigate(['/register'])
                return false;
            }
        }else{
            this.setCurrentUser();
            return true;
        }
    }

    setCurrentUser() {
        this.afAuth.authState.subscribe((x) => {
            this.userData = this.db.object('/user/' + x.uid);
            this.userData.subscribe(y => {
                this.UID = y.uid;
                this.UserLEVER = y.level
            });
        });

        const INIT = gql`
        query  {
            acls {
                role
                resource
                action
                attributes
              }
        }
      `;

        this.apollo.watchQuery({
            query: INIT
        }).subscribe((x: any) => {
            this.acl = x.data.acls
            console.log(this.acl )
            this.ac = new AccessControl(this.acl)



        })




    }

}