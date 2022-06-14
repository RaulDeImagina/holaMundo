import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit {

  @Input() nombre: string = "Anónimo";

  constructor() { }

  ngOnInit(): void {
    // instrucciones previas a la renderización del componente
    console.log("ngOnInit del componente Saludo");
  }

}
