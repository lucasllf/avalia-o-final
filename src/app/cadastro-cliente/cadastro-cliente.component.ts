import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ClientesService } from '../services/clientes.service';
@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClientesComponent implements OnInit {
// importar o ReactiveFormsModule
  formGroup : FormGroup;

  constructor(private formBuilder : FormBuilder, private clientesService : ClientesService) {

  this.formGroup = this.formBuilder.group({
nome : ['',[Validators.required,Validators.minLength(5),Validators.maxLength(120)]],
endereco : [''],
telefone : ['',[Validators.required]],
dataNascimento : [''],
email: ['',[Validators.required,Validators.email]],
senha : [''],

  })

   }

  ngOnInit() {
  }

    cadastrar(){
      this.clientesService.insert(this.formGroup.value)
      .subscribe(response => {
        console.log("Cadastrado com sucesso");
      }, error => {
        console.log("Erro ao Cadastrar");
      })
      console.log(this.formGroup.value);
    }
    
  }