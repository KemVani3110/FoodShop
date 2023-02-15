import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-itemcard-cart',
  templateUrl: './itemcard-cart.component.html',
  styleUrls: ['./itemcard-cart.component.scss']
})
export class ItemcardCartComponent {
  @Input() item: any;
  @Output() addFoodCallBack: EventEmitter <any>  = new EventEmitter();
  constructor(private CartService: ServiceService){

  }

  addFood(food: any){
    this.addFoodCallBack.emit(food);
  }

}
