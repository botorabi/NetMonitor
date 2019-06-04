import {Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Probe} from "../probe";
import {HttpClient} from "@angular/common/http";
import {DOCUMENT} from "@angular/common";


@Injectable()
export class ApiService {

  readonly location;
  readonly port = 8080;

  constructor(private http: HttpClient,
              @Inject(DOCUMENT) private document) {
    this.location = document.location.protocol + '//' + this.document.location.hostname + ':' + this.port;
  }

  public getProbes(): Observable<Array<Probe>> {
    return this.http.get<Array<Probe>>(this.location + '/probes');
  }

  public getProbesByTime(beginTime: Date, endTime: Date): Observable<Array<Probe>> {
    let from = Math.floor(beginTime.getTime() / 1000);
    let to = Math.floor(endTime.getTime() / 1000);
    return this.http.get<Array<Probe>>(this.location  + '/probes/' + from + '/' + to);
  }

  public importProbes(file: File): Observable<Object> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(this.location + '/probes/import', formData);
  }
}
