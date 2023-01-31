import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configurateur',
  templateUrl: './configurateur.page.html',
  styleUrls: ['./configurateur.page.scss'],
})
export class ConfigurateurPage implements OnInit {

  kit_open = false;

  constructor() { }

  ngOnInit() {
  }

  openKit() {
    this.kit_open = !this.kit_open;
  }
}
