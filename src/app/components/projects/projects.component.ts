import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [
  ]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const options = {};

    const slider = document.querySelectorAll('.slider');
    M.Slider.init(slider, options);
  }

}
