import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowIfAuthDirective } from './directives/show-if-auth.directive';



@NgModule({
  declarations: [
    ShowIfAuthDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [ShowIfAuthDirective]
})
export class ShowIfAuthModule { }
