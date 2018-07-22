import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {
  
  nome: string = "Oi";
  twoWayDataBinding: boolean = false;

  pessoa: any = {
    nome: "Nlaskdjflçasdj",
    idade: 12
  };

  constructor() { }

  ngOnInit() {
  }

}
