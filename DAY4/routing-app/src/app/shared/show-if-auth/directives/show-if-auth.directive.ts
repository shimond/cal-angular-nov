import { Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { distinct, distinctUntilChanged, Subscriber, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Directive({
  selector: '[appShowIfAuth]'
})
export class ShowIfAuthDirective implements OnInit, OnDestroy {

  private subs = new Subscription();

  constructor(
    private authService: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }


  ngOnInit(): void {
    const tempSub = this.authService.isAuth$.pipe(distinctUntilChanged()).subscribe(isAuth => {
      if (isAuth) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
    this.subs.add(tempSub);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
