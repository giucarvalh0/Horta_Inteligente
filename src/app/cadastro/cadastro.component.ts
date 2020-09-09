import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  navigationOptions(): void {
    // Criar função para que seja possível
    // ser redirecionado para a dashboard
    // do cliente ou do cuidador
  }

}
