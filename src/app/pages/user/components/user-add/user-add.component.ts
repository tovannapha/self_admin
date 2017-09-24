import { Component, OnInit, ElementRef, Renderer, ViewChild } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  acl;

  name;
  fullname;
  birthday;
  email;
  level;
  secret;
  password;
  position;
  restaurant_id;

  userAdd = new FormGroup({
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
    this.userAdd = this.fb.group({
      name: "",
      fullname: "",
      birthday: "",
      email: "",
      level: "",
      password: "",
      position: "",
    });


  }

  ngOnInit() {

    const queryinfo = gql`
    query  {
      acls {
        id
        role
      }
    }
  `;

    this.apollo.watchQuery({
      query: queryinfo
    }).subscribe((x: any) => {
      this.acl = x.data.acls
      console.log(x.data.acls)
    });

  }

  add_user() {
    const submitRepository = gql`
        mutation ($name: String, $email: String, $fullname: String, $level: String, $uid: String, $birthday: String ) {
          addUser(data:{
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

    console.log(this.userAdd.value)

    this.afAuth.auth.createUserWithEmailAndPassword(this.userAdd.value.email, this.userAdd.value.password)
      .then((x) => {
        const itemObservable = this.db.object('/user/' + x.uid);
        itemObservable.set({ 
            name: this.userAdd.value.name,
            email: this.userAdd.value.email,
            fullname: this.userAdd.value.fullname,
            birthday: new Date(),
            level: this.userAdd.value.level,
            position: this.userAdd.value.position,
            uid: x.uid
        });

        /* 
        Insert to Mongo DB
        */
        this.apollo.mutate({
          mutation: submitRepository,
          variables : {
            name: this.userAdd.value.name,
            email: this.userAdd.value.email,
            fullname: this.userAdd.value.fullname,
            birthday: new Date(),
            level: this.userAdd.value.level,
            position: this.userAdd.value.position,
            uid: x.uid
          }
          
        }).subscribe(({ data }) => {

          this.router.navigate(['/admin/user/user-home']);
          window.location.reload();
        });


      })
      .catch(function (error) {
        // Handle Errors here.
        console.log(error)
        // ...
      });

    // 
    //  TODO: Change fromDate & toDate to this.fromDate & this.toDate
    // 
    /* this.apollo.mutate({
     mutation: submitRepository,
     variables : {
       name: this.userAdd.value.name,
       email: this.userAdd.value.email,
       password: this.userAdd.value.password
     }
     
   }).subscribe(({ data }) => {
     console.log(data)
   }); */

  }

}
