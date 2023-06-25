import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const apiKey = environment.api;
    const modifiedReq = request.clone({
      headers: request.headers.set(
        'x-api-key',
        apiKey
      ),
    });

    return next.handle(modifiedReq).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(() => {
          return errorMessage;
        });
      })
    )
  };
}

