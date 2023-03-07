import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [
  ]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  @Input() english: number = 0;

  ngOnInit(): void {

    const options = {};

    const slider = document.querySelectorAll('.slider');
    M.Slider.init(slider, options);
  }

}
