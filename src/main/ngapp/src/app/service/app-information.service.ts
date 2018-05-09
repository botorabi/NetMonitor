import {Injectable} from '@angular/core';

@Injectable()
export class AppInformationService {

  name: string = "NetMonitor";
  version: string = "0.2.1";

  constructor() { }
}
