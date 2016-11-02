import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/detail/detail.html',
})
export class DetailPage {
  currentItem: string;
  constructor(private nav: NavController, private navParams: NavParams) {
    this.currentItem= navParams.get('SELECTED_ITEM');
  }
}
