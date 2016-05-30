import {Component} from 'angular2/core';
import {AuthorsComponent} from './authors.component';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
                <authors></authors>
                <authors></authors>
                <authors></authors>
                `,
    directives: [AuthorsComponent]
})
export class AppComponent {
  title: string;

  constructor(){
    this.title = 'Kevyn Quiros';
  }

}
