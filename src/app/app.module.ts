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
import { HeaderComponent } from './components/header/header.component';
import { BtnGeneroComponent } from './components/btn-genero/btn-genero.component';
import { CircleVotoComponent } from './components/circle-voto/circle-voto.component';
import { PaginacaoComponent } from './components/paginacao/paginacao.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagemFilmePipe,
    HomeComponent,
    FilmeComponent,
    ListarFilmesComponent,
    HoraMinutosPipe,
    HeaderComponent,
    BtnGeneroComponent,
    CircleVotoComponent,
    PaginacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
