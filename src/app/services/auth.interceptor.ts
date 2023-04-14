import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable()
export class AuthInterptor implements HttpInterceptor {

  private totalRequests: number = 0;
  constructor(private loadingServ: LoadingService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.totalRequests++;
    this.loadingServ.show();
    return next.handle(request)
      .pipe(
        tap(() => {
          this.totalRequests--;
          if (this.totalRequests < 1) {
            this.loadingServ.hide();

          }
        })
      )
  }
}
