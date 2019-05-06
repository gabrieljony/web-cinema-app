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

  getBuscar(query: string) {
    const url = `https://api.themoviedb.org/3${query}&api_key=${
      this.apikey
      }&language=pt-br&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, '');
  }

  getBuscarPorFilme(query: string) {
    const url = `https://api.themoviedb.org/3${query}?api_key=${
      this.apikey
      }&language=pt-br&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, '');
  }

  getDiscoverMovie() {
    return this.getBuscar('/discover/movie?sort_by=popularity.desc').pipe(
       map((data: any) => data.results)
    );
  }

  getSearchMovie(termino: string) {
    return this.getBuscar(
      `/search/movie?query=${termino}&sort_by=popularity.desc`
    ).pipe(map((data: any) => data.results));
  }

  getFilme(id: string) {
    return this.getBuscarPorFilme(`/movie/${id}`).pipe(
      map((data: any) => data)
    );
  }

}
