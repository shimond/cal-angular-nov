import { Route } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { HomeComponent } from "./components/home/home.component";
import { KefelBoardComponent } from "./components/kefel-board/kefel-board.component";
import { KefelResultComponent } from "./components/kefel-result/kefel-result.component";
import { LoginComponent } from "./components/login/login.component";
import { NotAllowedPageComponent } from "./components/not-allowed-page/not-allowed-page.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AuthGuard } from "./services/guards/auth.guard";

export const APP_ROUTES: Route[] = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'kefel', component: KefelBoardComponent, canActivate:[AuthGuard], canDeactivate:[] },
    { path: 'login', component: LoginComponent },
    { path: 'unauth', component: NotAllowedPageComponent },
    { path: 'calc-result/:xValue/:yValue', component: KefelResultComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', component: PageNotFoundComponent }

];