import { Component, OnInit } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  name;
  fullname;
  birthday;
  email;
  level;
  secret;
  password;
  position;
  restaurant_id;

  constructor(
    private apollo: Apollo,
  ) { }

  ngOnInit() {
  }

  add_user() {
      const submitRepository = gql`
        mutation ($name: String, $email: String, $password: String) {
          addUser(data:{
            name:$name,
            email: $email,
            password: $password    
          }) {
            name
            email
          }
        }
      `;

    // 
    //  TODO: Change fromDate & toDate to this.fromDate & this.toDate
    // 
     this.apollo.mutate({
      mutation: submitRepository,
      variables : {
        name: this.name,
        email: this.email,
        password: this.password
      }
      
    }).subscribe(({ data }) => {
      console.log(data)
    });

  }

}
