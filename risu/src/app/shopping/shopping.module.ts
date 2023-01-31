import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingPageRoutingModule } from './shopping-routing.module';

import { ShoppingPage } from './shopping.page';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SharedModule } from '../modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingPageRoutingModule,
    SharedModule
  ],
  declarations: [ShoppingPage]
})
export class ShoppingPageModule {}
