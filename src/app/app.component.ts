import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';
  variableinput = "";
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  //ejercicio 1
  edad1: number = 0;
  edad2: number = 0;
  promedio: number = 0;
  suma: number = 0;

  cambiarTitulo(tituloNuevo: string) {
    this.title = tituloNuevo;
  }

  sumar() {
    this.resultado = Number(this.numero1) + Number(this.numero2);
  }

  /*
    1- (app.component.html) Realizar:
  una aplicacion que se le ingresen dos edades en dos cuadro de textos
  edadUno, EdadDos
  mostrar el promedio y la suma en dos cuadros de textos nuevos
  botones "calcular" y "limpiar cuadros de textos"
   */

  sumarEdad() {
    this.suma = Number(this.edad1) + Number(this.edad2);
    this.promedio = (Number(this.edad1) + Number(this.edad2)) / 2;
    console.log(this.suma);
  }

  limpiar() {
    this.edad1 = 0;
    this.edad2 = 0;
    this.suma = 0;
    this.promedio = 0;
  }

  /*
2-( componentes nuevos) Realizar:
la clase usuario con nombre y clave ,
el componente "Bienvenido"
el componente "login"
el componente "error"
( dejar los componentes listos)
opcional: hacer ruteo
  */




}
