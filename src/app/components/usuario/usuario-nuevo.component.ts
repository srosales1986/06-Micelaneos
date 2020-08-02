import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor( private activatedRouter: ActivatedRoute ) {

    this.activatedRouter.parent.params.subscribe( parametros => {
      console.log('Ruta Hija');
      
      console.log(parametros);
      
    } )
  }

  ngOnInit(): void {
  }

}
