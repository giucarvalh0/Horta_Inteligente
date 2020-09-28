import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DadosDaHortaComponent } from './dados-da-horta/dados-da-horta.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { LogDaHortaComponent } from './log-da-horta/log-da-horta.component';
import { ColheitaRetiradaComponent } from './colheita-retirada/colheita-retirada.component';
import { FotosComponent } from './fotos/fotos.component';
import { SairComponent } from './sair/sair.component';
import { DashboardClienteComponent } from './dashboard-cliente/dashboard-cliente.component';
import { DashboardCuidadorComponent } from './dashboard-cuidador/dashboard-cuidador.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroModule } from './cadastro/cadastro.module';
import { LoginComponent } from './login/login.component';
import { DisponibilizacaoComponent } from './disponibilizacao/disponibilizacao.component';
import { RetiradaComponent } from './retirada/retirada.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';

@NgModule({
  declarations: [
    AppComponent,
    DadosDaHortaComponent,
    ProdutosComponent,
    LogDaHortaComponent,
    ColheitaRetiradaComponent,
    FotosComponent,
    SairComponent,
    DashboardClienteComponent,
    DashboardCuidadorComponent,
    CadastroComponent,
    LoginComponent,
    DisponibilizacaoComponent,
    RetiradaComponent,
    RecuperarSenhaComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    CadastroModule,
    RouterModule.forRoot([]),
    MatSnackBarModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
