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
        mutation ($name: String, $description: String, $fromDate: String, $toDate: String) {
          addCupon(data:{
            name:$name,
            description: $description,
            period: {
              fromDate: $fromDate,
              toDate: $toDate
            }      
          }) {
            name
            description
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
      }
      
    }).subscribe(({ data }) => {
      console.log(data)
    });

  }

}
