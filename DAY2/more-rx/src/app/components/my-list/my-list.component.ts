import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyListComponent implements OnInit {

  maxPrice = 10;
  count = 1;
  products: Product[] = [];
  constructor() { }

  ngOnInit(): void {
    this.products.push({ id: 1, name: 'Bamba', price: 10.3 });
    this.products.push({ id: 2, name: 'Bisli', price: 19.3 });
    this.products.push({ id: 3, name: 'kefli', price: 10.3 });
    this.products.push({ id: 4, name: 'Doritos', price: 20.3 });
    this.products.push({ id: 5, name: 'Kinder', price: 17 });

    setInterval(() => {
      console.log('TIMER');
      this.count++;
    }, 1000);

  }

  addNew() {
    console.log('Add new');
    this.products = [...this.products, { id: 6, name: 'newPROD', price: 95 }];
    // this.products.push({ id: 6, name: 'newPROD', price: 95 });
  }

  updateProduct() {
    console.log('Update');
    this.products[0].price = 22;
  }

  isExp(item: Product) {
    console.log('IS EXP', item.price);
    return item.price > this.maxPrice;
  }

  changePrice() {
    this.maxPrice = 200;
  }

  doIt() {

  }
}
