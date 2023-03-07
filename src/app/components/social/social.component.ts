import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styles: [
  ]
})
export class SocialComponent implements OnInit {

  constructor() { }
  
  @Input() english: number = 0;

  ngOnInit(): void {

    const options = {};

    const tooltipped = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltipped, options);

  }

}
