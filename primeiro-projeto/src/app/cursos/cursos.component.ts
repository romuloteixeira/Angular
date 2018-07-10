import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  portalName: String;
  courses: String[] = ['Java', 'C#', 'Ext JS', 'Angular'];

  constructor() { 
    this.portalName = "https://www.linkedin.com/in/romulo-teixeira";
  }

  ngOnInit() {
  }

}
