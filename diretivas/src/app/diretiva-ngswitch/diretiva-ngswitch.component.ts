import { Component, OnInit } from '@angular/core';
import { StateKey } from '../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-diretiva-ngswitch',
  templateUrl: './diretiva-ngswitch.component.html',
  styleUrls: ['./diretiva-ngswitch.component.scss']
})
export class DiretivaNgswitchComponent implements OnInit {

  viewMode: string = "mapa";
  aba: string = "home";

  constructor() { }

  ngOnInit() {
    switch(this.viewMode){
      case 'mapa':
        //** Do something */
        break;
      case 'lista':
        //** Do another thing */
        break;
      default:
        break;
    }
  }

}
