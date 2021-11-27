import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

/** 400 http response code is a bad request. */
const CODE_400 = 400;

/** This service extracts the error message from the response. */
@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private error$ = new Subject<string>();

  constructor() { }

  setErrorMsg(response: HttpErrorResponse) {
    if (response.error instanceof ErrorEvent) {
      this.error$.next(`Error: ${response.error.message}`);
    } else {
      if (response.status === CODE_400) {
        const [httpError, msg] = response.error.errorMessage.split(':');
        this.error$.next(msg.replace(/"/g, ''));
      } else {
        this.error$.next(response.error.errorMessage);
      }
    }
  }

  getErrorMessage() {
    return this.error$;
  }
}
