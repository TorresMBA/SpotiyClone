import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient, private _cookieService: CookieService) { }

  public sendCredentials(email:string, password:string): Observable<any>{
    const body={
      email,
      password
    };
    return this.http.post(`${this.URL}/auth/login`, body)
    .pipe(
      tap((response: any) => {
        const {tokenSession, data} = response;
        this._cookieService.set('token_service', tokenSession, 4, '/');
      })
    );
  }

  public suma(a:number, b:number): Number{
    return a + b;
  }
}
