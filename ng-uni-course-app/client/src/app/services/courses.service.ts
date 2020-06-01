import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import CourseDetail from '../../../../shared/interfaces/course-detail';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCourseDetail(courseId: number): Observable<CourseDetail> {
    return this.http.get<CourseDetail>(`/api/courses/${courseId}`);
  }
}
