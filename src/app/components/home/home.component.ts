import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const options = {};

    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav, options);

    const parallax = document.querySelectorAll('.parallax');
    M.Parallax.init(parallax, options);

  }

}
