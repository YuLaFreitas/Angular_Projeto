import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'calcular',
  templateUrl: './calculador.component.html',
  styleUrls: ['./calculador.component.css']
})
export class CalculadorComponent implements OnInit {

  @Input() valor= 0;

  @Output() mudouValor = new EventEmitter();
  
  subitrair(n: any){
      this.valor --;
      this.mudouValor.emit({
       novo: this.valor,
       mult: n
      })
  }

  somar(n: any){
      this.valor ++;
      this.mudouValor.emit({
        novo: this.valor,
        mult: n
       })
  }

  onMudouValor(evento: any){
    console.log(evento)

  }
 
  constructor() { }
  ngOnInit(): void {
  }

}
