import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedfeature = "receipee";
  onNavigatee(feature:string) {
    this.loadedfeature= feature;
  }
}
