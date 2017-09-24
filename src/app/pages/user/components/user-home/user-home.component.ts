import { Component, OnInit, ElementRef, Renderer, ViewChild } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';


import * as _ from "lodash"

@Component({
  selector: 'user-home-component',
  templateUrl: './user-home.html',
  styleUrls: ['./user-home.scss']
})
export class UserHomeComponent implements OnInit {
  users
  modalFlag: any;
  acl: any;

  userEdit = new FormGroup({
    name: new FormControl(),
    fullname: new FormControl(),
    birthday: new FormControl(),
    email: new FormControl(),
    level: new FormControl(),
    password: new FormControl(),
    position: new FormControl()
  });

  constructor(
    private apollo: Apollo,
    private router: Router,
    private renderer: Renderer,
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {

    this.userEdit = this.fb.group({
      name: "",
      fullname: "",
      birthday: "",
      email: "",
      level: "",
      password: "",
      position: "",
    });

    const queryinfo = gql`
    query  {
      users {
        id
        name
        fullname
        email
        level
        firebase_uid
      }

      acls {
        id
        role
      }
    }
  `;

    this.apollo.watchQuery({
      query: queryinfo
    }).subscribe((x: any) => {
      this.users = x.data.users
      this.acl = x.data.acls
      console.log(x.data.users)
      console.log(x.data.acls)
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
  deteleteUser() {
    const DeleteUser = gql`
      mutation($id : ID, $uid: String) {
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


  edit_user(x) {
    console.log(x)

    const submitRepository = gql`
    mutation ($id:ID, $name: String, $email: String, $fullname: String, $level: String, $uid: String, $birthday: String ) {
      editUser(id:$id  data:{
        name: $name,
        email: $email,
        fullname: $fullname,
        birthday: $birthday,
        level: $level,
        firebase_uid: $uid
      }) {
        name
        email
      }
    }
  `;

    console.log(this.userEdit.value)

    const itemObservable = this.db.object('/user/' + x.firebase_uid);
    itemObservable.set({
      name: this.userEdit.value.name || x.name,
      email: this.userEdit.value.email|| x.email,
      fullname: this.userEdit.value.fullname|| x.fullname,
      birthday: new Date(),
      level: this.userEdit.value.level|| x.level,
    });

    /* 
    Insert to Mongo DB
    */
    this.apollo.mutate({
      mutation: submitRepository,
      variables: {
        id:x.id,
        name: this.userEdit.value.name || x.name,
        email: this.userEdit.value.email|| x.email,
        fullname: this.userEdit.value.fullname|| x.fullname,
        birthday: new Date(),
        level: this.userEdit.value.level|| x.level,
        position: this.userEdit.value.position|| x.position,
        uid: x.firebase_uid
      }

    }).subscribe(({ data }) => {

      this.router.navigate(['/admin/user/user-home']);
      window.location.reload();
    });




  }

  gotoUserAdd() {
    this.router.navigate(['/admin/user/user-add']);
  }

}
