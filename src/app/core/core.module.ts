import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    ToolbarComponent
  ],
  providers: [],
  exports: [
    NavbarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('Ya existe un import de CoreModule,' +
        'Solo debe importarse una vez en todo el proyecto');
    }
  }

}
