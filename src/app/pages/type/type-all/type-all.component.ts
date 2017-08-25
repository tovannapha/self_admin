import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';


@Component({
  selector: 'app-type-all',
  templateUrl: './type-all.component.html',
  styleUrls: ['./type-all.component.scss']
})
export class TypeAllComponent implements OnInit {

  restaurantTypes: any;
  menuTypes: any;

  constructor(
    private apollo: Apollo,
    private router: Router,
  ) { }

  ngOnInit() {
    const queryinfo = gql`
      query  {
        restaurant_types {
          name
          slug
          description
        }
        menu_categories {
          name
          slug
          description
        }
      }
    `;

    this.apollo.watchQuery({
      query: queryinfo,
    }).subscribe((x: any) => {
      this.restaurantTypes = x.data.restaurant_types;
      this.menuTypes = x.data.menu_categories;
      console.log(x.data);
    });
  }
  
  goToDetail(item) {
    console.log("click detail")
  }

  redirect(pageName: string) {
    console.log(pageName)
    // this.router.navigate(['/type/type-restaurant/type-restaurant-add']);
    window.location.href = '#/admin/type/'+ pageName;
  }
}
