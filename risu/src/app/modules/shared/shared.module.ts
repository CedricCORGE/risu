import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/header/header.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { ShoppingInfoComponent } from 'src/app/shopping-info/shopping-info.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, ShoppingInfoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent, FooterComponent, ShoppingInfoComponent
  ]
})
export class SharedModule { }
