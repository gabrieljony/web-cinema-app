import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private urlAPI: string = 'https://api.themoviedb.org/3';
  private apikey: string = '67f2745bfbab836b3214ba02776d32ba';

  constructor(private http: HttpClient) { }

  getBuscarPorFilme(query: string) {
    const url = `${this.urlAPI}${query}?api_key=${this.apikey}&language=pt-br&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, '');
  }

  getDiscoverMovie() {
    return this.getBuscarPorFilme(`/discover/movie`)
    .pipe(map((data: any) => data.results));
  }

  getSearchMovie(termino: string) {
    return this.getBuscarPorFilme(`/search/movie?query=${termino}&sort_by=popularity.desc`)
    .pipe(map((data: any) => data.results));
  }

  getFilme(id: string) {
    return this.getBuscarPorFilme(`/movie/${id}`)
    .pipe(map((data: any) => data));
  }

}
