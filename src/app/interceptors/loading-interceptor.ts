import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';
import { finalize } from 'rxjs/operators';

/** A HTTP interceptor for showing/hiding a loading indicator. */
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];

  constructor(private loaderService: LoadingService) { }

  intercept(req: HttpRequest<{}>, next: HttpHandler): Observable<HttpEvent<{}>> {

    this.loaderService.show();
    return next.handle(req).pipe(finalize(() => {
      this.loaderService.hide();
    }));
  }
}