import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'cadastro', component: CadastroComponent}
    ])
  ]
})
export class CadastroModule { }
