import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, map, startWith } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { DashboardProductsStateService } from 'src/app/services/services/dashboard-products-state.service';

@Component({
  selector: 'app-products-root',
  templateUrl: './products-root.component.html',
  styleUrls: ['./products-root.component.scss'],
  providers: [DashboardProductsStateService]
})
export class ProductsRootComponent implements OnInit {
  allProducts$ = this.dashboardProductsStateService.allProducts$;
  selectedProduct$ = this.dashboardProductsStateService.selectedProducts$;
  searchFormControl = new FormControl<string>('');
  filterProducts$ = combineLatest([
    this.searchFormControl.valueChanges.pipe(startWith('')),
    this.allProducts$]).pipe(
      map(([txt, items]) => items.filter(x => x.name.includes(txt!)))
    )
  constructor(private dashboardProductsStateService: DashboardProductsStateService) { }

  ngOnInit(): void {
    this.dashboardProductsStateService.loadAll();
  }

  setSelectedItem(item: Product) {
    this.dashboardProductsStateService.setSelectdProduct(item.id);
  }

}
