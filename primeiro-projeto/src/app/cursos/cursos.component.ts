import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  portalName: String;
  courses: String[];

  /** With dependency injection. */
  constructor(private cursosService: CursosService) { 
    this.portalName = "https://www.linkedin.com/in/romulo-teixeira";
    
    //** Without dependency injection.
    //var cursosService = new CursosService();

    this.courses = cursosService.getCursos();
  }

  ngOnInit() {
  }

}
