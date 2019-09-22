import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { 


  }

  loadCourses(): Observable<Course[]>{
    const params = new HttpParams()
    .set("page", "1")
    .set("pageSize", "10");


    return this.http.get<Course[]>('/api/courses', {params});

  }

  saveCourse(course:Course){

    //authenication header to identify the user so the server can know if the operation is allowed or not
    const headers = new HttpHeaders().set("X-AUTH", "userId");

  return  this.http.put(`/api/courses/${course.id}`, course
  , {headers});
  }

}
