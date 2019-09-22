import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable, observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  courses$ : Observable<Course[]>;



  constructor( private courseService: CoursesService) {

  }
// life cycle hook  and triggering and http backend call is 
// best used inside ngOnInit() this method is called by the Angular framework itself
//this method is called after the constructor
  ngOnInit() {


    // set method changes the parameters that are being passed and this shows up on the query string
    


    this.courses$ = this.courseService.loadCourses();


    // ------Manually fetch/get observable data-----------//
    // this.http.get('/api/courses', {params})
    // .subscribe(
    //     courses => this.courses = courses
    // );

  }


  save(course:Course){
    this.courseService.saveCourse(course).subscribe(
      () => console.log('course save!')
    );
  }

}
