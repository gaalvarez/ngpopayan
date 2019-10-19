import { Directive, OnInit, TemplateRef, ViewContainerRef, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective implements OnInit, OnDestroy {
  context: CarouselContext | null = null;
  index = 0;
  timerId: number | null = null;
  private _autoplayDelay: number;

  constructor(
    private tpl: TemplateRef<CarouselContext>,
    private vcr: ViewContainerRef
  ) { }

  // tslint:disable-next-line:no-input-rename
  @Input('appCarouselFrom') items: any[];

  @Input('appCarouselWithDelay')
  set autoplayDelay(autoplayDelay: number) {
    this._autoplayDelay = autoplayDelay;
  }

  get autoplayDelay() {
    return this._autoplayDelay || 1000;
  }

  @Input('appCarouselAutoplay')
  set autoplay(autoplay: 'on' | 'off') {
    autoplay === 'on' ? this.setAutoplayTimer() : this.clearAutoplayTimer();
  }

  ngOnDestroy() {
    this.clearAutoplayTimer();
  }

  private clearAutoplayTimer() {
    window.clearInterval(this.timerId);
  }

  private setAutoplayTimer() {
    this.timerId = window.setInterval(() => this.next(), this.autoplayDelay);
  }

  ngOnInit(): void {
    this.context = {
      $implicit: this.items[0],
      controller: {
        next: () => this.next(),
        prev: () => this.prev()
      }
    };

    this.vcr.createEmbeddedView(this.tpl, this.context);
  }

  next() {
    this.index++;
    if (this.index >= this.items.length) {
      this.index = 0;
    }
    this.context.$implicit = this.items[this.index];
  }

  prev() {
    this.index--;
    if (this.index < 0) {
      this.index = this.items.length - 1;
    }
    this.context.$implicit = this.items[this.index];
  }
}

export interface CarouselContext {
  $implicit: any;
  controller?: {
    next: () => void;
    prev: () => void;
  };
}
