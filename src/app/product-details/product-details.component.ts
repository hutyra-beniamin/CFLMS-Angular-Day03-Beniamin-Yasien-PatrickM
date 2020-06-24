import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { products } from '../products'
import { CartService } from '../cart.service';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {
  product;
  purchased: boolean = false;
  amount: number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  addToCart(product) {
    //window.alert('Your product has been added to the cart!');
    this.purchased = true;
    this.amount++;
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}
