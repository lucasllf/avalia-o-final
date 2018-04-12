import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../services/servico.service';
import { Servico } from '../domain.ts/servico';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {

  servicos : Servico[]; 

  constructor(private servicoService : ServicoService) {
this.getServicos();
   }

  ngOnInit() {
  }

  getServicos(){
    this.servicoService.getServicos()
      .subscribe(response => {
        // Recebe JSON
        this.servicos = response;
        console.log(this.servicos);
      })



  }

}
