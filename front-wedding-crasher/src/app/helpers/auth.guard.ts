
import { HTTP_INTERCEPTORS} from '@angular/common/http';import { Observable } from 'rxjs';
import { RestapiService } from '../restapi.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { TokenStorageService } from '../token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization'; // for spring boot back-end


@Injectable()

export class AuthGuard implements HttpInterceptor {

    constructor(private token: TokenStorageService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;
        const token = this.token.getToken();
        if (token != null) {
          // for Spring Boot back-end
          authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }
    return next.handle(authReq)
}
        
        // if(){
        //     this.router.navigate(['/login']);
        //     return true;
        // } else {
        //     this.router.navigate(['/login'])
        // }
    
}
export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthGuard, multi: true }
  ];