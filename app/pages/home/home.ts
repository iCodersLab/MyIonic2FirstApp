import {Component} from "@angular/core";
import {NavController, Toast} from 'ionic-angular';
import {DetailPage} from '../detail/detail';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  listdata:Array<string>;

  constructor(private navController: NavController) {
    this.listdata= ["Row 1","Row 2", "Row 3","Row 4","Row 5","Row 6"];
    this.showToast()
  }
  showToast() {
    let toast = Toast.create({
      message: 'Welcome iCodersLab!!!',
      duration: 3000
    });
    this.navController.present(toast);
  }
  itemSelected(item){
      this.navController.push(DetailPage, {SELECTED_ITEM: item});
  }

}
