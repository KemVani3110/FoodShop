import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  cart = new Array();

  getcart(){
    return this.cart;
  }

  addFood(food: any)
  {
    this.cart.push({
      food: food,
      quantity: 1
    }
      );
  }


}


