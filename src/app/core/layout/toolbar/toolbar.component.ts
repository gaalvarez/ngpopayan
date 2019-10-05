import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input()
  titulo = 'Ng Popayán';
  isOpenSidenav = true;

  @Output()
  menuClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickMenu() {
    this.isOpenSidenav = !this.isOpenSidenav;
    this.menuClick.emit();
  }

}
