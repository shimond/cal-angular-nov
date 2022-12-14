import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.module-routing';
import { KefelBoardComponent } from './components/kefel-board/kefel-board.component';
import { KefelResultComponent } from './components/kefel-result/kefel-result.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { NotAllowedPageComponent } from './components/not-allowed-page/not-allowed-page.component';
import { MyPanelModule } from './shared/my-panel/my-panel.module';
import { CoreModule } from './core/core.module';
import { ShowIfAuthDirective } from './shared/show-if-auth/directives/show-if-auth.directive';
import { ShowIfAuthModule } from './shared/show-if-auth/show-if-auth.module';
import { HoverMeDirective } from './direcvies/hover-me.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    KefelBoardComponent,
    KefelResultComponent,
    PageNotFoundComponent,
    LoginComponent,
    NotAllowedPageComponent,
    HoverMeDirective,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(APP_ROUTES),
    MyPanelModule,
    ShowIfAuthModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
