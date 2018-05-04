import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-view-import',
  templateUrl: './view-import.component.html',
  styleUrls: ['./view-import.component.css']
})
export class ViewImportComponent implements OnInit {

  files: FileList;
  totalFiles: number = 0;
  currentFile: number = 0;
  timeBeginMSec: number = 0;
  timeEndMSec: number = 0;
  elapsedTime: string = "00:00:00";

  constructor(
    private apiService: ApiService
  ) {
  }

  ngOnInit() {
  }

  public onSelectFiles(event) {
    this.files = event.target.files;
  }

  public onStartImporting() {
    this.totalFiles = this.files.length;
    this.currentFile = 0;
    this.timeBeginMSec = Date.now();

    for (var i = 0; i < this.files.length; ++i) {
      //console.log("sending file: " + this.files[i].name);
      this.apiService.importProbes(this.files[i]).subscribe(
        response => {
          this.currentFile++;
          if (this.currentFile == this.totalFiles) {
            this.timeEndMSec = Date.now();
            this.elapsedTime = this.setupElapsedTime(this.timeBeginMSec, this.timeEndMSec);
          }
        }
      );
    }
  }

  private setupElapsedTime(timeBegin: number, timeEnd: number): string {
    let tdiff = (timeEnd - timeBegin) / 1000;
    let hours = Math.floor(tdiff / 3600);
    let minutes = Math.floor((tdiff - (hours * 3600)) / 60);
    let seconds = Math.floor(tdiff) % 60;
    return "" + this.formatTimeDigits(hours) + ":" + this.formatTimeDigits(minutes) + ":" + this.formatTimeDigits(seconds);
  }

  private formatTimeDigits(value: number) {
    return "" + ((value < 9) ? ("0" + value) : value);
  }
}
