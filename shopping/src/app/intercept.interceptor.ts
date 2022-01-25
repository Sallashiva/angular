import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsService } from './products.service';

@Injectable()
export class InterceptInterceptor implements HttpInterceptor {

  constructor(private autha: ProductsService) {}

  intercept(request: HttpRequest<unknown>, handler: HttpHandler): any{
    const modifiedRequest = request.clone({
      headers:request.headers.append(
        'authorization',
        `Bearer ${this.autha.getToken()}`
      )
    })
    return handler.handle(modifiedRequest);
  }
}
