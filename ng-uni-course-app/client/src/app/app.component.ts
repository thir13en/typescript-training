import { Component, OnInit } from '@angular/core';

import { CoursesService } from './services/courses.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'courses-app';

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.coursesService.getCourseDetail(1);
  }
}
