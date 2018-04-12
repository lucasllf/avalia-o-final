import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Logins } from '../domain.ts/login';

@Injectable()
export class LoginService {

  constructor(public http:HttpClient) { }

  insert(obj : Logins){
    return this.http.post(
      `https://7345ae0f-6b5f-435e-b200-ce66acca7085.mock.pstmn.io/usuarios`,
      obj,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }
}