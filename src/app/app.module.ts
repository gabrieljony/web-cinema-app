import { PaginacaoModule } from './paginacao/paginacao.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ImagemFilmePipe } from './pipes/imagem-filme/imagem-filme.pipe';
import { HomeComponent } from './home-lista/home.component';
import { FilmeComponent } from './filme/filme.component';
import { AppRoutingModule } from './app-routing.module';
import { ListarFilmesComponent } from './home-lista/listar-filmes/listar-filmes.component';
import { HoraMinutosPipe } from './pipes/hora-minutos/hora-minutos.pipe';
import { HeaderComponent } from './templates/header/header.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    FilmeComponent,
    HeaderComponent,
    HoraMinutosPipe,
    ImagemFilmePipe,
    ListarFilmesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ComponentsModule,
    PaginacaoModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
