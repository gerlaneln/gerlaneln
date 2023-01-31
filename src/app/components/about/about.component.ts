import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const options = {};

    const tabs = document.querySelectorAll('.tabs');
    M.Tabs.init(tabs, options);

    const collapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsible, options);

    const tooltipped = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltipped, options);
  }

}
