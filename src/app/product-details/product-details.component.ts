import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  //Passar variáveis como parâmetros no construtor é chamado de injeçã(inject)
  //Serviços são usados para compartilhar dados entre diferenes componentes
  constructor(private route: ActivatedRoute, private cartService : CartService) { }

  ngOnInit() {
    //productId vem da URL, o nome foi definido na rota em app.module.ts
    this.route.paramMap.subscribe(params => {this.product = products[+params.get('productId')]})
  }

  addToCart(product){
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!");
  }

}