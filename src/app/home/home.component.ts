import { Component, OnInit } from '@angular/core';
import { Course } from "../model/course";
import { interval, Observable, of, timer } from 'rxjs';
import { catchError, delayWhen, map, retryWhen, shareReplay, tap } from 'rxjs/operators';
import { createHttpObservable } from '../common/util';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    // beginnersCourses: Course[]
    // advancedCourses: Course[]

    beginnersCourses$: Observable<Course[]>
    advancedCourses$: Observable<Course[]>

    constructor() {

    }

    ngOnInit() {
        //*****************imperative way
        // const http$ = createHttpObservable('/api/courses')

        // const courses$ = http$.pipe(
        //     // map(course => Object.values(course['payload']))
        //     map(course => [...course['payload']])
        // )


        // courses$.subscribe(coursesArray => {
        //     // console.log(coursesArray)
        //     this.beginnersCourses = coursesArray.filter(el => el.category === "BEGINNER")
        //     this.advancedCourses = coursesArray.filter(el => el.category === "ADVANCED")
        // })
        //**************reactive way */
        const http$ = createHttpObservable('/api/courses');

        this.beginnersCourses$ = http$.pipe(
            map((coutsesArray: Course[]) => [...coutsesArray["payload"]]
                .filter(course => course.category === "BEGINNER")
            )
        )
        this.advancedCourses$ = http$.pipe(
            map((coursesArray: Course[]) => [...coursesArray["payload"]]
                .filter(course => course.category === "ADVANCED"))
        )


    }

}
