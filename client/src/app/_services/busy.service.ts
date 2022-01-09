import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class BusyService {
  busyRequestCount = 0;
  constructor(private spinnerServic: NgxSpinnerService) {}
  busy() {
    this.busyRequestCount++;
    this.spinnerServic.show(undefined, {
      type: 'ball-clip-rotate',
      bdColor: 'rgba(255,255,255,0)',
      color: '#333333',
      size: 'medium',
    });
  }
  idle() {
    this.busyRequestCount--;
    if (this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.spinnerServic.hide();
    }
  }
}
