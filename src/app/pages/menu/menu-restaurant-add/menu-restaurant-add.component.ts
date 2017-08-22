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

}
