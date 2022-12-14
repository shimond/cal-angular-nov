import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPanelComponent } from './components/my-panel/my-panel.component';



@NgModule({
  declarations: [
    MyPanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MyPanelComponent]
})
export class MyPanelModule { }
