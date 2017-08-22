import { Component, OnInit } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DefaultModal } from './../../ui/components/modals/default-modal/default-modal.component';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu-restaurant',
  templateUrl: './menu-restaurant.component.html',
  styleUrls: ['./menu-restaurant.component.scss']
})
export class MenuRestaurantComponent implements OnInit {

  id: String;
  restaurant: any;

  constructor(
    private apollo: Apollo,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
    });


    const queryinfo = gql`
          query  ($id:ID!){
            restaurant(id:$id) {
              id
              name
            }
          }
        `;

    this.apollo.watchQuery({
      query: queryinfo,
      variables: {
        id: this.id
      }
    }).subscribe((x: any) => {
      this.restaurant = x.data.restaurant
    });

  }


  lgModalShow() {
    const activeModal = this.modalService.open(DefaultModal, {size: 'lg'});
    activeModal.componentInstance.modalHeader = 'Large Modal';
  }

}
