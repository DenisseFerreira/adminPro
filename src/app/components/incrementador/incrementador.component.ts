import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', {static: false}) txtProgress : ElementRef;


  /* El@Input() es un decorador que me permite recibir desde afuera
  los valores de leyenda y progreso
   Desde el componente progress(que es el padre) puedo entregar estos valores
   a traves del app-incrementador 
   (<app-incrementador leyenda = "Progress azul"></app-incrementador>)
  */
  @Input('nombre') leyenda : string = 'leyenda';
  @Input() progreso: number = 50;

  //Para emitir un numero como un evento
  @Output() cambioValor : EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda constructor', this.leyenda);
    // console.log('Este es mi progreso', this.progreso);
    
   }

  ngOnInit() {
    // console.log('Leyenda ngOnInit', this.leyenda);
    // console.log('Este es mi progreso 2', this.progreso);
  }

onChanges ( newValue:number){
  console.log('el onChange', newValue);

  //let elemHTML : any = document.getElementsByName('progreso')[0];

  console.log('intentando sacar el view',this.txtProgress);

  if(newValue >=100){
    this.progreso = 100;

  }else if(newValue <= 0){
    this.progreso =0;
  }else{
  this.progreso = newValue;
  }

  //elemHTML.value = this.progreso;
  this.txtProgress.nativeElement.value = this.progreso;

  this.cambioValor.emit(this.progreso);
}


  cambiarValor(valor:number){
    if(this.progreso >= 100 && valor >0){
      this.progreso = 100;
      return;
    }
    if(this.progreso <= 0 && valor < 0){
      this.progreso = 0;
      return;
    }

      this.progreso = this.progreso + valor;

      this.cambioValor.emit(this.progreso);
  }
  }
