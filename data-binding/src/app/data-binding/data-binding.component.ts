import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css'],
  styles:[
    `
      .highlight{
          background-color: red;
          font-weight: bold; 
      }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url: string = "https://www.linkedin.com/in/romulo-teixeira";
  urlImagem: string = "http://lorempixel.com/400/200/nature/";
  cursoAngular: boolean = true;
  showPropertyBinding: boolean = false;
  showClasseStyle: boolean = false;
  showInterpolation: boolean = false;
  valorAtual: string;
  valorSalvo: string;
  isMouseOver: boolean = false;
  nome: string = "Oi";

  pessoa: any = {
    nome: "Nlaskdjflçasdj",
    idade: 40
  }

  constructor() { }

  ngOnInit() {
  }

  getValor(){
    return 1;
  }

  getConectarPerfil(){
    return true;
  }

  getChangeShowPropertyBinding(){
    this.showPropertyBinding = !this.showPropertyBinding;
    return this.showPropertyBinding;
  }

  botaoClicado(){
    alert("Botão clicado");
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
}
