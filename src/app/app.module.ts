import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImagemFilmePipe } from './pipes/imagem-filme.pipe';
import { HomeComponent } from './components/home/home.component';
import { FilmeComponent } from './components/filme/filme.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ImagemFilmePipe,
    HomeComponent,
    FilmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
