import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PresistaneService } from "./presistane.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  constructor(private presistaneService: PresistaneService){}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.presistaneService.get('accessToken')
    const req = request.clone({
      setHeaders: {
        authorization: token ? `Token ${token}`: ''
      }
    })
    return next.handle(req)
  } 
}