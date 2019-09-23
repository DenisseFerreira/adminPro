import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

ajustes: Ajustes = {
  temaUrl : 'assets/css/colors/default.css',
  tema:'default'
}


  constructor() { }

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
    }else{
      console.log('Usando valores por defecto');
    }

  }
}

//Defino lo siguiente para ser usado
interface Ajustes {
  temaUrl : string;
  tema : string;
}
