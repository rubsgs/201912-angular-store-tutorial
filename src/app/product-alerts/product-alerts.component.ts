import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  //Seletor HTML, nome da tag que será gerada
  selector: 'app-product-alerts',
  //Caminho/nome do arquivo que será view do componente
  templateUrl: './product-alerts.component.html',
  //Caminho/nome das folhas de estilo do componente
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  //O decorador @Input diz que a propriedade será passada pelo "pai" do componente
  @Input() product;
  //O decorador @Output por sua vez é utilizado para que a propriedade seja passada para o pai
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}