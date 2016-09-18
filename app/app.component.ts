/**
 * Created by lidong on 16/9/18.
 */
import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <my-heroes></my-heroes>
  `
})
export class AppComponent {
    title = 'Tour of Heroes';
}
