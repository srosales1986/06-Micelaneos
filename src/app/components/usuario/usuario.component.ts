import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  constructor( private activatedRouter: ActivatedRoute ) {

    this.activatedRouter.params.subscribe( parametros => {
      console.log('Ruta Padre');
      
      console.log(parametros);
      
    } )
  }

  ngOnInit(): void {
  }

}
