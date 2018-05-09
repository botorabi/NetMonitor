import {Component, OnInit} from '@angular/core';
import {ApiService} from "../service/api.service";
import {Probe} from "../probe";


declare var google: any;


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  private probes: Array<Probe>;

  private graphOptions = {
    legend: 'none',
    height: 380,
    hAxis: {
      title: 'Time',
      format: 'M/d/yy',
      gridlines: {count: 15}
    },
    vAxis: {
      title: 'Frequency'
    },
    colors: ['#C7B42C'],
    animation: {
      startup: true,
      duration: 400,
      easing: 'out'
    },
    explorer: {actions: ['dragToZoom', 'rightClickToReset'], axis: 'horizontal'}
  };

  private elementId = 'chartElement';

  constructor(
    private apiService: ApiService
  ) {
  }

  ngOnInit() {
    let today = new Date();
    this.updateChart(today, today);
  }

  /**
   * Update the chart. The given dates are considered as whole days,
   * i.e. no hours and minutes are considered.
   */
  public updateChart(timeBegin: Date, timeEnd: Date) {
    /* round the dates to 0 o'clock */
    let begin = new Date(timeBegin.getTime());
    let end = new Date(timeEnd.getTime());
    begin.setHours(0, 0, 0);
    end.setHours(24, 0, 0);

    this.apiService.getProbesByTime(begin, end).subscribe({
      next: probes => {
        this.probes = probes;
      },
      complete: () => {
        this.setupChart();
      },
      error: err => {
        console.log("Error getting chart data: " + err);
      }
    });
  }

  private setupChart() {
    google.charts.load('current', {packages: ['corechart', 'line']});
    var drawFunction =  () => this.drawGraph(this.probes);
    google.charts.setOnLoadCallback(drawFunction);
  }

  private drawGraph(probes: Probe[]) {
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Time');
    data.addColumn('number', 'Frequency');

    let rows: any[] = [];
    let lastTimeStamp = 0;
    probes.forEach((value, index, array) => {
      if (value.timeStamp == lastTimeStamp)
        return;
      lastTimeStamp = value.timeStamp;

      let freq: number = 50.0 + (value.frequency / 32767.0);
      rows.push([new Date(lastTimeStamp * 1000), freq])
    });

    data.addRows(rows);

    var chart = new google.visualization.LineChart(document.getElementById(this.elementId));
    chart.draw(data, this.graphOptions);
  }

}
