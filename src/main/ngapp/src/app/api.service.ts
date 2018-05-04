import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Probe} from "./probe";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public getProbes(): Observable<Array<Probe>> {
    return this.http.get<Array<Probe>>("/probes");
  }

  public getProbesByTime(beginTime: Date, endTime: Date): Observable<Array<Probe>> {
    let from = Math.floor(beginTime.getTime() / 1000);
    let to = Math.floor(endTime.getTime() / 1000);
    return this.http.get<Array<Probe>>("/probes/" + from + "/" + to);
  }

  public importProbes(file: File): Observable<Object>{

    //console.log("file size: " + file.size + ", content: " + file.toString());

    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    let observable = this.http.post("/probes/import", formData);
    observable.subscribe(
      r => { /*console.log('got r', r); */}
    );
    return observable;
  }
}
