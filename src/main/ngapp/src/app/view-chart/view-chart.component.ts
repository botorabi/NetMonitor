import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ChartComponent} from "../chart/chart.component";

@Component({
  selector: 'app-view-chart',
  templateUrl: './view-chart.component.html',
  styleUrls: ['./view-chart.component.css']
})
export class ViewChartComponent implements OnInit {

  timeBegin = new FormControl(new Date(Date.now() - (30*24*60*60*1000)));
  timeEnd = new FormControl(new Date());

  constructor() {
  }

  ngOnInit() {
  }

  public onUpdateChart(chartComponent: ChartComponent) {

    chartComponent.updateChart(this.timeBegin.value, this.timeEnd.value);
  }
}
