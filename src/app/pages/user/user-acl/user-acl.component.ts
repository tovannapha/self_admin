import { Component, OnInit, ElementRef, Renderer, ViewChild } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';


@Component({
  selector: 'app-user-acl',
  templateUrl: './user-acl.component.html',
  styleUrls: ['./user-acl.component.scss']
})
export class UserAclComponent implements OnInit {

  acl: any;
  aclResources: any;
  aclRoleAdd = new FormGroup({
    app_name: new FormControl(),
    role: new FormControl(),
    description: new FormControl(),
    code: new FormControl(),
  });


  constructor(
    private apollo: Apollo,
    private router: Router,
    private renderer: Renderer,
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {

    this.aclRoleAdd = this.fb.group({
      app_name: "",
      role: "",
      description: "",
      code: "",
    });
  }

  ngOnInit() {
    const INIT = gql`
    query  {
      acls {
        id
        app_name
        role
        resource{
          id
        }
      }

      aclResources {
        id
        app_name
        backfront
        resource_name
        description
        code
      }
    }
  `;

    this.apollo.watchQuery({
      query: INIT
    }).subscribe((x: any) => {
      this.acl = x.data.acls
      this.aclResources = x.data.aclResources
      console.log(x.data.acls)
      console.log(x.data.aclResources)
    });
  }

  goToResourceManage() {
    this.router.navigate(['/admin/user/user-acl-resources']);
  }


  addAclRole() {
    const ADDACL = gql`
    mutation ($app_name: String, $role: String,  $description: String, $code: String ) {
      addAcl(data:{
        app_name: $app_name,
        role: $role,
        description: $description,
        code: $code,
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
        code: "",
      }

    }).subscribe(({ data }) => {
      window.location.reload();
    });
    
  }

}
