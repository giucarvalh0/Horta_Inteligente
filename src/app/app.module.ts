import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DadosDaHortaComponent } from './dados-da-horta/dados-da-horta.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { LogDaHortaComponent } from './log-da-horta/log-da-horta.component';
import { ColheitaRetiradaComponent } from './colheita-retirada/colheita-retirada.component';
import { FotosComponent } from './fotos/fotos.component';
import { SairComponent } from './sair/sair.component';

@NgModule({
  declarations: [
    AppComponent,
    DadosDaHortaComponent,
    ProdutosComponent,
    LogDaHortaComponent,
    ColheitaRetiradaComponent,
    FotosComponent,
    SairComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
