import { Component, Input } from '@angular/core';
import CourseDetail from '../../../../shared/interfaces/course-detail';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent {
  @Input() courseDetail!: CourseDetail;
}
