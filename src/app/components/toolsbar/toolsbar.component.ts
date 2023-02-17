import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { onAuthStateChanged } from '@angular/fire/auth';

@Component({
  selector: 'app-toolsbar',
  templateUrl: './toolsbar.component.html',
  styleUrls: ['./toolsbar.component.scss']
})
export class ToolsbarComponent implements OnInit {
  constructor(public AuthService: AuthService){}

  user: any
  ngOnInit(): void {
    // onAuthStateChanged(this.AuthService.auth,(user)=>{
    //   if(user != null)
    //   {
    //     this.user = user;
    //   }else
    //   {
    //      this.user = null;
    //   }
    // })
  }
  show()
  {
    this.user = this.AuthService.people;
  }
  login()
  {
    this.AuthService.loginWithGoogle().then((res)=>{
      console.log(res);
    });
  }

   async logout()
  {
    await this.AuthService.logout();
  }
}
