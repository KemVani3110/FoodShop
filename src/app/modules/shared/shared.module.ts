import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { ItemcardComponent } from '../../components/itemcard/itemcard.component';
import { ItemcardCartComponent } from '../../components/itemcard-cart/itemcard-cart.component';

@NgModule({
  declarations: [ItemcardComponent, ItemcardCartComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,


  ],
  exports: [  CommonModule,
    ItemcardComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    ItemcardCartComponent


   ]
})
export class SharedModule { }
