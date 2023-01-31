import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurateurPageRoutingModule } from './configurateur-routing.module';

import { ConfigurateurPage } from './configurateur.page';
import { SharedModule } from '../modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurateurPageRoutingModule,
    SharedModule
  ],
  declarations: [ConfigurateurPage]
})
export class ConfigurateurPageModule {}
