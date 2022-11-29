import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyListComponent } from './components/my-list/my-list.component';
import { IsExpPipe } from './pipes/is-exp.pipe';
import { BadPracticePipe } from './pipes/bad-practice.pipe';
import { CounterComponent } from './components/counter/counter.component';
import { CountService } from './services/count.service';
import { NotificationsRootComponent } from './components/notifications-root/notifications-root.component';
import { NotificationsListComponent } from './components/notifications-list/notifications-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Test1Component } from './components/test1/test1.component';
import { EditPerosnComponent } from './components/edit-perosn/edit-perosn.component';
import { NumInputComponent } from './components/num-input/num-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MyListComponent,
    IsExpPipe,
    BadPracticePipe,
    CounterComponent,
    NotificationsRootComponent,
    NotificationsListComponent,
    Test1Component,
    EditPerosnComponent,
    NumInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // CountService,
    // { provide: CountService, useClass: CountService },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }