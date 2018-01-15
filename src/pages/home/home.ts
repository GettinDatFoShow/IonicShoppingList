import { Item } from './../../models/item/item.model';
import { ShoppingListService } from './../../services/shopping-list/shopping-list.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { Observable } from 'rxjs/Observable';

@IonicPage({
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingList$: Observable<Item[]>;

  constructor(public navCtrl: NavController, private shopping: ShoppingListService) {
    this.shoppingList$ = this.shopping
      .getShoppingList() //  DB List
      .snapshotChanges() // key and value pairs, or access to these pairs 
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, 
            ...c.payload.val()
          }))
        }
      )
  }



}
