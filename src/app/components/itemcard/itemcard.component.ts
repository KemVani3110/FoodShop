import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-itemcard',
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.scss']
})
export class ItemcardComponent {
  @Input() Food: any;

  // @Output()
  // Foodchange: any = new EventEmitter;


  // getLiked(foodname: any)
  // {
  //   this.Foodchange.emit(foodname);
  // }

  constructor(private CartService: ServiceService){

  }

  addFood(food: any){
    this.CartService.addFood(food);
  }
  getItemStaus(status: boolean) : string
  {
    if(status)
    {
      return 'Còn Hàng'

    }
    else{

      return 'Hết Hàng'
    }
  }
}
