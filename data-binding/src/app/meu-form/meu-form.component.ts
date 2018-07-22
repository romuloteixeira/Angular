import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {
  
  nome: string = "";
  twoWayDataBinding: boolean = false;

  pessoa: any = {
    nome: "",
    idade: 0
  };

  constructor() { }

  ngOnInit() {
  }

}
