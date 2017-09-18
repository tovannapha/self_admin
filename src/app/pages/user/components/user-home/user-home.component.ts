import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import * as _ from "lodash"

@Component({
  selector: 'user-home-component',
  templateUrl: './user-home.html',
  styleUrls: ['./user-home.scss']
})
export class UserHomeComponent implements OnInit {
  users
  modalFlag: any;

  constructor(
    private apollo: Apollo,
    private router: Router,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {
    const queryinfo = gql`
    query  {
      users {
        id
        name
        email
        firebase_uid
      }
    }
  `;

    this.apollo.watchQuery({
      query: queryinfo
    }).subscribe((x: any) => {
      this.users = x.data.users
      console.log(x.data.users)
    });
  }

  ngOnInit() {

  }

  setModalFlag(i) {
    this.modalFlag = i;
  }

  //
  goToDetail() {
    console.log("GOTO detail")
  }

  //
  goToMenu() {
    _.remove(this.users, function (n) {
      return n == 0;
    });
    console.log("GOTO menu")
    console.log(this.users)
    var array = this.users;
    var evens = _.remove(array, function (n) {
      console.log(n)
      //return n % 2 == 0;
    });

    console.log(array);
    // => [1, 3]

    console.log(evens);
    // => [2, 4]
  }

  //
  deteleteUser() {
    const DeleteUser = gql`
      mutation($id : ID!, $uid: String!) {
        deleteUser(id:$id uid:$uid) {
          id
        }
      }
  `;



    //Fire to backend server
    this.apollo.mutate({
      mutation: DeleteUser,
      variables: {
        id: this.users[this.modalFlag].id,
        uid: this.users[this.modalFlag].firebase_uid,
      }
    }).subscribe(({ data }: any) => {

      window.location.reload();

    });
  }

  gotoUserAdd(){
    this.router.navigate(['/admin/user/user-add']);
  }

}
