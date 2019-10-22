import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective implements OnInit {

  ngOnInit(): void {
    console.log('si ingresa');
    setTimeout(
      () => {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      },
      2000);
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  // @Input('appDelay')
  // set appDelay(time: number) {
  //   setTimeout(
  //     () => {
  //       this.viewContainerRef.createEmbeddedView(this.templateRef);
  //     },
  //     time);
  // }

}
