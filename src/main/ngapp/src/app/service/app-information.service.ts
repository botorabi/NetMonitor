import {Injectable} from '@angular/core';

@Injectable()
export class AppInformationService {

  name: string = "NetMonitor";
  version: string = "0.3.0";

  constructor() { }
}
