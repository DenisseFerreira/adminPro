import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styleUrls: []
})
export class AccoutSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document,
              public _ajustes: SettingsService) { }

  ngOnInit() {
  }

  cambiarColor(tema:string, link : any){
    console.log('El tema es', tema);
    console.log('El link es', link);

    this.aplicarCheck( link );


 /* Debo declarar una variable que contenga el path de lo que 
 necesito en el css (lo contiene el index.html), asi de esta forma puedo 
 acceder a el y modificarlo.
 Para ello uso `` para template literal  */   
    let url = `assets/css/colors/${ tema }.css`;
    // this._document.getElementById('tema').setAttribute('href', tema + '.css');
    this._document.getElementById('tema').setAttribute('href', url);
  }

  aplicarCheck( link : any ){

    //Usando propiedades de js
     let selectores : any = document.getElementsByClassName('selector');
  
     for ( let ref of selectores){
       ref.classList.remove('working');
     }
     link.classList.add('working');
  }

}
