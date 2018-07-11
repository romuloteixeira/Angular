import { Injectable } from '@angular/core';

//** Injectable diz que posso usufruir da injeção de dependência.
//** Injectable say that I can use of dependency injection.
@Injectable({ 
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(){
    return ['Java', 'C#', 'Ext JS', 'Angular'];
  }
}
