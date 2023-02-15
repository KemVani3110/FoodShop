import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  constructor(public cartService : ServiceService ){

  }
  cart : any;
  ngOnInit(): void {
    this.cart = this.cartService.getcart();
  }
  addFood(food: any)
  {
    this.cartService.addFood(food);
  }

}
