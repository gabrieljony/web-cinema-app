import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-lista/home.component';
import { FilmeComponent } from './filme/filme.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'filme/:id', component: FilmeComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  providers: []
})
export class AppRoutingModule { }
