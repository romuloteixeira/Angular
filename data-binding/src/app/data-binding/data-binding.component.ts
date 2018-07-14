import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "https://www.linkedin.com/in/romulo-teixeira";
  urlImagem: string = "http://lorempixel.com/400/200/nature/";
  cursoAngular: boolean = true;
  showPropertyBinding: boolean = false;

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

}
