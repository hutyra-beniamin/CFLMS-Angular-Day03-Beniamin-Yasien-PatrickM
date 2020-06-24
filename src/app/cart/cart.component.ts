import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  fullPrice;
   
  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.fullPrice = this.cartService.calculatePrice();
  }


  onDeleteButton(index){
    this.cartService.deleteItem(index)
    this.fullPrice = this.cartService.calculatePrice();
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
 
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}


