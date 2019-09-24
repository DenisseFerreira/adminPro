import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

ajustes: Ajustes = {
  temaUrl : 'assets/css/colors/default.css',
  tema:'default'
}


  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
   }

  //Para mantener la persistencia de los datos
  guardarAjustes(){
    //Convirtiendo el objeto en un json string 
    console.log('Guardado en el localStorage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes)  )
  }

  cargarAjustes(){
    if(localStorage.getItem('ajustes')) {
      //Pasando del string(json) al objeto js
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
    console.log('Cargando del localStorage')

    this.aplicarTema(this.ajustes.tema);
    }else{
      console.log('Usando valores por defecto');
      this.aplicarTema(this.ajustes.tema);
    }

  }


aplicarTema( tema:string ){
   /* Debo declarar una variable que contenga el path de lo que 
 necesito en el css (lo contiene el index.html), asi de esta forma puedo 
 acceder a el y modificarlo.
 Para ello uso `` para template literal  */   
 let url = `assets/css/colors/${ tema }.css`;
 // this._document.getElementById('tema').setAttribute('href', tema + '.css');
 this._document.getElementById('tema').setAttribute('href', url);

 this.ajustes.tema=tema;
 this.ajustes.temaUrl =url;

 this.guardarAjustes();
}

}

//Defino lo siguiente para ser usado
interface Ajustes {
  temaUrl : string;
  tema : string;
}
