import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {StarComponent} from './star.component';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
                <courses></courses>
                <authors></authors>
                <star></star>
                `,
    directives: [CoursesComponent, AuthorsComponent, StarComponent]
})
export class AppComponent {
  title: string;

  constructor(){
    this.title = 'Angular 2 App';
  }

}
