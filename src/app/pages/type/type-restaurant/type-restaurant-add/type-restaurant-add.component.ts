import { Component, OnInit } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { NgUploaderOptions } from 'ngx-uploader';

@Component({
  selector: 'app-type-restaurant-add',
  templateUrl: './type-restaurant-add.component.html',
  styleUrls: ['./type-restaurant-add.component.scss']
})
export class TypeRestaurantAddComponent implements OnInit {

  type_name: any;
  type_slug: any;
  type_description: any;

  constructor(
    private apollo: Apollo,
  ) { }

  ngOnInit() {
  }

  add_type() {
    const mutationinfo = gql`
      mutation ($name: String!, $slug: String, $description: String) {
        addRestaurantType(data:{
          name:$name,
          slug:$slug,
          description:$description
        }) {
          name
          slug
          description
        }
      }
    `;

    this.apollo.mutate({
      mutation: mutationinfo,
      variables: {
        name: this.type_name,
        slug: this.type_slug,
        description: this.type_description,
      }
    }).subscribe(({ data }) => {
      console.log(data)
    });
  }

  
}
