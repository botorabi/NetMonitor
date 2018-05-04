export class Probe {
  id: number;
  timeStamp: number = 0;
  frequency: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
