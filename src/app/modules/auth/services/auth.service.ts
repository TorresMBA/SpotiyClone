import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public sendCredentials(email:string, passwrod:string): void{
    console.log('email | passwod ->', email, passwrod);
  }
}
