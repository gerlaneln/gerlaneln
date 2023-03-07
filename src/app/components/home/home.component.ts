import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  english: number = 0;
  @Output() translate = new EventEmitter<number>();


  toEnglish(): void{
    this.english = 1;
    this.translate.emit(this.english);
  }

  toPortuguese(): void{
    this.english = 0;
    this.translate.emit(this.english);
  }

  ngOnInit(): void {

    const options = {};

    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav, options);

    const parallax = document.querySelectorAll('.parallax');
    M.Parallax.init(parallax, options);

    const floating = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(floating, options);

  }

}
