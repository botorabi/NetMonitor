import {Component, NgModule} from '@angular/core';
import {ApiService} from "./service/api.service";
import {Probe} from "./probe";
import {MatCard} from "@angular/material";
import {AppInformationService} from "./service/app-information.service";

@NgModule({
  imports: [MatCard]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  countProbes = 0;
  probes: Array<Probe>;

  constructor(
    apiService: ApiService,
    public appInfo: AppInformationService) {

    apiService.getProbes().subscribe({
      next: (p) => {
        this.probes = p;
      },
      complete: () => {
        this.countProbes = this.probes.length;
      },
      error: (err) => {
        console.log("Error getting probes: " + err);
      }
    });
  }
}
