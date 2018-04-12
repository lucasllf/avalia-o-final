import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup : FormGroup;

  constructor(private formBuilder : FormBuilder, private loginsService : LoginService) {

  this.formGroup = this.formBuilder.group({
usuario : ['',[Validators.required,Validators.minLength(5),Validators.maxLength(120)]],
senha : ['',[Validators.required]],

  })

   }

  ngOnInit() {
  }

  cadastrar(){
      this.loginsService.insert(this.formGroup.value)
      .subscribe(response => {
        console.log("Logado com sucesso");
      }, error => {
        console.log("Erro ao Cadastrar");
      })
      console.log(this.formGroup.value);
    }
    
  }