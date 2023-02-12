import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FoodShop';

  food:Array<any> = [
    {
      id: 1,
      title: "Gà rán",
      photoURL:'../assets/garan.png',
      content: "Đây là một cái đùi gà rất giòn và ngon và rất rẻ.",
      price: "38.000đ",
      status: true,
    },
    {

      id: 2,
      title: "Gà rán phô mai",
      photoURL:'../assets/phomai.png',
      content: "Đây là một cái đuồi gà thêm lớp xốt phô mai.",
      price: "58.000đ",
      status: false
    },
    {
      id: 3,
      title: "Gà popcorn",
      photoURL:'../assets/popcorn.png',
      content: "Đây là một ly gà hình popcorn rất ngon và giá cả phải chăng.",
      price: "68.000đ",
      status: true
    },
    {
      id: 4,
      title: "Gà Nugget",
      photoURL:'../assets/nugget.png',
      content: "Đây là bộ 3 miếng gà hình tròn. Thường dành cho trẻ con ăn chơi.",
      price: "28.000đ",
      status: true,
    },
    {
      id: 5,
      title: "Gà nướng nguyên con",
      photoURL:'../assets/nuong.png',
      content: "Đây là một con gà nướng đặc biệt nướng bằng nước sốt gia truyền.",
      price: "599.000đ",
      status: false,
    },
    {
      id: 6,
      title: "Pizza hải sản",
      photoURL:'../assets/pizza.png',
      content: "Đây là một cái pizza hải sản được đầu bếp vjp pro thực hiện.",
      price: "179.000đ",
      status: true,
    },
    {
      id: 7,
      title: "Bánh mì",
      photoURL:'../assets/banhmi.png',
      content: "Đây là một ổ bánh mì được các pháp sư trung hoa chế biến.",
      price: "50.000đ",
      status: true,
    },
    {
      id: 8,
      title: "Xôi mặn",
      photoURL:'../assets/xoiman.png',
      content: "Đây là một hộp xôi mặn được các cô chú ngoài chợ chế biến.",
      price: "28.000đ",
      status: true,
    },
    {
      id: 9,
      title: "Cơm gà xối mỡ",
      photoURL:'../assets/comga.png',
      content: "Đây là một dĩa cơm gà xối mỡ được chế biến rất kung fu",
      price: "30.000đ",
      status: false,
    },
    {
      id: 10,
      title: "Cá viên chiên",
      photoURL:'../assets/cavien.png',
      content: "Đây là một hộp cá viên chiên được chiên trong dầu thực vật",
      price: "8.000đ",
      status: true,
    },
    {
      id: 11,
      title: "Xúc xích Đức",
      photoURL:'../assets/xucxich.png',
      content: "Đây là một cây xúc xích Đức rất bình thường được nướng trên lò",
      price: "88.000đ",
      status: false,
    },
  ]
itemCart :Array<any> = [];
addItem(food:any)
  {
    this.itemCart.push(food);
  }
showItems()
  {
    console.log(this.itemCart);
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
