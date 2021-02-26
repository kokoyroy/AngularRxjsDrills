import { Component, OnInit } from '@angular/core';
import { noop } from 'rxjs';
import { map } from 'rxjs/operators';
import { createHttpObservable } from '../common/util';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const http$ = createHttpObservable('/api/courses')
    
    
    
    const courses$ = http$.pipe(
      map(course =>Object.values(course['payload']))
    ) 


courses$.subscribe((params) => {
  console.log(params)
  
})

    http$.subscribe(
      data => console.log(data),
      noop,
      () => console.log('completed')
    )

  }

}