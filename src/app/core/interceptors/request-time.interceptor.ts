import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router, DefaultUrlSerializer } from '@angular/router';

@Injectable()
export class RequestTimeInterceptor implements HttpInterceptor {
    constructor(private router: Router) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // request interceptor
        let clonedRequest;
        if (req.url.includes('product')) {
            clonedRequest = req.clone({
                params: new HttpParams()
                    .set('ts_interceptor', Date.now().toString())
            });
        } else {
            clonedRequest = req;
        }

        return next.handle(clonedRequest)
            .pipe(
                // response interceptor
                map((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        // do stuff with response
                        if (event.url.includes('product') && event.url.includes('ts_interceptor')) {
                            var requestTime = parseInt(event.url.split('ts_interceptor=')[1]);
                            var responseTime = Date.now();
                            console.log(`Request: ${event.url} lasted for ${(responseTime - requestTime) / 1000} seconds`);
                        }
                    }
                    return event;
                })
            );

    }
}
