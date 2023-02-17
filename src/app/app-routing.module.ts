import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch:'full'},
{ path: 'cart',canActivate : [AuthGuard] , loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) },
{ path: 'home',canActivate : [AuthGuard], loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
