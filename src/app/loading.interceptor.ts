import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

export class LoadingInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const loadingReq = req.clone({
      reportProgress: true
    });

    return next.handle(loadingReq);
  }


}
