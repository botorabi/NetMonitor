import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ApiService} from './api.service';
import {HttpClientModule} from "@angular/common/http";
import {ChartComponent} from './chart/chart.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material.module";
import {ViewChartComponent} from "./view-chart/view-chart.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./appRoutes";
import {ViewAboutComponent} from "./view-about/view-about.component";
import {FormsModule} from "@angular/forms";
import {ViewImportComponent} from "./view-import/view-import.component";


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ViewChartComponent,
    ViewAboutComponent,
    ViewImportComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
