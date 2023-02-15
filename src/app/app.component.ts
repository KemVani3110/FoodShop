import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FoodShop';



itemCart :Array<any> = [];
addItem(food:any)
  {
    this.itemCart.push(food);
  }
showItems()
  {
    console.log(this.itemCart);
  }

  // getItemStaus(status: boolean) : string
  // {
  //   if(status)
  //   {
  //     return 'Còn Hàng'

  //   }
  //   else{
  //     return 'Hết Hàng'
  //   }
  // }

}
