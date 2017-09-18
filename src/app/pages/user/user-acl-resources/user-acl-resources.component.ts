import { Component, OnInit, ElementRef, Renderer, ViewChild } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-user-acl-resources',
  templateUrl: './user-acl-resources.component.html',
  styleUrls: ['./user-acl-resources.component.scss']
})
export class UserAclResourcesComponent implements OnInit {

  aclAdd = new FormGroup({
    app_name: new FormControl(),
    backfront: new FormControl(),
    resource_name: new FormControl(),
    description: new FormControl(),
    code: new FormControl(),
  });

  aclEdit = new FormGroup({
    app_name: new FormControl(),
    backfront: new FormControl(),
    resource_name: new FormControl(),
    description: new FormControl(),
    code: new FormControl(),
  });

  aclResources: any;
  modalFlag: any;
  editFlag: any;

  constructor(
    private apollo: Apollo,
    private router: Router,
    private renderer: Renderer,
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {
    this.aclAdd = this.fb.group({
      app_name: "",
      backfront: "",
      resource_name: "",
      description: "",
      code: "",
    });

    this.aclEdit = this.fb.group({
      app_name: "",
      backfront: "",
      resource_name: "",
      description: "",
      code: "",
    });
  }

  ngOnInit() {

    const INIT = gql`
    query  {
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
      this.aclResources = x.data.aclResources
      console.log(x.data.aclResources)
    });

  }


  add_acl_resources() {
    const ADDACL = gql`
        mutation ($app_name: String, $backfront: String, $resource_name: String, $description: String, $code: String ) {
          addAclResources(data:{
            app_name: $app_name,
            backfront: $backfront,
            resource_name: $resource_name,
            description: $description,
            code: $code,
          }) {
            app_name
          }
        }
      `;

    console.log(this.aclAdd.value)

    /* 
    Insert to Mongo DB
    */
    this.apollo.mutate({
      mutation: ADDACL,
      variables: {
        app_name: this.aclAdd.value.app_name,
        backfront: this.aclAdd.value.backfront,
        resource_name: this.aclAdd.value.resource_name,
        description: this.aclAdd.value.description,
        code: this.aclAdd.value.code,
      }

    }).subscribe(({ data }) => {
      window.location.reload();
    });



  }

  setModalFlag(i) {
    this.modalFlag = i;
  }

  setEditFlag(i) {
    console.log(i)
    this.editFlag = i;
  }

  editResource(i) {
    console.log(i)
    const ADDACL = gql`
    mutation ($id:ID, $app_name: String, $backfront: String, $resource_name: String, $description: String, $code: String ) {
      editAclResources(id:$id  data:{
        app_name: $app_name,
        backfront: $backfront,
        resource_name: $resource_name,
        description: $description,
        code: $code,
      }) {
        app_name
      }
    }
  `;


    /* 
    Insert to Mongo DB
    */
    this.apollo.mutate({
      mutation: ADDACL,
      variables: {
        id:this.aclResources[this.editFlag].id,
        app_name: this.aclEdit.value.app_name || this.aclResources[this.editFlag].app_name,
        backfront: this.aclEdit.value.backfront || this.aclResources[this.editFlag].backfront,
        resource_name: this.aclEdit.value.resource_name || this.aclResources[this.editFlag].resource_name,
        description: this.aclEdit.value.description || this.aclResources[this.editFlag].description,
        code: this.aclEdit.value.code || this.aclResources[this.editFlag].code,
      }

    }).subscribe(({ data }) => {
      window.location.reload();
    });
  }

  deleteResource() {

    console.log(this.aclResources[this.modalFlag])
    const DeleteResource = gql`
    mutation($id : ID) {
      deleteAclResources(id:$id) {
        id
      }
    }
`;



    //Fire to backend server
    this.apollo.mutate({
      mutation: DeleteResource,
      variables: {
        id: this.aclResources[this.modalFlag].id,
      }
    }).subscribe(({ data }: any) => {

      window.location.reload();

    });
  }


}
