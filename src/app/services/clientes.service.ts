import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clientes } from '../domain.ts/cliente';

@Injectable()
export class ClientesService {

  constructor(public http:HttpClient) { }

  insert(obj : Clientes){
    return this.http.post(
      `https://7345ae0f-6b5f-435e-b200-ce66acca7085.mock.pstmn.io/clientes`,
      obj,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }
}