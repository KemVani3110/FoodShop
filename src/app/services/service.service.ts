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
    for(let i=0; i< this.cart.length; i++){
      if(this.cart[i].food.id == food.id){
        this.cart[i].quantity +=1;
        console.log(this.cart);
        return;
      }
    }
    this.cart.push({
      food: food,
      quantity: 1
    }
      );
  }


}


