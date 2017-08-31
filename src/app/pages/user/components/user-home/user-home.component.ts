import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'user-home-component',
  templateUrl: './user-home.html',
  styleUrls: ['./user-home.scss']
})
export class UserHomeComponent implements OnInit {
  users

  constructor(
    private apollo: Apollo,
    private router: Router,
  ) { }

  ngOnInit() {
    const queryinfo = gql`
      query  {
        users {
          id
          name
          email
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

  //
  goToDetail() {
    console.log("GOTO detail")
  }

  //
  goToMenu() {
    console.log("GOTO menu")
  }

  //
  deteleteRestaurant() {
    console.log("GOTO Delete")
  }

}
