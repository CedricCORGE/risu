import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/header/header.component';
import { FooterComponent } from 'src/app/footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent, FooterComponent
  ]
})
export class SharedModule { }
