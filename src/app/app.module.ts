import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { ClientesService } from './services/clientes.service';
import { HttpClientModule } from '@angular/common/http';

import { CadastroClientesComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ErrorInterceptorProvider } from './services/interceptor-error.service';
import { LoginComponent } from './login/login.component';
import { ServicoComponent } from './servico/servico.component';
import { ServicoService } from './services/servico.service';
import { LoginService } from './services/login.service';



@NgModule({
  declarations: [
    AppComponent,
    CadastroClientesComponent,
    LoginComponent,
    ServicoComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ClientesService,ErrorInterceptorProvider,ServicoService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }