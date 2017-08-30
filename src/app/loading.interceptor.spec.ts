import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpRequest, HttpHandler  } from '@angular/common/http';

import { LoadingInterceptor } from './loading.interceptor';

describe('LoadingInterceptor', () => {
  let service: LoadingInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpTestingController, LoadingInterceptor],
    });

    service = TestBed.get(LoadingInterceptor);
  });

  it('should set `reportProgress` option to `true`', () => {
    const req = new HttpRequest('GET', 'http://cironun.es');
    const handler = { handle: jasmine.createSpy('handler#handle') };

    const loadingReq = service.intercept(req, handler);

    expect(req.reportProgress).toBe(false);
    expect(handler.handle.calls.mostRecent().args[0].reportProgress).toBe(true);
  });
});
