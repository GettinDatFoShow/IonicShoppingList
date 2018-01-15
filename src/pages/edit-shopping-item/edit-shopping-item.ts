import { ToastService } from './../../services/toast/toast.service';
import { ShoppingListService } from './../../services/shopping-list/shopping-list.service';
import { Item } from './../../models/item/item.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {

  item: Item;

  constructor(private toast: ToastService, private navCtrl: NavController, private navParams: NavParams, private shopping: ShoppingListService) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  saveItem(item: Item) {
    this.shopping.editItem(item)
    .then(() => {
      this.toast.show(`${item.name} saved!`);
      this.navCtrl.setRoot('HomePage');
    })
  }

  deleteItem(item: Item) {
    this.shopping.removeItem(item)
    .then(() => {
      this.toast.show('Item deleted!');
      this.navCtrl.setRoot('HomePage');
    })
  }

}
