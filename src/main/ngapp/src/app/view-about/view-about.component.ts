import {Component, OnInit} from '@angular/core';
import {AppInformationService} from "../service/app-information.service";

@Component({
  selector: 'app-view-about',
  templateUrl: './view-about.component.html',
  styleUrls: ['./view-about.component.css']
})
export class ViewAboutComponent implements OnInit {

  constructor(
    public appInfo: AppInformationService) {
  }

  ngOnInit() {
  }
}
