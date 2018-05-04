import {Routes} from "@angular/router";
import {ViewChartComponent} from "./view-chart/view-chart.component";
import {ViewAboutComponent} from "./view-about/view-about.component";
import {ViewImportComponent} from "./view-import/view-import.component";

export const appRoutes: Routes = [
  { path: 'about', component: ViewAboutComponent },
  { path: 'import', component: ViewImportComponent },
  { path: '', component: ViewChartComponent }
];
