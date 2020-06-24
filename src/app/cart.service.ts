import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  
    constructor() { }

    addToCart(product) {
      this.items.push(product);
    }
   
    getItems() {
      return this.items;
    }
   
    clearCart() {
      this.items = [];
      return this.items;
    }

    calculatePrice(){
      let calcPrice: number = 0;
      for(let item of this.items){
        calcPrice += item.price;
      }
      return calcPrice.toFixed(2);
    }

    deleteItem(i) {
      this.items.splice(i, 1)
    }
}
