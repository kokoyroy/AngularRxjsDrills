import { DOCUMENT } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, Observable, Observer } from 'rxjs';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {




    const http$ = new Observable(observer => {
      fetch('/api/courses')
        .then(res => res.json())
        .then(data => {
          observer.next(data)
          observer.complete()
        })
        .catch(err => observer.error(err))
    })
  }





}
