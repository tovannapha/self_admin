/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
 */

 import { Component } from '@angular/core';

@Component({
  selector: 'new',
  template: `<strong>My page content here</strong>`,
})
export class NewComponent {
  constructor() {}
}