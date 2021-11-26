import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// Number of milliseconds after which hide signal is emitted, if no show signal is emitted in the interim.
const HIDE_THRESHOLD = 500;

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loading$ = new Subject<boolean>();

  private timeout?: number;

  show() {
    this.loading$.next(true);
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  hide() {
    setTimeout(() => {
      this.loading$.next(false);
    }, HIDE_THRESHOLD);
  }
}