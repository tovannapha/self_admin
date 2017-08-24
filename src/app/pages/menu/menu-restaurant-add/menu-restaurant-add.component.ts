import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu-restaurant-add',
  templateUrl: './menu-restaurant-add.component.html',
  styleUrls: ['./menu-restaurant-add.component.scss']
})
export class MenuRestaurantAddComponent implements OnInit {

  id: String;
  restaurant: any;

  menu_name: String;
  menu_category: [String];
  menu_price: Number;
  menu_currency: String;
  menu_description: String;

  constructor(
    private apollo: Apollo,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
    });


  }

  add_menu() {

    console.log(this.menu_name)

    const mutationinfo = gql`
        mutation ($name: String! , $restaurant_id :ID! , $menu_description : String) {
          addMenu(data:{
            name:$name
            restaurant_id: $restaurant_id
            description: $menu_description
            ca
          }) {
            id
            name
          }
        }
      `;


    this.apollo.mutate({
      mutation: mutationinfo,
      variables: {
        name: "test",
        restaurant_id: this.id,
        menu_description: this.menu_description,
      }
    }).subscribe(({ data  } :any) => {
      console.log("werwerwer",data)
      this.router.navigate(['/admin/restaurant/restaurant-detail/', data.id]);
    });
  }


}
