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

  getQuery(query: string) {
    const url = `https://api.themoviedb.org/3${query}&api_key=${
      this.apikey
      }&language=pt-BR&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, '');
  }

  getQueryforMovies(query: string) {
    const url = `https://api.themoviedb.org/3${query}?api_key=${
      this.apikey
      }&language=pt-BR&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, '');
  }

  getQueryforPage(query: string) {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${
      this.apikey
      }&language=pt-BR&callback=JSONP_CALLBACK&${query}`;

    return this.http.jsonp(url, '');
  }

  getDiscoverMovie() {
    return this.getQuery('/discover/movie?').pipe(
      map((data: any) => data.results)
    );
  }

  getSearchMovie(input: string) {
    return this.getQuery(
      `/search/movie?query=${input}`
    ).pipe(map((data: any) => data.results));
  }

  getMovie(id: string) {
    return this.getQueryforMovies(`/movie/${id}`).pipe(
      map((data: any) => data)
    );
  }

  getPage2(id: string) {
    return this.getQueryforPage(`page=${id}`).pipe(
      map((data: any) => data)
    );
  }

  //PAGINACAO
  //https://api.themoviedb.org/3/discover/movie?api_key=67f2745bfbab836b3214ba02776d32ba&language=pt-br&page=2


  getQueryNova(page: string) {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${
      this.apikey
      }&language=pt-BR&callback=JSONP_CALLBACK&${page}`;

    return this.http.jsonp(url, '');
  }

  getPage(id: string) {
    return this.getQueryNova(`page=${id}`)
    .pipe(map((data: any) => data));
  }

}
