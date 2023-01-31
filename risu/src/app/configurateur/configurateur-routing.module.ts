import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigurateurPage } from './configurateur.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurateurPageRoutingModule {}
