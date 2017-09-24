import { Component, OnInit, ElementRef, Renderer, ViewChild } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';


import * as _ from "lodash"

@Component({
  selector: 'app-user-acl',
  templateUrl: './user-acl.component.html',
  styleUrls: ['./user-acl.component.scss']
})
export class UserAclComponent implements OnInit {

  acl: any;
  aclResources: any;
  sortAcl: any = [];
  sortAclResources: any = [];
  rs: any = [];

  aclRoleAdd = new FormGroup({
    app_name: new FormControl(),
    role: new FormControl(),
    description: new FormControl(),
    code: new FormControl(),
    sort: new FormControl(),
  });



  constructor(
    private apollo: Apollo,
    private router: Router,
    private renderer: Renderer,
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    //private orderBy :OrderByPipe
  ) {

    this.aclRoleAdd = this.fb.group({
      app_name: "",
      role: "",
      description: "",
      code: "",
      sort: "",
    });

  }

  ngOnInit() {

    const INIT = gql`
    query  {
      acls {
        id
        app_name
        role
        resources
        sort
      }

      aclResources {
        id
        app_name
        backfront
        resource_name
        description
        code
        sort
      }
    }
  `;

    this.apollo.watchQuery({
      query: INIT
    }).subscribe((x: any) => {
      this.acl = x.data.acls
      this.aclResources = x.data.aclResources

      /*  console.log(x.data.acls)
       console.log(x.data.aclResources) */


      //init rs for 2d arrays
      this.rs = JSON.parse(JSON.stringify((new Array(this.acl.length)).fill((new Array(this.aclResources.length))
        .fill("AAA"))));
      // console.log(this.rs)

      //sort acl data
      for (let jj = 0; jj < this.aclResources.length; jj++) {
        this.sortAclResources.push(this.aclResources[jj])
      }
      this.sortAclResources.sort((a: any, b: any) => {
        if (a.sort < b.sort) {
          return -1;
        } else if (a.sort > b.sort) {
          return 1;
        } else {
          return 0;
        }
      });

      //sort aclResources data
      for (let ii = 0; ii < this.acl.length; ii++) {
        this.sortAcl.push(this.acl[ii])
      }
      this.sortAcl.sort((a: any, b: any) => {
        if (a.sort < b.sort) {
          return -1;
        } else if (a.sort > b.sort) {
          return 1;
        } else {
          return 0;
        }
      });


      //allocate data to rs
      for (let ii = 0; ii < this.sortAcl.length; ii++) {
        for (let jj = 0; jj < this.sortAclResources.length; jj++) {
          if(this.sortAcl[ii].resources[jj]){
            this.rs[ii][jj] = this.sortAcl[ii].resources[jj]
          }else[
            this.rs[ii][jj]="000"
          ]
        }
      }

      /* 
            console.log(this.rs)
            console.log(this.sortAclResources)
            console.log(this.sortAcl)
       */
    });
  }

  goToResourceManage() {
    this.router.navigate(['/admin/user/user-acl-resources']);
  }


  addAclRole() {
    const ADDACL = gql`
    mutation ($app_name: String, $role: String,  $description: String, $code: String, $sort:String ) {
      addAcl(data:{
        app_name: $app_name,
        role: $role,
        description: $description,
        code: $code,
        sort:$sort
      }) {
        app_name
      }
    }
  `;

    console.log(this.aclRoleAdd.value)

    /* 
    Insert to Mongo DB
    */
    this.apollo.mutate({
      mutation: ADDACL,
      variables: {
        app_name: this.aclRoleAdd.value.app_name,
        role: this.aclRoleAdd.value.role,
        description: this.aclRoleAdd.value.description,
        code: this.aclRoleAdd.value.code,
        sort: this.aclRoleAdd.value.sort,
      }

    }).subscribe(({ data }) => {
      window.location.reload();
    });

  }



  setAcl(i, j) {
    //aclResouces -> i
    //acl -> j
    //console.log("", i, j)
    if (!this.checkFlag(i, j)) {
      this.rs[i][j] = this.sortAclResources[j].id;
    } else {
      this.rs[i][j] = "0"
    }
  }

  checkFlag(i, j) {
    //aclResouces -> i
    //acl -> j
    console.log("i", i)
    console.log("j", j)

    if (this.rs[i][j] == this.sortAclResources[j].id) return true;
    else return false
  }







  saveAcl() {
    /* console.log(this.rs) */

    for (let ii = 0; ii < this.sortAcl.length; ii++) {
      /*  console.log(this.rs[ii])
       console.log(this.sortAcl[ii].role) */


      const EDITACL = gql`
           mutation ($id: ID , $resource: [String]) {
             editAcl(id:$id data:{
               resource: $resource
             }) {
               app_name
             }
           }
         `;
      console.log(this.rs[ii])

       this.apollo.mutate({
         mutation: EDITACL,
         variables: {
           id: this.sortAcl[ii].id,
           resource: this.rs[ii]
         }
 
       }).subscribe(({ data }) => {
         // 
       });
    }

    window.location.reload();
  }




}
