import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRootComponent } from './admin-root/admin-root.component';
import { RouterModule } from '@angular/router';
import { EditProductsComponent } from './components/edit-products/edit-products.component';
import { EditCompaniesComponent } from './components/edit-companies/edit-companies.component';
import { MyPanelModule } from 'src/app/shared/my-panel/my-panel.module';



@NgModule({
  declarations: [
    AdminRootComponent,
    EditProductsComponent,
    EditCompaniesComponent
  ],
  imports: [
    CommonModule,
    MyPanelModule,
    RouterModule.forChild([
      {
        path: '', component: AdminRootComponent, children: [
          { path: 'edit-products', component: EditProductsComponent },
          { path: 'edit-companies', component: EditCompaniesComponent }
        ]
      }
    ])
  ]
})
export class AdminModule { }
