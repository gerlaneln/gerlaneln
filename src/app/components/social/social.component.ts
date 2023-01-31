import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styles: [
  ]
})
export class SocialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const options = {};

    const tooltipped = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltipped, options);

  }

}
