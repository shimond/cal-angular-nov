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
import { TestComponent } from './components/test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StringListComponent } from './components/string-list/string-list.component';
@NgModule({
  declarations: [
    AppComponent,
    MyListComponent,
    IsExpPipe,
    BadPracticePipe,
    CounterComponent,
    NotificationsRootComponent,
    NotificationsListComponent,
    TestComponent,
    StringListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    // CountService,
    // { provide: CountService, useClass: CountService },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
