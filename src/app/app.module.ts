import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ImagemFilmePipe } from './pipes/imagem-filme.pipe';
import { HomeComponent } from './components/home/home.component';
import { FilmeComponent } from './components/filme/filme.component';
import { AppRoutingModule } from './app-routing.module';
import { ListarFilmesComponent } from './components/listar-filmes/listar-filmes.component';
import { HoraMinutosPipe } from './pipes/hora-minutos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImagemFilmePipe,
    HomeComponent,
    FilmeComponent,
    ListarFilmesComponent,
    HoraMinutosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
