import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']//,
  //inputs: ["nomeCurso: nome"]
})
export class InputPropertyComponent implements OnInit {

  showCurso: boolean = true;

  //** Pode ser usado das três formas abaixo. */
  //@Input() nome: string = ""; //** ou
  @Input("nome") nomeCurso: string = ""; //** ou */
  //nomeCurso: string;

  constructor() { }

  ngOnInit() {
  }

}
