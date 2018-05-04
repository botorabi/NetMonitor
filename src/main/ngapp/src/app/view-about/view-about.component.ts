import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-view-about',
  templateUrl: './view-about.component.html',
  styleUrls: ['./view-about.component.css']
})
export class ViewAboutComponent implements OnInit {
  version: String = "";

  constructor(app: AppComponent) {
    this.version = app.version;
  }

  ngOnInit() {
  }
}
