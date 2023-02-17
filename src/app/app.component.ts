import { News } from './Model/news.model';
import { Component, OnInit } from '@angular/core';

import { HttpService } from './services/http.service';
import { Observable } from 'rxjs';
import { onAuthStateChanged, user } from '@angular/fire/auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'FoodShop';
constructor(private HttpService: HttpService,){}
  ngOnInit(): void {
    // this.news$ = this.HttpService.get();

  }

news$ = new Observable<News[]>();



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
