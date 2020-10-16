import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'registro',
    loadChildren: () => import('./features/registro/registro.module').then((m) => m.RegistroModule),
  },
  {
    path: 'eventos',
    loadChildren: () => import('./features/eventos/eventos.module').then((m) => m.EventosModule),
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then((m) => m.BooksModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
