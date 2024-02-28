import { Component, NgModule } from '@angular/core';

import {Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  selectedFilter: string = 'None';
  productss: Product[] = products;
  filteredItems = [...products];


  share(url: string) {
    var sharelink = "https://t.me/share/url?url=" + url + "&text=Let me buy this! ";
    window.open(sharelink);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  setFilteredItem(event: Event) {
    this.selectedFilter = (event.target as HTMLSelectElement).value;
    this.filterByCategory();
  }

  filterByCategory() {
    if (this.selectedFilter === 'No filter') {
      this.filteredItems = this.productss;
    } else {
      this.filteredItems = this.productss.filter((p: Product) => p.category === this.selectedFilter);
    }
  }
  incrementLikes(productId: number) {
    const productIndex = this.productss.findIndex((product: { id: number; }) => product.id === productId);
    if (productIndex !== -1) {
      this.productss[productIndex].likes++;
    }
  }
  incrementDislikes(productId: number) {
    const productIndex = this.productss.findIndex((product: { id: number; }) => product.id === productId);
    if (productIndex !== -1) {
      this.productss[productIndex].dislikes++;
    }
  }
  delete(id : number) {
    this.productss = this.productss.filter(p => p.id !== id);
    this.filterByCategory();
  }


}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/