import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, withLatestFrom } from 'rxjs';
import { Product } from 'src/app/model/product.model';

@Injectable()
export class DashboardProductsStateService {

  private allProductsSubject$ = new BehaviorSubject<Product[]>([])
  readonly allProducts$ = this.allProductsSubject$.asObservable();

  private selectedProdctIdSubjetct$ = new BehaviorSubject<number>(-1)
  readonly selectedProducts$ = combineLatest([this.selectedProdctIdSubjetct$, this.allProducts$]).pipe(
    map(([selectedId, products]) => products.find(o => o.id === selectedId)));

  constructor() { }

  loadAll() {
    const products: Product[] = [];
    products.push({ id: 1, name: 'Bamba', price: 12.8 });
    products.push({ id: 2, name: 'Bambalic', price: 8 });
    products.push({ id: 3, name: 'Bisli', price: 1 });
    products.push({ id: 4, name: 'Kinder egg', price: 8.1 });
    products.push({ id: 5, name: 'Doritos', price: 6.3 });
    products.push({ id: 6, name: 'Bazuka', price: 0.5 });
    // this.productApi.getAllProducts().subscribe(x => this.allProductsSubject$.next(x) )
    this.allProductsSubject$.next(products);
  }


  setSelectdProduct(id: number) {
    this.selectedProdctIdSubjetct$.next(id);
  }

}
