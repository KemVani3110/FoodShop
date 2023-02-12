import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FoodShop';

  food = [
    {
      title: "Gà rán",
      photoURL:'../assets/chicken.png',
      content: "Đây là một cái đuồi gà",
    },
    {
      title: "Gà rán",
      photoURL:'../assets/chicken.png',
      content: "Đây là một cái đuồi gà",
    },
    {
      title: "Gà rán",
      photoURL:'../assets/chicken.png',
      content: "Đây là một cái đuồi gà",
    }

  ]


}
