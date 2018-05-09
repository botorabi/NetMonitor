import {Component, OnInit} from '@angular/core';
import {ApiService} from "../service/api.service";

@Component({
  selector: 'app-view-import',
  templateUrl: './view-import.component.html',
  styleUrls: ['./view-import.component.css']
})
export class ViewImportComponent implements OnInit {

  files: FileList;
  totalFiles: number;
  currentFile: number;
  timeBeginMSec: number;
  timeEndMSec: number;
  elapsedTime: string;
  errorText: string;

  constructor(
    private apiService: ApiService
  ) {
  }

  ngOnInit() {
    this.onClearImport();
  }

  public onSelectFiles(event) {
    this.files = event.target.files;
  }

  public onStartImporting() {
    if (this.files == null) {
      return;
    }

    this.totalFiles = this.files.length;
    this.currentFile = 0;
    this.timeBeginMSec = Date.now();

    for (var i = 0; i < this.files.length; ++i) {
      //console.log("sending file: " + this.files[i].name);
      this.apiService.importProbes(this.files[i]).subscribe({
        next: response => {
          this.currentFile++;
          if (this.currentFile == this.totalFiles) {
            this.timeEndMSec = Date.now();
            this.elapsedTime = this.setupElapsedTime(this.timeBeginMSec, this.timeEndMSec);
          }
        },
        error: err => {
          this.errorText = "An error occurred while importing data: " + JSON.stringify(err);
        }
      });
    }
  }

  onClearImport() {
    this.files = null;
    this.totalFiles = 0;
    this.currentFile = 0;
    this.timeBeginMSec = 0;
    this.timeEndMSec = 0;
    this.elapsedTime = "00:00:00";
    this.errorText = null;
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
