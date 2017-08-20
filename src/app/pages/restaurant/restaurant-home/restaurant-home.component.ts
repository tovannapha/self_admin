import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-restaurant-home',
  templateUrl: './restaurant-home.component.html',
  styleUrls: ['./restaurant-home.component.scss']
})
export class RestaurantHomeComponent implements OnInit {

  restaurants:any;

  constructor(
    private apollo: Apollo,
    private router: Router,
  ) { }

  ngOnInit() {

  const queryinfo = gql`
  query  {
    restaurants {
      id
      name
    }
  }
`;

interface QueryResponse{
  restaurants
  loading
}



    this.apollo.watchQuery<QueryResponse>({
      query: queryinfo
    }).subscribe((x:any) => {
      //var xxx = data;
      this.restaurants = x.data.restaurants
      console.log(x.data.restaurants)
    }); 
  }


  goToDetail(){
    this.router.navigate(['/admin/restaurant/restaurant-detail/', 1]);
  }

}
